function Portal() {
  return (
    <div className="portal-wrap">
      <div className="portal-card">
        <h1>Client Portal</h1>
        <p>Sign in to track project milestones, documents, and approvals.</p>

        <div className="portal-note">
          Placeholder UI only — not connected to a backend or authentication
          yet. Wire this up to your auth provider (e.g. Auth0, Firebase, or a
          custom API) before going live.
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="portal-email">Email</label>
            <input id="portal-email" type="email" placeholder="you@company.com" disabled />
          </div>
          <div>
            <label htmlFor="portal-password">Password</label>
            <input id="portal-password" type="password" placeholder="••••••••" disabled />
          </div>
          <button type="submit" className="btn btn-primary" disabled>
            Sign In (coming soon)
          </button>
        </form>
      </div>
    </div>
  )
}

export default Portal
