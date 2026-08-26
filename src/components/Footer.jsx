import { Link } from 'react-router-dom'

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
