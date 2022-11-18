import request from '@/utils/request'

const api_path = '/api/order/orderInfo'
export default {
  //订单列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_path}/auth/${page}/${limit}`,
      method: `get`,
      params: searchObj
    })
  },
  //订单状态
  getStatusList() {
    return request({
      url: `${api_path}/auth/getStatusList`,
      method: 'get'
    })
  },
  //提交订单
  submitOrder(scheduleId, patientId) {
    return request({
      url: `${api_path}/auth/submitOrder/${scheduleId}/${patientId}`,
      method: 'post'
    })
  },
  //查询订单详情
  getOrder(orderId) {
    return request({
      url: `${api_path}/auth/getOrder/${orderId}`,
      method: 'get'
    })
  },

}
