<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list>
      <v-subheader>啦啦啦啦</v-subheader>
      <v-list-item-group
        v-model="item"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in list"
          :key="i"
          @click="goToPage(item)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      drawer: true,
      item: 0,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' }
      ]
    }
  },
  computed: {
    ...mapGetters(
      {
        'routes': 'menu/routes'
      }
    ),
    list () {
      const list = []
      this.routes.map(v => {
        if (!v.meta.hidden) {
          list.push(v)
        }
      })
      return list
    }
  },
  methods: {
    // 跳转页面
    goToPage (item) {
      // 如果跳转路由和当前路由一致，则不跳转
      if (this.$route.path === item.path) {
        return
      }
      this.$router.push({
        path: item.path
      })
    }
  }
}
</script>
