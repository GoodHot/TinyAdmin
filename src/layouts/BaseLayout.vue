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
            <b-navbar-item href="#">内容管理</b-navbar-item>
          </template>

          <template slot="end">
            <b-navbar-item href="#">
              <t-icon icon="plus" class="mr-1" />发布文章
            </b-navbar-item>
            <b-navbar-dropdown label="Admin">
              <b-navbar-item href="#">
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
    <div class="t-toolbar">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <p class="level-item"><span class="subtitle">内容管理</span></p>
          </div>
          <div class="level-right">
            <b-dropdown>
              <button class="button is-primary" slot="trigger" slot-scope="{ active }">
                <span class="mr-1">Click me!</span>
                <t-icon :icon="active ? 'arrow-up' : 'arrow-down'" />
              </button>
              <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
            </b-dropdown>
          </div>
        </nav>
        <div class="tabs">
          <ul>
            <li class="is-active"><a>文章管理</a></li>
            <li><a>分类管理</a></li>
            <li><a>标签管理</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="t-main">
      <div class="container">
        <router-view />
      </div>
    </div>
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