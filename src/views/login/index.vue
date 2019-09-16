<template>
  <div>
    login

    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="username"
        :counter="10"
        :rules="nameRules"
        label="帐户名"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="emailRules"
        label="密码"
        required
      ></v-text-field>
      <v-btn
        @click="login"
        color="primary"
      >
        登录
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      lazy: false,
      nameRules: [],
      emailRules: [],
      username: '', // 用户名
      password: '' // 密码
    }
  },
  methods: {
    // 登录
    login () {
      const date = new Date().getTime()
      localStorage.token = date
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
