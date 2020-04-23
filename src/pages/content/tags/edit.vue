<template>
  <div class="box t-box">
    <b-loading :is-full-page="false" :active="loading"></b-loading>
    <t-form :form="form" ref="tagsForm"></t-form>
    <b-button @click="save" class="mt-2">保存</b-button>
  </div>
</template>
<script>
import { vType } from '@/utils/valid'
import { saveTag, getTag } from '@/api/tag'

export default {
  data () {
    return {
      currentTab: 'tags',
      breadcrumbs: [
        {
          name: '标签管理',
          router: '/content/tags'
        },
        {
          name: '编辑标签',
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
          name: 'name',
          value: '',
          type: 'input',
          label: '标签名称',
          tag: 'name',
          must: true,
          placeholder: '这个标签叫什么名字？',
          valid: [vType.require('请输入标签名称'), vType.length(1, 255, '标签名称长度为1~255个字符')]
        },
        {
          name: 'path',
          value: '',
          type: 'input',
          label: '路径',
          tag: 'path',
          must: true,
          placeholder: '好的路径有利于SEO哦',
          valid: [vType.require('请输入分类路径'), vType.regex('^[a-zA-Z0-9\\-]+$', '路径只能为字母和数字或横杠(-)'), vType.length(1, 255, '路径长度为1~255个字符')]
        },
        {
          name: 'description',
          value: '',
          type: 'textarea',
          label: '标签描述',
          tag: 'description',
          placeholder: '标签描述',
          valid: [vType.length(1, 255, '标签描述长度为1~255个字符')]
        },
        {
          name: 'meta_title',
          value: '',
          type: 'input',
          label: 'SEO标题',
          tag: 'meta_title',
          placeholder: 'SEO标题',
          valid: [vType.length(1, 255, 'SEO标题长度为1~255个字符')]
        },
        {
          name: 'meta_description',
          value: '',
          type: 'textarea',
          label: 'SEO描述',
          tag: 'meta_description',
          placeholder: 'SEO描述',
          valid: [vType.length(1, 255, 'SEO描述长度为1~255个字符')]
        },
        {
          name: 'icon',
          value: '',
          type: 'imageUpload',
          label: '图标',
          tag: 'icon',
          placeholder: '上传分类图标'
        }
      ]
    }
  },
  mounted () {
    this.loadTag()
  },
  methods: {
    loadTag () {
      const id = this.$route.params.id
      if (!id) {
        return
      }
      this.loading = true
      getTag(id).then(res => {
        const tag = res.tag
        const temp = []
        this.form.map(item => {
          item.value = tag[item.name]
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
          saveTag(data).then(() => {
            this.$buefy.toast.open({
              message: '修改标签成功!',
              type: 'is-success'
            })
            setTimeout(() => {
              this.$router.push('/content/tags')
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