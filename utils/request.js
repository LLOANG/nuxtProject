import axios from 'axios'
//创建axios实例
const service=axios.create({
  baseURL:'http://localhost:8004',
  timeout:20000
})
export default service
