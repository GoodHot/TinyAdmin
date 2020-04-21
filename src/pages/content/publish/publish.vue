<template>
  <div>
    <div class="box t-box">
      <input type="text" v-model="articleTitle" placeholder="请输入文章标题" class="t-article-editor-title" />
      <t-markdown ref="markdown" v-model="markdown"></t-markdown>
    </div>
    <div class="box t-box">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <b-checkbox v-model="writeSetting.autoSave" @input="saveWriteSetting($event, 'autoSave')">自动保存内容为草稿（30秒一次）</b-checkbox>
          </div>
          <div class="level-item">
            <b-checkbox v-model="writeSetting.getCover" @input="saveWriteSetting($event, 'getCover')">自动获取封面图</b-checkbox>
          </div>
          <div class="level-item">
            <b-checkbox v-model="writeSetting.getNetImage" @input="saveWriteSetting($event, 'getNetImage')">自动保存网络图片</b-checkbox>
          </div>
          <div class="level-item">
            <b-checkbox v-model="writeSetting.getDescription" @input="saveWriteSetting($event, 'getDescription')">自动获取内容简介</b-checkbox>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <b-button icon-left="code-braces" @click="$refs.setting.show()">文章设置</b-button>
          </div>
          <div class="level-item">
            <b-button icon-left="content-save" @click="saveArticle('draft')">保存为草稿</b-button>
          </div>
          <div class="level-item">
            <b-button type="is-primary" icon-left="send" @click="saveArticle('publish')">立即发布</b-button>
          </div>
        </div>
      </nav>
    </div>
    <setting ref="setting"></setting>
  </div>
</template>
<script>
import setting from './modal/setting'
import Vue from 'vue'
const ls_key_write_setting = 'w_setting'
import { saveArticle } from '@/api/article'

export default {
  components: {
    setting
  },
  data () {
    return {
      currentTab: 'article',
      markdown: '# 你好，世界',
      breadcrumbs: [
        {
          name: '文章管理',
          router: '/content/article'
        },
        {
          name: '发布文章',
          active: true
        }
      ],
      writeSetting: {
        autoSave: true,
        getCover: true,
        getNetImage: true,
        getDescription: true
      },
      autoSaveTimer: null,
      id: 0,
      articleTitle: ''
    }
  },
  mounted () {
    this.loadWriteSetting()
  },
  methods: {
    saveWriteSetting (e, key) {
      this.writeSetting[key] = e
      Vue.ls.set(ls_key_write_setting, this.writeSetting)
      if (key === 'autoSave') {
        this.enableAutoSave(e)
      }
    },
    enableAutoSave (status) {
      if (status) {
        this.autoSaveTimer = setInterval(() => {
          console.log('save')
        }, 30 * 1000)
      } else {
        clearInterval(this.autoSaveTimer)
      }
    },
    loadWriteSetting () {
      const st = Vue.ls.get(ls_key_write_setting)
      this.writeSetting.autoSave = st.autoSave
      this.writeSetting.getCover = st.getCover
      this.writeSetting.getNetImage = st.getNetImage
      this.writeSetting.getDescription = st.getDescription
      this.enableAutoSave(st.autoSave)
    },
    saveArticle (type) {
      console.log(type)
      const content = this.$refs.markdown.getValue()
      const setting = this.$refs.setting.getData()
      console.log(setting)
      const tags = []
      if (setting.publish.tags && setting.publish.tags.length > 0) {
        setting.publish.tags.map(t => {
          tags.push({
            name: t
          })
        })
      }
      let seoKeyword = ''
      if (setting.seo.seo_keyword && setting.seo.seo_keyword.length > 0) {
        seoKeyword = setting.seo.seo_keyword.join(',')
      }
      const post = {
        article: {
          id: this.id,
          title: this.articleTitle,
          seo_title: setting.seo.seo_title,
          seo_description: setting.seo.seo_description,
          seo_keyword: seoKeyword,
          category_id: setting.publish.category,
          description: setting.seo.description,
          cover: setting.cover,
          status: type === 'draft' ? 2 : 1,
          author: setting.publish.authorId,
          template: setting.publish.template,
          visibility: setting.publish.visibility
        },
        content: {
          markdown: content.markdown,
          html: content.html
        },
        get_cover: this.writeSetting.getCover,
        get_net_image: this.writeSetting.getNetImage,
        get_description: this.writeSetting.getDescription,
        tags
      }
      saveArticle(post).then(() => {
        alert('发布成功')
      })
    }
  }
}
</script>