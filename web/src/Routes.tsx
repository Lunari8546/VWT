import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="auth">
        <Route path="/" page={LandingPage} name="landing" />
        <Route path="/terminal" page={TerminalPage} name="terminal" />
      </Private>
      <Route path="/auth" page={AuthPage} name="auth" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
