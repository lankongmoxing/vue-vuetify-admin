import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 创建路由
 * 每次跳转路由都定位到页面顶部
 */
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routers: {}
})

const router = createRouter()

export default router
