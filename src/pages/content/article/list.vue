<template>
  <div class="columns">
    <div class="column">
      <article-group ref="articleGroup" @preview="previewArticle"></article-group>
    </div>
    <div class="column is-three-quarters">
      <div class="card t-card">
        <article-view ref="articleView" @delete="onDelete"></article-view>
      </div>
    </div>
  </div>
</template>
<script>
import ArticleGroup from './components/ArticleGroup'
import ArticleView from './components/ArticleView'

export default {
  components: {
    ArticleGroup,
    ArticleView
  },
  data () {
    return {
      currentTab: 'article',
      breadcrumbs: [
        {
          name: '文章管理',
          active: true
        }
      ]
    }
  },
  methods: {
    previewArticle (article) {
      this.$refs.articleView.loadArticle(article.id)
    },
    onDelete () {
      this.$refs.articleGroup.loadArticlePage()
    }
  }
}
</script>