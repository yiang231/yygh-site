import request from '@/utils/request'

export default {
  login(loginVo) { // 用户登录
    return request({
      url: `/api/user/login`,
      method: 'post',
      data: loginVo
    })
  }
}
