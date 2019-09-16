import router from './router/index'

/**
 * 路由前置守卫
 * 拦截路由跳转，判断权限
 */
router.beforeEach((to, from, next) => {
  next()
})

/**
 * 完整的导航解析流程
 * 1. 导航被触发。
 * 2. 在失活的组件里调用离开守卫。
 * 3. 调用全局的 beforeEach 守卫。
 * 4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
 * 5. 在路由配置里调用 beforeEnter。
 * 6. 解析异步路由组件。
 * 7. 在被激活的组件里调用 beforeRouteEnter。
 * 8. 调用全局的 beforeResolve 守卫 (2.5+)。
 * 9. 导航被确认。
 * 10. 调用全局的 afterEach 钩子。
 * 11. 触发 DOM 更新。
 * 12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
 */
