import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="auth">
        <Route path="/" page={LandingPage} name="landing" />
      </Private>
      <Route path="/auth" page={AuthPage} name="auth" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
