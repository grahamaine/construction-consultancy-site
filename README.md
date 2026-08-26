# Construction & Consultancy Site

A starter marketing website, client portal placeholder, and portfolio for a
construction and consultancy company. Built with React + Vite + React Router,
plain CSS (no framework dependency).

All company name, address, phone, and project details are placeholder
content — search for "SummitRidge" and replace with the real client details
before launch.

## Pages

- **Home** (`/`) — hero, stats, services overview, CTA into the portal
- **Services** (`/services`) — construction management, engineering
  consultancy, project planning, cost consultancy, compliance, due diligence
- **Portfolio** (`/portfolio`) — sample project case-study cards
- **About** (`/about`) — company story and values
- **Contact** (`/contact`) — inquiry form, posts to `/api/contact` (see
  below) which sends an email over SMTP
- **Client Portal** (`/portal`) — placeholder login screen; not yet connected
  to real authentication or a backend

Footer social links (Facebook/Instagram/LinkedIn/X) point to placeholder
URLs — update them in `src/components/Footer.jsx`.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically http://localhost:5173). Note: the plain
Vite dev server does not run the `/api/contact` serverless function — use
`vercel dev` (after `vercel login` / `vercel link`) to test the contact form
end to end locally, or just test it on a deployed preview.

## Build

```bash
npm run build
npm run preview
```

## Deploying

This is a client-side routed single-page app (`react-router-dom`
`BrowserRouter`) plus one Vercel serverless function (`api/contact.js`).
Deploy to Vercel directly — it detects both automatically. If you deploy to
a different static host (Netlify, GitHub Pages, Cloudflare Pages), you'll
need to port `api/contact.js` to that platform's function format and
configure a rewrite so unknown paths fall back to `index.html`.

## Contact form email (SMTP)

`api/contact.js` sends the contact form via SMTP using
[Nodemailer](https://nodemailer.com/), and works with any standard SMTP
provider (Gmail app password, Zoho, Outlook, SendGrid, Mailgun, your host's
mail server, etc.). It validates input server-side and includes a hidden
honeypot field to cut down on bot spam.

Set these environment variables in the Vercel dashboard (Project Settings →
Environment Variables) — see `.env.example` for details:

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | Usually `587` (STARTTLS) or `465` (implicit TLS) |
| `SMTP_SECURE` | `"true"` for port 465, `"false"` otherwise |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password / app password |
| `CONTACT_TO_EMAIL` | Mailbox that receives submissions |
| `CONTACT_FROM_EMAIL` | Optional "From" address (defaults to `SMTP_USER`) |

These are secrets — add them directly in the Vercel dashboard (or a local
`.env` for `vercel dev`), never commit them.

## Next steps

- Replace placeholder company name, logo, address, and copy throughout
  `src/pages` and `src/components/Footer.jsx`
- Replace placeholder social links in `src/components/Footer.jsx`
- Set the SMTP environment variables above so the contact form can send
- Build real authentication for the client portal (`src/pages/Portal.jsx`)
- Add real project photos to `src/pages/Portfolio.jsx`
