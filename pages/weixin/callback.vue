<template>
  <div>
  </div>
</template>
<script>
export default {
  layout: "empty",
  data() {
    return {}
  },
  mounted() {
// return "redirect:http://localhost:3000/weixin/callback?name="+name+"&token="+token+"&openid="+(StringUtils.isEmpty(userInfo.getPhone())?openid:"");// pages/weixin/callback.vue

    let token = this.$route.query.token
    let name = this.$route.query.name
    let openid = this.$route.query.openid
    // 调用父vue方法（打开登录弹窗）
    //调用大窗口中的方法
    window.parent['loginCallback'](name, token, openid)
  }
}
</script>
