<template>
  <div class="box t-box">
    <b-loading :is-full-page="false" :active="loading"></b-loading>
    <t-form :form="form" ref="categoryForm"></t-form>
    <b-button @click="save" class="mt-2">保存</b-button>
  </div>
</template>
<script>
import { vType } from '@/utils/valid'
import { getCategoryByName, getCategoryByPath, saveCategory } from '@/api/category'

export default {
  data () {
    return {
      currentTab: 'category',
      subtitle: '创建一个新分类',
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
          label: '分类名称',
          tag: 'name',
          must: true,
          placeholder: '这个分类叫什么名字？',
          valid: [vType.require('请输入分类名称'), vType.length(1, 255, '分类名称长度为1~255个字符'), vType.custom(this.checkName, '分类名称已存在')]
        },
        {
          name: 'path',
          value: '',
          type: 'input',
          label: '路径',
          tag: 'path',
          must: true,
          placeholder: '好的路径有利于SEO哦',
          valid: [vType.require('请输入分类路径'), vType.regex('^[a-zA-Z0-9\\-]+$', '路径只能为字母和数字或横杠(-)'), vType.length(1, 255, '路径长度为1~255个字符'), vType.custom(this.checkPath, '分类路径已经存在')]
        },
        {
          name: 'seo_title',
          value: '',
          type: 'input',
          label: 'SEO标题',
          tag: 'seo_title',
          placeholder: '用于SEO的标题，可以配合分类名称一起使用',
          valid: [vType.length(1, 255, 'SEO标题长度为1~255个字符')]
        },
        {
          name: 'keyword',
          value: '',
          type: 'input',
          label: '关键字',
          tag: 'keyword',
          placeholder: '好的关键字可以提升SEO效果',
          valid: [vType.length(1, 255, '关键字长度为1~255个字符')]
        },
        {
          name: 'description',
          value: '',
          type: 'textarea',
          label: '描述',
          tag: 'description',
          placeholder: '输入分类的描述',
          valid: [vType.length(1, 255, '描述长度为1~255个字符')]
        },
        {
          name: 'remark',
          value: '',
          type: 'textarea',
          label: '备注',
          tag: 'remark',
          placeholder: '',
          valid: [vType.length(1, 255, '备注长度为1~255个字符')]
        },
        {
          name: 'icon',
          value: '',
          type: 'imageUpload',
          label: '图标',
          tag: 'icon',
          placeholder: '上传分类图标',
          // valid: [vType.require('请上传分类图标')]
        }
      ]
    }
  },
  methods: {
    save () {
      if (this.$refs.categoryForm.validate()) {
        this.loading = true
        this.$refs.categoryForm.submit(data => {
          saveCategory(data).then(() => {
            this.$buefy.toast.open({
              message: '创建分类成功!',
              type: 'is-success'
            })
            setTimeout(() => {
              this.$router.push('/content/category')
            }, 1000)
          })
        })
      }
    },
    async checkName (name) {
      return await getCategoryByName(name).then((res) => {
        if (!res.categorys) {
          return false
        }
        return res.categorys.length > 0
      }).catch(() => {
        return true
      })
    },
    async checkPath (path) {
      return await getCategoryByPath(path).then((res) => {
        if (!res.categorys) {
          return false
        }
        return res.categorys.length > 0
      }).catch(() => {
        return true
      })
    }
  }
}
</script>