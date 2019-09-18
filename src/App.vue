<template>
  <div id="app">
    <v-app v-if="singlePage">
      <router-view />
    </v-app>
    <v-app v-else>
      <navBar></navBar>
      <sideBar></sideBar>
      <contentBox></contentBox>
      <footerBar></footerBar>
    </v-app>

  </div>
</template>

<style lang="scss">
</style>

<script>
import navBar from '@/components/layout/navBar'
import sideBar from '@/components/layout/sideBar'
import contentBox from '@/components/layout/contentBox'
import footerBar from '@/components/layout/footerBar'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    singlePage () {
      return this.$route.path === '/login'
    }
  },
  components: {
    navBar,
    sideBar,
    contentBox,
    footerBar
  }
}
</script>
