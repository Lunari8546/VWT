import { back } from '@redwoodjs/router'

const NotFoundPage = () => {
  return (
    <main className="404 menu">
      <p>404 Page not found.</p>
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          back()
        }}
      >
        Return
      </button>
    </main>
  )
}

export default NotFoundPage
