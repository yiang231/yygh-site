import request from '@/utils/request'

const api_path = '/api/hosp/hospital'
export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_path}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  getByHosname(hosname) {
    return request({
      url: `${api_path}/findByHosname/${hosname}`,
      method: 'get'
    })
  },
  show(hoscode) {
    return request({
      url: `${api_path}/${hoscode}`,
      method: 'get'
    })
  },
  findDepartment(hoscode) {
    return request({
      url: `${api_path}/department/${hoscode}`,
      method: 'get'
    })
  },
  getBookingScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `${api_path}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  findScheduleList(hoscode, depcode, workDate) {
    return request({
      url: `${api_path}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },
  //根据排班id查询排班对象
  getSchedule(id) {
    return request({
      url: `${api_path}/getSchedule/${id}`,
      method: 'get'
    })
  }
}
