<template>
  <div class="columns">
    <div class="column">
      <b-field>
        <b-input placeholder="Search..."
          type="search"
          icon-pack="fas"
          icon="search"
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
  }  
}
</script>