/* eslint-disable no-underscore-dangle */
import { combineReducers } from 'redux'
import { handleActions, combineActions } from 'redux-actions'

import { boolReducer } from 'helpers'
import { actions } from './actions'

export const initialState = { loginStatus: false }

export const isAuthorization = boolReducer(
  [actions.loginRequest],
  [combineActions(actions.loginSuccess, actions.loginFailure)]
)

// export const isTokenUpdating = boolReducer(
//   [actions.authInfoRequest],
//   [combineActions(actions.authInfoSuccess, actions.authInfoFailure)]
// );

export const data = handleActions(
  {
    [actions.loginSuccess]: (state, { payload }) => ({ ...state, loginStatus: true, ...payload }),
    [actions.loginFailure]: (state, { payload }) => ({ ...state, error: payload }),
    [actions.logout]: () => initialState,
  },
  initialState
)

export default combineReducers({
  data,
  isAuthorization,
})

const _getSlice = (state) => state.login.data

export const authSelectors = {
  loginStatus: (state) => _getSlice(state).loginStatus,
}
