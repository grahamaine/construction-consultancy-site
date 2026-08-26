import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
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
            {submitted ? (
              <div className="portal-note" style={{ color: 'var(--navy)', background: 'var(--concrete)', borderColor: 'var(--concrete-dark)' }}>
                Thanks — this is a demo form with no backend wired up yet, so
                nothing was actually sent. Connect it to your email service or
                CRM of choice.
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" />
                </div>
                <div>
                  <label htmlFor="service">Service of interest</label>
                  <select id="service" name="service" defaultValue="">
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
                  <textarea id="message" name="message" required />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
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
