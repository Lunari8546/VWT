import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  EmailField,
  PasswordField,
  Submit,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const LandingPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  const onSubmit = async (data) => {
    console.log(data)

    toast('Loading...')
  }

  return (
    <main className="menu">
      <MetaTags title="Landing" description="Welcome to VWT!" />
      <Toaster />
      <h1>Voyages within Terminal</h1>
      <br />
      <br />
      <br />
      <Form onSubmit={onSubmit}>
        <div className="formField">
          <Label name="email">Email: </Label>
          <EmailField
            name="email"
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
        <Submit>Login / Register</Submit>
      </Form>
    </main>
  )
}

export default LandingPage
