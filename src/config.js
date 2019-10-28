const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'http://localhost:3000',
    fbAppId: '991453140998882',
    googleClientId: '464712936089-q953apdu1bjiqtcjndktnnk1ts4f2cgv.apps.googleusercontent.com',
    gtmId: 'GTM-WX5ZNVC',
  },
  test: {},
  development: {
    apiUrl: 'http://localhost:3000',
  },
  production: {
    apiUrl: 'http://localhost:3000',
  },
}

module.exports = merge(config.all, config[config.all.env])
