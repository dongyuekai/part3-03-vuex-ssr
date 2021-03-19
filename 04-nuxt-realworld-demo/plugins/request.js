import axios from 'axios'

// export const request = axios.create({
//   baseURL: 'https://conduit.productionready.io'
// })
// 创建请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})
// 请求拦截器 统一设置Token
request.interceptors.request.use(function (config) {
  return config
})
// 响应拦截器
