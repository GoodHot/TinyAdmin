import axios from 'axios'
import Vue from 'vue'
import { ToastProgrammatic as Toast } from 'buefy'

const ACCESS_TOKEN = 'ACCESS-TOKEN'

const requestConfig = window.config
// 创建 axios 实例
const service = axios.create({
  baseURL: requestConfig.baseURL, // api base_url
  timeout: 20000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    // const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      Toast.open({
        message: data.msg,
        type: 'is-danger'
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      const msg = data.msg || 'Authorization verification failed'
      Toast.open({
        message: msg,
        type: 'is-danger'
      })
      window.location = requestConfig.websiteURL + "/#/auth/login"
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers[ACCESS_TOKEN] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  const data = response.data
  if (data.status !== 200) {
    const msg = data.msg || '请求失败:\r\n' + response.config.url
    Toast.open({
      message: msg,
      type: 'is-danger'
    })
    return Promise.reject(data)
  }
  return data.data
}, err)

export {
  service as request,
  ACCESS_TOKEN,
  requestConfig as config
}