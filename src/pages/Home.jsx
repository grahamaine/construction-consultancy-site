import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🏗️',
    title: 'Construction Management',
    text: 'Full-service management from groundbreaking to handover, keeping quality, cost, and schedule under control.',
  },
  {
    icon: '📐',
    title: 'Engineering Consultancy',
    text: 'Structural, civil, and MEP consultancy backed by feasibility studies and regulatory compliance reviews.',
  },
  {
    icon: '📋',
    title: 'Project Planning',
    text: 'Programme development, risk assessment, and procurement strategy for projects of any scale.',
  },
]

const stats = [
  { num: '120+', label: 'Projects Delivered' },
  { num: '18', label: 'Years in Business' },
  { num: '40+', label: 'Specialist Staff' },
  { num: '98%', label: 'On-Time Delivery' },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Construction &amp; Consultancy</div>
          <h1>Building with precision. Advising with expertise.</h1>
          <p>
            SummitRidge partners with developers, public bodies, and private
            clients to plan, manage, and deliver construction projects that
            stand the test of time.
          </p>
          <div className="cta-row">
            <Link to="/contact" className="btn btn-primary">Request a Consultation</Link>
            <Link to="/portfolio" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--navy)', paddingTop: 48, paddingBottom: 48 }}>
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">What We Do</div>
            <h2>Services built for the full project lifecycle</h2>
            <p>
              From the first feasibility study to the final punch list, our
              teams stay involved so nothing falls through the cracks.
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--amber-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.78rem', marginBottom: 10 }}>
              Why SummitRidge
            </div>
            <h2>A single point of accountability</h2>
            <p>
              We combine construction management and engineering consultancy
              under one roof, so clients get coordinated advice instead of
              conflicting reports from separate firms. Every project is backed
              by a dedicated lead who is accountable from tender to handover.
            </p>
            <Link to="/about" className="btn btn-outline-dark">More About Us</Link>
          </div>
          <div className="card">
            <h3>Ready to start a project?</h3>
            <p>
              Log in to the client portal to track project milestones,
              documents, and approvals in one place.
            </p>
            <Link to="/portal" className="btn btn-primary">Go to Client Portal</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
