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
          <t-list-group-item class="t-article-group-item" v-for="article of articles" :key="article.id" :active="article.active" :data="article" @onclick="groupClick">
            <h2><b-tag type="is-primary" v-if="article.status === 2">草稿</b-tag> {{ article.title }}</h2>
            <p class="font-size-sm text-muted text-word">{{ article.description }}</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">{{ article.author_name }}</strong>,
              <time :datetime="article.created_at">{{ dateFmt(article.created_at) }}</time>
            </small>
          </t-list-group-item>
        </t-list-group>
      <!-- </simplebar> -->
    </div>
    <div class="box t-box mt-2" v-if="articles.length !== 0">
      <b-pagination
        :total="page.total"
        :current.sync="page.curr"
        :per-page="page.size"
        :simple="true"
        size="is-small"
        order="is-centered"
        @change="pageChange">
      </b-pagination>
    </div>
  </div>
</template>
<script>
// import simplebar from 'simplebar-vue'
// import 'simplebar/dist/simplebar.min.css'
import { articlePage } from '@/api/article'
import moment from 'moment'

export default {
  data() {
    return {
      loading: false,
      articles: [],
      search: {
        page: 1
      },
      activeItem: 0,
      page: {
        total: 0,
        curr: 1,
        size: 0
      }
    }
  },
  components: {
    // simplebar
  },
  mounted () {
    this.loadArticlePage()
  },
  methods: {
    loadArticlePage () {
      this.loading = true
      articlePage(this.search).then(res => {
        console.log(res)
        const temp = res.page.list
        temp.map((article, index) => {
          article.active = index === 0
          if (index === 0) {
            this.activeItem = article
          }
        })
        this.page.total = res.page.total_count
        this.page.size = res.page.page_size
        this.page.curr = res.page.page_num
        this.articles = temp
        this.loading = false
        this.onperview()
      })
    },
    onperview () {
      if (this.activeItem) {
        this.$emit('preview', this.activeItem)
      }
    },
    groupClick (item) {
      if (item.id === this.activeItem.id) {
        return
      }
      item.active = true
      this.activeItem.active = false
      this.activeItem = item
      this.onperview()
    },
    dateFmt (dt) {
      return moment(dt).format('YYYY-MM-DD H:mm:ss')
    },
    pageChange (num) {
      console.log(num)
      this.search.page = num
      this.loadArticlePage()
    }
  }
}
</script>