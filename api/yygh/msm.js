import request from '@/utils/request'

export default {
  sendCode(phone) { // 发送验证码
    return request({
      url: `/api/msm/send/${phone}`,
      method: 'get'
    })
  }
}
