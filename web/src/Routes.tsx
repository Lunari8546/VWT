import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={LandingPage} name="landing" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
