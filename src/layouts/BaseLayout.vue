<template>
  <div class="t-page-container">
    <nav class="sidebar">
      <simplebar class="scrollbar" data-simplebar-auto-hide="true">
        <t-sidebar></t-sidebar>
      </simplebar>
    </nav>
    <div class="main">
      <div class="container main-container">
        <h2 class="main-heading">文章列表</h2>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'

export default {
  components: {
    simplebar
  }
}
</script>