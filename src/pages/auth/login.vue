<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <br />
        <div class="box" style="position: relative;">
          <b-loading :is-full-page="false" :active.sync="loading"></b-loading>
          <h3 class="title">
            Oh, hi there 👋
          </h3>
          <p class="subtitle">Come on in!</p>
          <b-field>
            <b-input placeholder="账户名" v-model="form.username" type="text" icon="account">
            </b-input>
          </b-field>
          <b-field>
            <b-input placeholder="密码" v-model="form.password" type="password" icon="lock">
            </b-input>
          </b-field>
          <b-button type="is-primary" expanded @click="onSubmit">登录</b-button>
          <hr />
          <p>
            <a class="has-text-dark" href="#">忘记密码?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ACCESS_TOKEN } from '@/utils/request'
import { userLogin } from '@/api/auth'
import Vue from 'vue'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    onSubmit () {
      this.loading = true
      userLogin(this.form).then(res => {
        this.loading = false
        Vue.ls.set(ACCESS_TOKEN, res.info.token)
        window.setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>
