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
- **Contact** (`/contact`) — inquiry form (front-end only, not wired to a
  backend or email service yet)
- **Client Portal** (`/portal`) — placeholder login screen; not yet connected
  to real authentication or a backend

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploying

This is a client-side routed single-page app (`react-router-dom`
`BrowserRouter`). Any static host works (Netlify, Vercel, GitHub Pages,
Cloudflare Pages), but you must configure the host to rewrite unknown paths
back to `index.html` so routes like `/services` work on a hard refresh.

## Next steps

- Replace placeholder company name, logo, address, and copy throughout
  `src/pages` and `src/components/Footer.jsx`
- Wire the contact form to a real email service or CRM
- Build real authentication for the client portal (`src/pages/Portal.jsx`)
- Add real project photos to `src/pages/Portfolio.jsx`
