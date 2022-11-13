import request from '@/utils/request'

export default {
  //Beijin Hostype
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },
  //首页上没有用到
  //根据id查询下级
  findByParentId(parentId) {
    return request({
      url: `${api_name}/findChildData/${parentId}`,
      method: 'get'
    })
  }
}
