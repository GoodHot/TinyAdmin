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
                <li v-if="!breadcrumbs || breadcrumbs.length == 0">
                  用户管理
                </li>
              </ul>
            </nav>
          </div>
          <div class="level-right">
            <b-button type="is-primary" tag="router-link" to="/content/publish" icon-left="account"> 创建新用户</b-button>
          </div>
        </nav>
        <div class="tabs">
          <ul>
            <li :class="currentTab === 'article' ? 'is-active':''"><router-link to="/content/article">用户列表</router-link></li>
            <li :class="currentTab === 'role' ? 'is-active':''"><router-link to="/content/article">角色管理</router-link></li>
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
  }
}
</script>