import { MetaTags } from '@redwoodjs/web'

const TerminalPage = () => {
  return (
    <main>
      <MetaTags title="Terminal" description="Welcome to VWT!" />
      <div className="terminal">
        <div className="history">
          <p className="msg">
            Welcome to VWT. Type <span className="i">help</span> to get started!
          </p>
        </div>
        <div className="console">
          <span>user@vwt.vercel.app &#62;</span>
          <input autoComplete="off"></input>
        </div>
      </div>
    </main>
  )
}

export default TerminalPage
