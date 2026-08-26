const values = [
  { title: 'Integrity', text: 'Transparent reporting and honest advice, even when it is not what a client wants to hear.' },
  { title: 'Precision', text: 'Detailed planning and rigorous quality control on every project, regardless of scale.' },
  { title: 'Accountability', text: 'One dedicated lead per project, accountable from first meeting to final handover.' },
]

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Construction and consultancy expertise built over 18 years.</p>
        </div>
      </section>

      <section className="block">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2>Who we are</h2>
            <p>
              SummitRidge Consulting &amp; Construction was founded to close the
              gap between engineering consultancy and on-site construction
              management. Instead of clients coordinating separate firms for
              design advice and build delivery, we provide both under a single
              accountable team.
            </p>
            <p>
              Today we work with private developers, public sector bodies, and
              commercial clients on projects ranging from single-site
              renovations to multi-building developments.
            </p>
          </div>
          <div className="card">
            <h3>At a glance</h3>
            <p>Founded: 2008</p>
            <p>Headquarters: Dublin, Ireland</p>
            <p>Sectors: Residential, Commercial, Industrial, Public</p>
            <p>Team: 40+ engineers, surveyors &amp; project managers</p>
          </div>
        </div>
      </section>

      <section className="block alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Values</div>
            <h2>What guides our work</h2>
          </div>
          <div className="grid grid-3">
            {values.map((v) => (
              <div className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
