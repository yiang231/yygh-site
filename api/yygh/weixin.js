import request from '@/utils/request'

export default {

  //微信登录二维码需要的参数
  getLoginParam() {
    return request({
      url: `/api/user/wx/getLoginParam`,
      method: 'get'
    })
  },
  //获取支付链接
  createNative(orderId) {
    return request({
      url: `/api/payment/weixin/createNative/${orderId}`,
      method: 'get'
    })
  },
  queryPayStatus(orderId) {
    return request({
      url: `/api/payment/weixin/queryPayStatus/${orderId}`,
      method: 'get'
    })
  }
}
