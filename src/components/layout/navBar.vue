import navBar from '@/components/layout/navBar';
<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >

    <svg-icon icon-class="user" />

    <v-row class="navBar">
      <v-toolbar-title class="left">vue-vuetify-admin</v-toolbar-title>

      <v-menu
        class="right"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            class="mx-2"
            fab
            dark
            large
            color="purple"
            v-on="on"
          >
            <v-icon dark>mdi-android</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="loginOut">退出登录</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    // 退出登录
    loginOut () {
      this.$store.dispatch('user/loginOut')
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.navBar {
  display: flex;
  justify-content: space-between;
}
</style>
