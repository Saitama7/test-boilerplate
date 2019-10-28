const defaultSuffixes = ['REQUEST', 'SUCCESS', 'FAILURE']

/**
 *
 * @param {string} str String value to capitalize
 * @return {string}
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Creates an object with an action types as keys, enhanced with suffixes. Default suffixes are 'REQUEST', 'SUCCESS', 'FAILURE'.
 * @param {String} type Action type in upper snake case
 * @param {Function[]} payloadFormatters Array of formatters. Order: pending, success, failure
 * @param {String[]} suffixes Array of suffixes that will append to type
 * @return {string|{[p: string]: *}}
 */
export function createRequestAction(type, payloadFormatters = [], suffixes = defaultSuffixes) {
  if (!type || typeof type !== 'string') throw new Error('type argument is required')
  const hasFormatters = payloadFormatters && payloadFormatters.length > 0

  return suffixes.reduce(
    (acc, suffix, idx) => ({
      ...acc,
      [`${type}_${suffix}`]: hasFormatters ? payloadFormatters[idx] : undefined,
    }),
    {}
  )
}

/**
 *
 * @param {*} e Error object. Might be an Error instance or plain object
 * @returns {string} A string
 */
export function getResponseError(e = {}) {
  const { response } = e

  return response ? response.data || response.statusText : 'network error'
}

/**
 *
 * @param {string} key Key to look for
 * @param {Object[]} objects Array of objects
 * @returns {Boolean}
 */
export function hasInObjects(key, objects) {
  return objects.every((obj) => hasOwnProperty(key, obj))
}

/**
 *
 * @param {String} text Text from server to initialize htmls tags
 */
export function createMarkup(text) {
  return { __html: text }
}

/**
 * @param {String} key Key to set/get something to localStorage
 * @param {Any} item Value to set/get to localStorage
 */
export const setLocal = (key, item) => localStorage.setItem(key, item)
export const getLocal = (key, item) => localStorage.getItem(key, item)
export const delLocal = (key) => localStorage.removeItem(key)

/**
 * @param {Array} arr Array of objects width isActive keys
 * @returns {Array} Array of filtered by isActive key == true
 */
export function getActives(arr) {
  return arr.filter((item) => item.is_active)
}

/**
 * @param {Number} id Id of object which name returns
 * @param {Array} arr Array of objects
 * @returns {String} name of object
 */
export function getNameById(id, arr) {
  return arr.find((item) => item.id === id).name
}

/**
 * @param {Array} arr Array of objects
 * @returns {Number} Id of object which need to delete
 */
export function deleteFromList(arr, id) {
  return arr.filter((item) => item.id !== id)
}

/**
 * @param {Date} date
 * @param {Bool} withTime if true return date with time
 * @returns {Date} formatted date 'dd/mm/yyy, time'
 */
export function getFormattedDate({ date, withTime }) {
  if (withTime) {return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.toLocaleTimeString()}`;}

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

/**
 * @param {Date} date
 * @returns {Date}ISO string with local time'
 */
export function formatToISOString(date) {
  const tzOffset = new Date().getTimezoneOffset() * 60000
  const localTime = new Date(Date.now() - tzOffset).toISOString().slice(10)
  const slicedDate = date.toISOString().split('T')[0]
  return `${slicedDate}${localTime}`
}
