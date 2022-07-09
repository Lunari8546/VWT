import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  EmailField,
  PasswordField,
  Submit,
} from '@redwoodjs/forms'
import { back, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AuthPage = () => {
  const { logIn, signUp, currentUser } = useAuth()

  const onSubmit = async (data) => {
    try {
      await logIn({ ...data })

      navigate(routes.landing())
    } catch (error) {
      console.log(error)
    }

    if (!currentUser) {
      await signUp({ ...data })
    }
  }

  return (
    <main className="menu">
      <MetaTags title="Auth" description="Welcome to VWT!" />
      <h1>Voyages within Terminal</h1>
      <br />
      <br />
      <br />
      <br />
      {currentUser && (
        <div>
          <p>You&apos;ve already logged in.</p>
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
        </div>
      )}
      {!currentUser && (
        <Form onSubmit={onSubmit}>
          <div className="formField">
            <Label name="username">Email: </Label>
            <EmailField
              name="username"
              autoComplete="off"
              validation={{ required: true }}
            ></EmailField>
          </div>
          <br />
          <div className="formField">
            <Label name="password">Password: </Label>
            <PasswordField
              name="password"
              autoComplete="off"
              validation={{ required: true }}
            ></PasswordField>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Submit>Login / Register</Submit>
        </Form>
      )}
    </main>
  )
}

export default AuthPage
