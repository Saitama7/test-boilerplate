import * as v from '.'

test('capitalize', () => {
  expect(v.capitalize('abram')).toEqual('Abram')
})

test('createRequestAction', () => {
  const formatters = ['first', 'second', 'third']
  const suffixes = ['START', 'OK', 'FAIL']

  const expected = { LOGIN_REQUEST: undefined, LOGIN_SUCCESS: undefined, LOGIN_FAILURE: undefined }
  const expectedWithFormatters = { LOGIN_REQUEST: 'first', LOGIN_SUCCESS: 'second', LOGIN_FAILURE: 'third' }
  const expectedWithFormattersAndSuffixes = { LOGIN_START: 'first', LOGIN_OK: 'second', LOGIN_FAIL: 'third' }


  expect(v.createRequestAction('LOGIN')).toEqual(expect.objectContaining(expected))
  expect(() => v.createRequestAction()).toThrow()
  expect(v.createRequestAction('LOGIN', formatters)).toEqual(expectedWithFormatters)
  expect(v.createRequestAction('LOGIN', formatters, suffixes)).toEqual(expectedWithFormattersAndSuffixes)
})
