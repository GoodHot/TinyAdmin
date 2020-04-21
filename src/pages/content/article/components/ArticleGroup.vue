<template>
  <div style="position: relative;">
    <b-loading :is-full-page="false" :active="loading"></b-loading>
    <b-field>
      <b-input placeholder="Search..."
        type="search"
        icon="magnify"
        icon-clickable>
      </b-input>
    </b-field>
    <div class="level mb-2">
      <div class="level-left">
        <b-dropdown aria-role="list">
          <b-button type="is-text" size="is-small" slot="trigger">
            排序: 发布时间
          </b-button>
          <b-dropdown-item>发布时间</b-dropdown-item>
          <b-dropdown-item>修改时间</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="level-right">
        <b-dropdown aria-role="list">
          <b-button type="is-text" size="is-small" slot="trigger">
            过滤: 草稿
          </b-button>
          <b-dropdown-item>全部</b-dropdown-item>
          <b-dropdown-item>草稿</b-dropdown-item>
          <b-dropdown-item>未归类</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <b-message v-if="articles.length === 0">
      没有找到任何文章，<b-button size="is-small" type="is-primary" @click="$router.push('/content/publish')">马上发布</b-button> 一篇文章
    </b-message>
    <div class="t-article-group">
      <!-- <simplebar class="scrollbar"> -->
        <t-list-group>
          <t-list-group-item class="t-article-group-item" v-for="article of articles" :key="article.id">
            <h2><b-tag type="is-primary" v-if="article.status === 2">草稿</b-tag> {{ article.title }}</h2>
            <p class="font-size-sm text-muted text-word">{{ article.description }}</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">{{ article.author_name }}</strong>,
              <time :datetime="article.created_at">{{ article.created_at }}</time>
            </small>
          </t-list-group-item>
        </t-list-group>
      <!-- </simplebar> -->
    </div>
    <div class="box t-box mt-2" v-if="articles.length !== 0">
      <b-pagination
        :total="2000"
        :current="10"
        :range-before="1"
        :range-after="1"
        :simple="true"
        size="is-small"
        order="is-centered">
      </b-pagination>
    </div>
  </div>
</template>
<script>
// import simplebar from 'simplebar-vue'
// import 'simplebar/dist/simplebar.min.css'
import { articlePage } from '@/api/article'

export default {
  data() {
    return {
      loading: false,
      articles: []
    }
  },
  components: {
    // simplebar
  },
  mounted () {
    this.loadArticlePage('previewFirst')
  },
  methods: {
    loadArticlePage () {
      this.loading = true
      articlePage({
        page: 1
      }).then(res => {
        console.log(res)
        this.articles = res.page.list
        this.loading = false
      })
      // const param = {}
      // if (this.advancedSearch) {
      //   param.page = this.search.page
      //   param.keyword = this.search.keyword
      //   param.user = this.search.user
      //   param.category = this.search.category
      // } else {
      //   param.page = this.search.page
      //   param.keyword = this.search.keyword
      // }
      // articlePage(param).then(res => {
      //   const tmp = res.page.list
      //   tmp.map(art => {
      //     art.created_at_fmt = this.fmtDateAgo(art.created_at)
      //   })
      //   this.articles = tmp
      //   this.loading = false
      //   if (perview && this.articles && this.articles.length > 0) {
      //     this.onperview(this.articles[0].id)
      //   }
      // })
    }
  }
}
</script>