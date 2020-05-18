import request from '@/utils/request'

export default {
  //用户登录
  login(userInfo) {
    return request({
      url: `/serviceucenter/ucenter-member/login`,
      method: 'post',
      data:userInfo
    })
  },
  //根据token获取用户信息   看似什么参数都没传  其实传了request
  getLoginUserInfo(){
    return request({
      url: `/serviceucenter/ucenter-member/getMemberInfo`,
      method: 'get'
    })
  }

}
