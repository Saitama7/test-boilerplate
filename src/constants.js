/* eslint-disable no-console */
const merge = require('lodash/merge')

export const BASE_URL = localStorage.getItem('BASE_URL') || process.env.REACT_APP_BASE_URL
const localStoragePrefix = 'smf:'

const setPrefixedName = (name, prefix = localStoragePrefix) => `${prefix}:${name}`

export const LOCAL_STORAGE_KEYS = {
  SETTINGS: setPrefixedName('settings'),
  USER: setPrefixedName('user'),
  TOKEN: setPrefixedName('token'),
}

module.export = merge(BASE_URL, LOCAL_STORAGE_KEYS.SETTINGS)
