<template>
  <div class="box t-box">
    <b-loading :is-full-page="false" :active="loading"></b-loading>
    <t-form :form="form" ref="tagsForm"></t-form>
    <b-button @click="save" class="mt-2">保存</b-button>
  </div>
</template>
<script>
import { vType } from '@/utils/valid'
import { updatePassword } from '@/api/user'

export default {
  data () {
    return {
      currentTab: 'user',
      breadcrumbs: [
        {
          name: '用户管理',
          router: '/user/list'
        },
        {
          name: '重置密码',
          active: true
        }
      ],
      loading: false,
      form: [
        {
          name: 'id',
          value: 0,
          type: 'hidden'
        },
        {
          name: 'password',
          value: '',
          type: 'password',
          label: '登录密码',
          tag: 'password',
          must: true,
          placeholder: '标签描述',
          description: '登录密码',
          valid: [vType.require('请输入登录密码'),vType.length(6, 32, '登录密码长度为6~32个字符')]
        }
      ],
      isEdit: false
    }
  },
  methods: {
    save () {
      const id = this.$route.params.id
      if (this.$refs.tagsForm.validate()) {
        this.loading = true
        this.$refs.tagsForm.submit(data => {
          updatePassword(id, data).then(() => {
            this.$buefy.toast.open({
              message: this.isEdit ? '修改用户成功!' : '创建用户成功!',
              type: 'is-success'
            })
            this.loading = false
            setTimeout(() => {
              this.$router.push('/user/list')
            }, 1000)
          }).catch(() => {
            this.loading = false
          })
        })
      }
    }
  }
}
</script>