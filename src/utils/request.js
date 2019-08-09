'use strict'
import axios from 'axios'
// import { Toast } from 'vant'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  // baseURL: '/manager-dev', // 本地运行的开发环境的baseURL，跨域处理
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  // config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // console.log('request url:' + config.baseURL + config.url)
  return config
}, error => {
  // Do something with request error
  console.log('error：' + error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // switch (response.data.code) {
    //   case 20001:
    //     Toast('服务器异常')
    //     break
    //   case 20011:
    //     Toast('输入参数有误')
    //     break
    //   case 20012:
    //     Toast('文件后缀丢失')
    //     break
    //   case 20013:
    //     Toast('不允许上传的文件类型')
    //     break
    //   case 20014:
    //     Toast('文件大小超出限制')
    //     break
    //   case 20015:
    //     Toast('不支持压缩')
    //     break
    // }
    return response.data
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
