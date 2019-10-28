import { createActions } from 'redux-actions'
import { createRequestAction, getResponseError } from 'utils'


const ENDPOINTS = {
  LOGIN: '/login/',
}

export const actionCreators = createActions({
  ...createRequestAction('LOGIN'),
})

export function login(params) {
  return async (dispatch, getState, { api }) => {
    dispatch(actionCreators.loginRequest())
    try {
      const { data } = await api.post(ENDPOINTS.LOGIN, params)
      const payload = {
        ...data,
      }

      dispatch(actionCreators.loginSuccess(payload))
      return payload
    } catch (e) {
      const error = getResponseError(e)
      dispatch(actionCreators.loginFailure(error || e))
      return Promise.reject(error)
    }
  }
}

export const actions = {
  ...actionCreators,
  login,
}
