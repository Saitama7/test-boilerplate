import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { actions } from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const tokenMock = 'asdgfdgiji5mklijmnvblk'

describe('Login action', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('creates LOGIN_SUCCESS after successfully authenticated', (done) => {
    moxios.wait(() => {
      const request = moxios.request.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          token: tokenMock,
        },
      })
    })


    const expectedActions = [
      { type: 'LOGIN_REQUEST' },
      { type: 'LOGIN_SUCCESS', token: tokenMock },
    ]

    const store = mockStore({ token: '' })

    const params = {
      username: 'test',
      password: 'pwd',
    }

    store.dispatch(actions.login(params))
    expect(store.getActions()).toEqual(expectedActions)
    expect(actions.login(params)).toEqual({ token: tokenMock })
    done()
  })
})
