<template>
  <div>
    <div class="t-toolbar">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <p class="level-item"><span class="subtitle">{{subtitle}}</span></p>
          </div>
          <div class="level-right">
            <b-button v-if="currentTab === 'article'" type="is-primary"><t-icon icon="plus" /> 发布文章</b-button>
            <b-button v-if="currentTab === 'category'" type="is-primary"><t-icon icon="plus" /> 创建分类</b-button>
            <b-button v-if="currentTab === 'tags'" type="is-primary"><t-icon icon="plus" /> 创建标签</b-button>
          </div>
        </nav>
        <div class="tabs">
          <ul>
            <li :class="currentTab === 'article' ? 'is-active':''"><router-link to="/content/article">文章管理</router-link></li>
            <li :class="currentTab === 'category' ? 'is-active':''"><router-link to="/content/category">分类管理</router-link></li>
            <li :class="currentTab === 'tags' ? 'is-active':''"><router-link to="/content/tags">标签管理</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="t-main">
      <div class="container">
        <router-view ref="routerView" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentTab: 'article',
      subtitle: ''
    }
  },
  mounted () {
    this.updateCurrentTab()
  },
  updated () {
    this.updateCurrentTab()
  },
  methods: {
    updateCurrentTab () {
      this.currentTab = this.$refs.routerView.currentTab
      this.subtitle =  this.$refs.routerView.subtitle
    }
  }
}
</script>