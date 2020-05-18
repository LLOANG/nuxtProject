import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import cookie from 'js-cookie'
//创建axios实例
const service=axios.create({
  baseURL:'http://localhost:9001',
  timeout:20000
})


service.interceptors.request.use(//每次发送请求的时候调用拦截器
  config => {
    //debugger
    if (cookie.get('token')) {
      //如果cookie存在token   就把token放到header里面去
      config.headers['token'] = cookie.get('token');
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
)
export default service
