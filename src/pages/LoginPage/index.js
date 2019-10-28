import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFormValues } from 'redux-form'

import { LoginForm, LoginTemplate } from 'components'

// Data
import { actions as authActions } from './data/actions'

const LoginPage = () => {
  const dispatch = useDispatch()
  const selector = (state) => getFormValues('login')(state)
  const user = useSelector((state) => selector(state))

  async function handleSubmit(e) {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log(user)

    try {
      await dispatch(authActions.login(user))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  return (
    <LoginTemplate>
      <LoginForm handleSubmit={handleSubmit} submitting={false} />
    </LoginTemplate>
  )
}

export default LoginPage
