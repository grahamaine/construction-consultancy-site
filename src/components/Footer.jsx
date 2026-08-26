import { Link } from 'react-router-dom'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/summitridge',
    path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94Z',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/summitridge',
    path: 'M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.55.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77.55-.56 1.11-.9 1.77-1.16.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.51.6-.67 1.02-.12.31-.26.78-.3 1.65C4.27 8.55 4.26 8.87 4.26 12s.01 3.45.06 4.5c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.51 1.02.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.51-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.5s-.01-3.45-.06-4.5c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.67-1.02 2.7 2.7 0 0 0-1.02-.67c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8Zm0 3.06a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28Zm0 1.8a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68Zm5.34-1.99a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/summitridge',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z',
  },
  {
    name: 'X',
    href: 'https://x.com/summitridge',
    path: 'M18.24 3H21l-6.5 7.43L22.2 21h-6.16l-4.82-6.3L5.68 21H2.9l6.96-7.95L2 3h6.32l4.36 5.76L18.24 3Zm-1.08 16.2h1.53L7.9 4.7H6.26l10.9 14.5Z',
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div>
            <h4>SummitRidge Consulting &amp; Construction</h4>
            <p>
              Building and advising with precision. From feasibility studies to
              final handover, we deliver projects on time and on budget.
            </p>
            <ul className="social-row">
              {socialLinks.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.name}>
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <path fill="currentColor" d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Construction Management</Link></li>
              <li><Link to="/services">Engineering Consultancy</Link></li>
              <li><Link to="/services">Project Planning</Link></li>
              <li><Link to="/portal">Client Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>123 Harbour Road, Dublin</li>
              <li>+353 1 234 5678</li>
              <li>info@summitridge.example</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} SummitRidge Consulting &amp; Construction Ltd. All rights reserved.</span>
          <span>Placeholder content — replace with real company details.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
