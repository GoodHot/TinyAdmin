<template>
  <div>
    <div class="t-toolbar" v-if="currentTab !== 'publish'">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <nav class="breadcrumb is-medium">
              <ul>
                <li v-for="(item, i) in breadcrumbs" :key="i" :class="item.active ? 'is-active' : ''">
                  <router-link :to="item.router" v-if="item.router">{{ item.name }}</router-link>
                  <a v-else>{{ item.name }}</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="level-right">
            <b-button v-if="currentTab === 'article'" type="is-primary" tag="router-link" to="/content/publish"><t-icon icon="plus" /> 发布文章</b-button>
            <div class="buttons has-addons" v-if="currentTab === 'category'" >
              <b-button type="is-primary" tag="router-link" to="/content/category/add" icon-left="plus">创建分类</b-button>
              <b-button type="is-primary" tag="router-link" to="/content/category/sort" icon-left="sort">分类排序</b-button>
            </div>
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
      breadcrumbs: [],
      showCategoryModal: false
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
      this.breadcrumbs = this.$refs.routerView.breadcrumbs
    }
  }
}
</script>