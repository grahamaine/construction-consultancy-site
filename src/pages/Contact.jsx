import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
  website: '', // honeypot — real users never fill this
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>Tell us about your project and we'll get back to you.</p>
        </div>
      </section>

      <section className="block">
        <div className="container grid grid-2">
          <div>
            <h2>Get in touch</h2>

            {status === 'sent' ? (
              <div className="portal-note" style={{ color: 'var(--navy)', background: 'var(--concrete)', borderColor: 'var(--concrete-dark)' }}>
                Thanks — your message has been sent. We'll get back to you shortly.
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                {/* Honeypot field — hidden from real users via CSS, bots fill it */}
                <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="service">Service of interest</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="" disabled>Select a service</option>
                    <option>Construction Management</option>
                    <option>Engineering Consultancy</option>
                    <option>Project Planning</option>
                    <option>Cost Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message">Project details</label>
                  <textarea id="message" name="message" required value={form.message} onChange={handleChange} />
                </div>

                {status === 'error' && (
                  <div className="portal-note">{errorMsg}</div>
                )}

                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div>
            <h2>Head Office</h2>
            <div className="contact-info">
              <div className="item">
                <strong>Address</strong>
                123 Harbour Road, Dublin, Ireland
              </div>
              <div className="item">
                <strong>Phone</strong>
                +353 1 234 5678
              </div>
              <div className="item">
                <strong>Email</strong>
                info@summitridge.example
              </div>
              <div className="item">
                <strong>Hours</strong>
                Monday – Friday, 8:30am – 5:30pm
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
