import request from '@/utils/request'

export default {
  getLoginParam() {
    return request({
      url: `/api/user/wx/getLoginParam`,
      method: 'get'
    })
  }
}
