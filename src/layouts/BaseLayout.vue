<template>
  <div>
    <div class="t-navbar">
      <div class="container">
        <b-navbar type="is-primary">
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <span class="logo">
                <span class="text-white">Tiny</span>
                <span class="text-white-75">CMS</span>
              </span>
            </b-navbar-item>
          </template>
          <template slot="start">
            <b-navbar-item tag="router-link" to="/content/article">内容管理</b-navbar-item>
            <b-navbar-item tag="router-link" to="/user">用户管理</b-navbar-item>
            <b-navbar-item tag="router-link" to="/config/system">系统设置</b-navbar-item>
            <b-navbar-item href="#">插件管理</b-navbar-item>
          </template>
          <template slot="end">
            <b-navbar-item tag="router-link" to="/content/publish">
              <t-icon icon="plus" class="mr-1" />发布文章
            </b-navbar-item>
            <b-navbar-dropdown label="Admin">
              <b-navbar-item tag="router-link" to="/personal">
                  个人设置
              </b-navbar-item>
              <b-navbar-item href="#">
                  退出登录
              </b-navbar-item>
            </b-navbar-dropdown>
          </template>
        </b-navbar>
      </div>
    </div>
    <router-view />
    <footer class="container footer">
      <nav class="level">
        <div class="level-left">
          <p class="level-item is-size-7"><a href="#" class="mr-1">TinyCMS</a> 1.0 &copy; 2020</p>
        </div>
        <div class="level-right">
          <p class="level-item is-size-7">Crafted with by xww</p>
        </div>
      </nav>
    </footer>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>