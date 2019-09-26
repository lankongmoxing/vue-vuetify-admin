<template>
  <div class="app">

    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height">需要一句非主流的话</v-card-title>
      </v-img>

      <v-card-text>
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
            :rules="passwordRules"
            label="密码"
            required
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="login"
          color="primary"
          class="loginBtn"
        >
          登录
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      lazy: false,
      nameRules: [
        v => !!v || '请输入用户名'
      ],
      passwordRules: [
        v => !!v || '请输入密码'
      ],
      username: 'admin', // 用户名
      password: '123456' // 密码
    }
  },
  methods: {
    // 登录
    async login () {
      if (this.$refs.form.validate()) {
        const form = {
          username: this.username,
          password: this.password
        }
        await this.$store.dispatch('user/login', form)
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginBtn{
    width: 80%;
    margin: 0 auto 20px;
  }
}
</style>
