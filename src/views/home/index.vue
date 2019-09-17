<template>
  <div>
    home
    <v-btn @click="goToLogin">Login</v-btn>
    <v-btn @click="goToTable">table</v-btn>
  </div>
</template>
<script>
export default {
  created () {
  },
  methods: {
    // 前往login页面
    goToLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    // 前往table页面
    goToTable () {
      this.$router.push({
        path: '/table'
      })
    }
  }
}
</script>
