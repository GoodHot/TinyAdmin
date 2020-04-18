<template>
  <div>
    <div class="t-toolbar">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <p class="level-item"><span class="subtitle">{{subtitle}}</span></p>
          </div>
          <div class="level-right">
            <b-button v-if="currentTab === 'skin'" type="is-primary" class="mr-1"><t-icon icon="plus" /> 上传皮肤</b-button>
            <div class="buttons has-addons" v-if="currentTab === 'system'" >
              <b-button type="is-primary" icon-left="plus">创建自定义字段</b-button>
              <b-button type="is-primary" icon-left="refresh">清空缓存</b-button>
            </div>
          </div>
        </nav>
        <div class="tabs">
          <ul>
            <li :class="currentTab === 'system' ? 'is-active':''"><router-link to="/config/system">系统设置</router-link></li>
            <li :class="currentTab === 'skin' ? 'is-active':''"><router-link to="/config/skin">皮肤设置</router-link></li>
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