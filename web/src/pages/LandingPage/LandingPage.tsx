import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

const LandingPage = () => {
  const { logOut, currentUser } = useAuth()

  return (
    <main className="menu">
      <MetaTags title="Landing" description="Welcome to VWT!" />
      <h1>Voyages within Terminal</h1>
      <br />
      <br />
      <br />
      <br />
      <p>You&apos;re logged in as User {currentUser.id}.</p>
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          logOut()
        }}
      >
        Logout
      </button>
    </main>
  )
}

export default LandingPage
