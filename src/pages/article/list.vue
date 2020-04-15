<template>
  <div class="columns">
    <div class="column">
      <b-button type="is-primary" expanded>创建新文章</b-button>
      <b-field>
          <b-input placeholder="Search..."
              class="mt-2"
              type="search"
              icon="magnify"
              icon-clickable>
          </b-input>
      </b-field>
      <article-group></article-group>
    </div>
    <div class="column is-three-quarters">
      <article-view></article-view>
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
  }  
}
</script>