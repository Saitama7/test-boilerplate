import { requester } from 'services/api'
import thunkMiddleware from 'redux-thunk'

const req = require.context('.', true, /\.\/.+\/middleware\.js$/)

module.exports = req.keys()
  .map((key) => req(key).default)
  .concat([
    thunkMiddleware.withExtraArgument({ api: requester }),
  ])
