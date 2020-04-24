<template>
  <div class="box t-box">
    <b-loading :is-full-page="false" :active="loading"></b-loading>
    <t-form :form="form" ref="tagsForm"></t-form>
    <b-button @click="save" class="mt-2">保存</b-button>
  </div>
</template>
<script>
import { vType } from '@/utils/valid'
import { saveUser, getUser } from '@/api/user'

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
          name: '创建用户',
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
          name: 'nickname',
          value: '',
          type: 'input',
          label: '用户昵称',
          tag: 'nickname',
          must: true,
          placeholder: '用户的昵称',
          description: '用户在站内显示的昵称',
          valid: [vType.require('请输入用户昵称'), vType.length(1, 255, '用户昵称长度为1~255个字符')]
        },
        {
          name: 'username',
          value: '',
          type: 'input',
          label: '用户名',
          tag: 'username',
          must: true,
          placeholder: '登录用户名',
          description: '用户登录时使用的昵称',
          valid: [vType.require('请输入用户名'), vType.regex('^[a-zA-Z0-9\\-]+$', '路径只能为字母和数字或横杠(-)'), vType.length(1, 255, '用户名长度为1~255个字符')]
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
        },
        {
          name: 'visible',
          value: '',
          type: 'radio',
          options: [
            {
              value: true,
              text: '显示'
            },
            {
              value: false,
              text: '隐藏'
            }
          ],
          label: '作者页显示',
          tag: 'visible',
          description: '是否在作者页面显示'
        },
        {
          name: 'avatar',
          value: '',
          type: 'imageUpload',
          label: '图标',
          tag: 'avatar',
          placeholder: '上传分类图标'
        }
      ],
      isEdit: false
    }
  },
  mounted () {
    this.loadUser()
  },
  methods: {
    loadUser () {
      const id = this.$route.params.id
      if (!id) {
        return
      }
      this.isEdit = true
      this.loading = true
      this.breadcrumbs[1].name = '编辑用户'
      getUser(id).then(res => {
        const user = res.user
        const temp = []
        delete this.form[3]
        this.form.map(item => {
          item.value = user[item.name]
          temp.push(item)
        })
        this.form = temp
        this.loading = false
      })
    },
    save () {
      if (this.$refs.tagsForm.validate()) {
        this.loading = true
        this.$refs.tagsForm.submit(data => {
          saveUser(data).then(() => {
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