import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          Summit<span>Ridge</span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/portal" onClick={() => setOpen(false)} className="btn btn-primary">
            Client Portal
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
