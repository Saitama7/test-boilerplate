/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import axios from 'axios'
import { apiUrl } from 'config'
import { LOCAL_STORAGE_KEYS } from '../../constants'

console.log(apiUrl)

export const requester = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
})
requester.interceptors.request.use((config) => {
  config.headers.common.Authorization = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN)

  if (config.data && config.data.noAuth) {
    delete config.data.noAuth
    delete config.headers.common.Authorization
  }

  if (config.data && config.data.multi) {
    config.headers.common['Content-Type'] = 'multipart/form-data'
    config.headers.common.Accept = 'multipart/form-data'
  }

  return config
})
