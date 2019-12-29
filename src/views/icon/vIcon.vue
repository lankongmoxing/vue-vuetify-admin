<template>
  <v-container fluid>
    <div>
      <h1>使用v-icon</h1>
      <p>1. 安装依赖
        <code>@mdi/font</code>
      </p>
      <p>2. 在main.js中引用这个css
        <code>import '@mdi/font/css/materialdesignicons.css'</code>
      </p>
      <p>3. 在任意组件中使用
        <code>v-icon</code>
      </p>
    </div>
    <br>
    <v-row justify="space-around">
      <v-icon>mdi-anchor</v-icon>

      <v-icon>mdi-xbox-controller</v-icon>

      <v-icon>mdi-watch</v-icon>

      <v-icon>mdi-tilde</v-icon>

      <v-icon>mdi-tennis</v-icon>

      <v-icon>mdi-mouse</v-icon>
    </v-row>

  </v-container>
</template>
