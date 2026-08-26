const projects = [
  {
    name: 'Harbourview Residences',
    category: 'Residential',
    tags: ['Construction Management', '48 Units'],
    text: 'Delivery of a 48-unit waterfront residential scheme, from groundworks to snagging, completed three weeks ahead of schedule.',
  },
  {
    name: 'Northgate Business Park',
    category: 'Commercial',
    tags: ['Engineering Consultancy', '12,000 m²'],
    text: 'Structural and MEP consultancy for a five-building commercial park, including full feasibility and planning support.',
  },
  {
    name: 'Riverside Logistics Hub',
    category: 'Industrial',
    tags: ['Project Planning', 'Design & Build'],
    text: 'Programme management for a 20,000 m² distribution centre, coordinating twelve subcontractor packages.',
  },
  {
    name: 'Old Mill Renovation',
    category: 'Heritage',
    tags: ['Due Diligence', 'Compliance Advisory'],
    text: 'Technical due diligence and regulatory advisory for the adaptive reuse of a protected heritage structure.',
  },
  {
    name: 'Elmfield School Extension',
    category: 'Public Sector',
    tags: ['Cost Consultancy', 'Quantity Surveying'],
    text: 'Cost planning and tender management for a new-build classroom wing, delivered within a fixed public-sector budget.',
  },
  {
    name: 'Craneford Retail Fit-Out',
    category: 'Commercial',
    tags: ['Construction Management', 'Fast-Track'],
    text: 'Fast-track fit-out programme for a multi-unit retail development, managed to a strict pre-Christmas opening date.',
  },
]

function Portfolio() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Portfolio</h1>
          <p>A selection of projects across residential, commercial, and public sectors.</p>
        </div>
      </section>

      <section className="block">
        <div className="container">
          <div className="grid grid-3">
            {projects.map((p) => (
              <div className="project-card" key={p.name}>
                <div className="project-thumb">{p.category}</div>
                <div className="project-body">
                  <div className="tag-row">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
