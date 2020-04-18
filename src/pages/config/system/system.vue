<template>
  <div class="columns">
    <div class="column">
      <div class="box t-box">
        <b-menu>
          <b-menu-list label="Information">
            <b-menu-item icon="information-outline" label="基础设置"></b-menu-item>
            <b-menu-item icon="bug" label="SEO设置"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Runtime">
            <b-menu-item icon="database" label="数据库信息"></b-menu-item>
            <b-menu-item icon="cached" label="缓存设置"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </div>
    <div class="column is-three-quarters">
      <div class="box t-box">
        dd
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      currentTab: 'system',
      subtitle: '系统设置'
    }
  }
}
</script>