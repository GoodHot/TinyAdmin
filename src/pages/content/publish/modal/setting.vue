<template>
  <div class="box t-box">
    <b-tabs>
      <b-tab-item label="发布设置">
        <b-field grouped>
          <b-field label="可见性" expanded>
            <b-select v-model="publishSetting.visible" placeholder="选择可见性" expanded>
              <option :value="1">所有人可见</option>
              <option :value="2">仅自己可见</option>
            </b-select>
          </b-field>
          <b-field label="页面模板" expanded>
            <b-select v-model="publishSetting.template" placeholder="选择渲染模板" expanded>
              <option value="post.html">post.html</option>
              <option value="post_line.html">post_line.html</option>
            </b-select>
          </b-field>
          <b-field label="作者" expanded>
            <t-user-select v-model="publishSetting.authorId"></t-user-select>
          </b-field>
          <b-field label="分类" expanded>
            <t-category-select v-model="publishSetting.category"></t-category-select>
          </b-field>
        </b-field>
        <b-field label="标签" expanded>
          <b-taginput v-model="publishSetting.tags" icon="label" maxlength="20" maxtags="5" placeholder="按回车键确认"></b-taginput>
        </b-field>
      </b-tab-item>

      <b-tab-item label="SEO设置">
        <b-field grouped>
          <b-field label="文章地址" expanded>
            <b-input v-model="seoSetting.seo_title"></b-input>
          </b-field>
          <b-field label="SEO关键字" expanded>
            <b-taginput icon="label" placeholder="按回车键确认" maxlength="20" maxtags="20" v-model="seoSetting.seo_keyword"></b-taginput>
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field label="SEO描述" expanded>
            <b-input type="textarea" v-model="seoSetting.seo_description"></b-input>
          </b-field>
          <b-field label="内容描述" expanded>
            <b-input type="textarea"  v-model="seoSetting.description"></b-input>
          </b-field>
        </b-field>
      </b-tab-item>

      <b-tab-item label="文章封面">
        <b-field label="上传封面图">
          <b-upload drag-drop accept=".jpg,.jpeg,.png,.gif" @input="imageUploadChange">
            <section class="section" v-if="!cover">
              <div class="content has-text-centered" >
                <p>
                  <b-icon
                      icon="upload"
                      size="is-large">
                  </b-icon>
                </p>
                <p>Drop your files here or click to upload</p>
              </div>
            </section>
            <img :src="assetsURL(cover)" style="max-height: 200px;" v-else>
          </b-upload>
        </b-field>
      </b-tab-item>
    </b-tabs>
    <!-- <nav class="level">
      <div class="level-left">
      </div>
      <div class="level-right">
        <div class="level-item">
        </div>
        <div class="level-item">
          <b-button icon-left="content-save" @click="saveArticle('draft')">保存为草稿</b-button>
        </div>
        <div class="level-item">
          <b-button type="is-primary" icon-left="send" @click="saveArticle('publish')">立即发布</b-button>
        </div>
      </div>
    </nav> -->
  </div>
</template>
<script>
import { uploadFile } from '@/api/upload'

export default {
  data () {
    return {
      active: true,
      publishSetting: {
        visible: 1,
        template: "post.html",
        authorId: 0,
        category: 0,
        tags: []
      },
      seoSetting: {
        seo_title: '',
        seo_description: '',
        seo_keyword: [],
        description: ''
      },
      cover: ''
    }
  },
  methods: {
    show () {
      this.active = true
    },
    imageUploadChange (file) {
      uploadFile(file).then(res => {
        this.cover = res.path
      })
    },
    getData() {
      return {
        publish: this.publishSetting,
        seo: this.seoSetting,
        cover: this.cover
      }
    },
    refresh (article) {
      this.publishSetting.visible = article.visible
      this.publishSetting.template = article.template
      this.publishSetting.authorId = article.author_id
      this.publishSetting.category = article.category_id
      this.publishSetting.tags = article.tags === '' ? [] : article.tags.split(',')

      this.seoSetting.seo_title = article.seo_title
      this.seoSetting.seo_description = article.seo_description
      this.seoSetting.seo_keyword = article.seo_keyword.split(',')
      this.seoSetting.description = article.description
      
      this.cover = article.cover
    }
  }
}
</script>