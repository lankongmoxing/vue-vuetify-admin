<template>
  <div>
    home
    <v-btn @click="goToTable">table</v-btn>
  </div>
</template>
<script>
export default {
  created () {
  // 调用 vuex 中的方法判断动态添加路由
    this.$store.dispatch('addRoutes')
  },
  methods: {
    // 前往table页面
    goToTable () {
      this.$router.push({
        path: '/table'
      })
    }
  }
}
</script>
