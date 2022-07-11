import { useEffect, useRef, useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

const TerminalPage = () => {
  const inputRef = useRef(null)

  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <main
      aria-hidden
      onClick={() => {
        inputRef.current.focus()
      }}
      onKeyDown={() => {
        inputRef.current.focus()
      }}
    >
      <MetaTags title="Terminal" description="Welcome to VWT!" />
      <div className="terminal">
        <div className="history">
          {!output && (
            <p>
              <br />
              Welcome to VWT, Type <span className="i">help</span> to get
              started.
            </p>
          )}
          <p>{output}</p>
        </div>
        <div className="console">
          <span>user@vwt.vercel.app &#62; </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(el) => {
              setInput(el.target.value)
            }}
            onKeyDown={(el) => {
              if (el.key === 'Enter') {
                if (input === '') return

                let newOutput = ''
                newOutput = output + '\n' + '> ' + input + '\n'

                switch (input.toLowerCase()) {
                  case 'about':
                    newOutput +=
                      'Voyages within Terminal, version DEMO. \n' +
                      'Website licensed under the GNU GPLv3 license.'
                    break
                  case 'clear':
                  case 'cls':
                    newOutput = ''
                    break
                  case 'help':
                    newOutput += 'WIP'
                    break
                  default:
                    newOutput += 'Invalid command.'
                    break
                }

                setOutput(newOutput)
                setInput('')
              }
            }}
            autoComplete="off"
          ></input>
        </div>
      </div>
    </main>
  )
}

export default TerminalPage
