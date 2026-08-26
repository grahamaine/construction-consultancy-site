const serviceGroups = [
  {
    icon: '🏗️',
    title: 'Construction Management',
    text: 'On-site management, subcontractor coordination, quality control, and health & safety oversight for commercial, residential, and industrial builds.',
  },
  {
    icon: '📐',
    title: 'Engineering Consultancy',
    text: 'Structural and civil engineering assessments, MEP design review, and feasibility studies for new-build and renovation projects.',
  },
  {
    icon: '📋',
    title: 'Project Planning & Programme Management',
    text: 'Master scheduling, procurement strategy, risk registers, and stakeholder reporting from concept through completion.',
  },
  {
    icon: '💰',
    title: 'Cost Consultancy & Quantity Surveying',
    text: 'Cost planning, tender analysis, valuations, and final account settlement to keep budgets predictable.',
  },
  {
    icon: '📄',
    title: 'Regulatory & Compliance Advisory',
    text: 'Planning permission support, building control liaison, and compliance audits against current codes and standards.',
  },
  {
    icon: '🔍',
    title: 'Due Diligence & Feasibility Studies',
    text: 'Site appraisals, technical due diligence, and feasibility reporting to de-risk acquisitions and new developments.',
  },
]

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Services</h1>
          <p>Consultancy and construction management, tailored to your project.</p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="grid grid-3">
            {serviceGroups.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
