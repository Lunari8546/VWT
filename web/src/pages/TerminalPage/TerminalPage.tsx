import { useEffect, useRef, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import UserCell from 'src/components/UserCell'

const TerminalPage = () => {
  const { currentUser } = useAuth()

  const inputRef = useRef(null)

  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const commands = {
    about: {},
    clear: {},
    help: { cmd: String },
    profile: {},
  }

  const runCommand = (el) => {
    if (el.key === 'Enter') {
      if (input.trim().length === 0) return

      let newOutput = ''
      newOutput = output + '\n' + '> ' + input + '\n'

      switch (input.toLowerCase()) {
        case 'about':
          newOutput +=
            'Voyages within Terminal, version DEMO.\n' +
            'Website licensed under the GNU GPLv3 license.'
          break

        case 'clear':
          newOutput = ''
          break

        case 'help': {
          let i = 0

          for (const k in commands) {
            const v = commands[k]

            newOutput += `${k}`

            for (const k in v) {
              newOutput += ` <${k}>`
            }

            if (i !== Object.keys(commands).length - 1) newOutput += ',\n'

            i++
          }
          break
        }

        case 'profile':
          newOutput += <UserCell type={'name'} id={currentUser.id} />
          break

        default:
          newOutput += 'Invalid command.'
          break
      }

      setOutput(newOutput)
      setInput('')
    }
  }

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
          <span>
            <UserCell id={currentUser.id} type="email" /> &#62;{' '}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(el) => {
              setInput(el.target.value)
            }}
            onKeyDown={(el) => {
              runCommand(el)
            }}
            autoComplete="off"
          ></input>
        </div>
      </div>
    </main>
  )
}

export default TerminalPage
