import React, { useState } from 'react'
// import { History } from 'history'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signIn } from '../api'
import { Credentials } from '../../shared/types'
import Button from 'react-bootstrap/Button'
import { updateSession } from '../../redux/system/actions'
import { ToastContainer, toast } from 'react-toastify'

type Props = {
  setAlerts: any
  alerts: Array<any>
  setUser: any
}

const SignIn: React.FC<Props> = props => {
  const [email, setEmail] = useState('st@st.com')
  const [password, setPassword] = useState('stst')
  //const [passwordConfirmation, setPasswordConfirmation] = useState()
  let history = useHistory()
  const dispatch = useDispatch()

  const onSignIn = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const credentials: Credentials = { email, password }
    signIn(credentials)
      .then((res: any) => {
        props.setUser(res.data.user)
        // dispatch(updateSession(res.data.user.token))
      })
      .then(() => toast.success('Welcome!'))
      .then(() => {
        history.push('/new-order')
      })
      .catch((error: any) => {
        console.error(error)
        toast.error('Something went wrong, please check the console.')
      })
  }

  return (
    <div className="col-md-6 m-auto py-3">
      <form className="auth-form" onSubmit={onSignIn}>
        <h3>Oturum Aç</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Oturum Aç
        </Button>
      </form>
    </div>
  )
}
export default SignIn
