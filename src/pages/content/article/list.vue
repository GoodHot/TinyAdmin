<template>
  <div class="columns">
    <div class="column">
      <article-group></article-group>
    </div>
    <div class="column is-three-quarters">
      <div class="card t-card">
        <article-view></article-view>
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
      subtitle: '文章管理'
    }
  }
}
</script>