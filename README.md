# vuetify-admin
vuetify ui 2.0.15
vue cli 3
vue 2.6.10
安装/启动/打包命令见 package.json

## 已完成

### vuex store 模块
1. 采用模块形式 + 命名空间，使得各个模块更具有封装性

### 权限模块
1. router.addRoutes() 动态添加路由。即在vue实例化之后，添加异步路由
2. src 根目录下的 guard.js 全局路由前置守卫，进行跳转处理。包括刷新页面的逻辑

### 页面布局
1. app.vue 利用 vuetify 提供的组件进行自由搭建
2. 在 app.vue中使用 <v-app></v-app>包裹，将侧边栏，导航栏等组件放置 components/layout/ 中

### 路由侧边栏
根据路由表以及自定义规则生成菜单，mapGetter导出
如果跳转路由和当前路由一致，则不做跳转

## 待完成

### icon组件
计划使用 svg 定义 icon
