import nodemailer from 'nodemailer'

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL']

const MAX_LENGTHS = {
  name: 120,
  email: 200,
  company: 160,
  service: 80,
  message: 4000,
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key])
  if (missingEnv.length > 0) {
    console.error('Missing SMTP environment variables:', missingEnv.join(', '))
    return res.status(500).json({ error: 'Email is not configured on the server yet.' })
  }

  const body = req.body || {}
  const { name, email, company, service, message, website } = body

  // Honeypot: real users never fill this hidden field, bots often do.
  if (website) {
    return res.status(200).json({ ok: true })
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  for (const [field, value] of Object.entries({ name, email, company, service, message })) {
    if (value && String(value).length > MAX_LENGTHS[field]) {
      return res.status(400).json({ error: `${field} is too long.` })
    }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || '—'),
    service: escapeHtml(service || '—'),
    message: escapeHtml(message),
  }

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name} — ${safe.service}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || '—'}`,
        `Service: ${service || '—'}`,
        '',
        message,
      ].join('\n'),
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Service:</strong> ${safe.service}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    return res.status(502).json({ error: 'Failed to send message. Please try again later.' })
  }
}
