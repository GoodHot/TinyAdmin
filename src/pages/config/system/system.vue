<template>
  <div class="columns">
    <div class="column">
      <div class="box t-box">
        <b-menu>
          <b-menu-list label="System">
            <b-menu-item icon="information-outline" label="基础设置" :active="activeTab === 'base'" @click="tabChange('base')"></b-menu-item>
            <b-menu-item icon="bug" label="SEO设置" :active="activeTab === 'seo'" @click="tabChange('seo')"></b-menu-item>
            <b-menu-item icon="feather" label="自定义字段" :active="activeTab === 'custom'" @click="tabChange('custom')"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </div>
    <div class="column is-three-quarters">
      <div class="box t-box" v-show="activeTab === 'base'">
        <config-form group="system" prefix="cfg"></config-form>
      </div>
      
      <div class="box t-box" v-show="activeTab === 'seo'">
        <b-message type="is-info">
          这里是SEO相关字段
        </b-message>
        <config-form group="seo" prefix="seo"></config-form>
      </div>

      <div class="box t-box" v-show="activeTab === 'custom'">
        <b-message type="is-info">
          目前还没有自定义字段，您可以快速创建<br>
          <b>功能暂未开放</b>
        </b-message>
        <b-button type="is-primary" expanded>创建自定义字段</b-button>
        <config-form group="custom" prefix="custom"></config-form>
      </div>
    </div>
  </div>
</template>
<script>
import ConfigForm from './components/ConfigForm'
export default {
  components: {
    ConfigForm
  },
  data () {
    return {
      currentTab: 'system',
      subtitle: '系统设置',
      activeTab: 'base'
    }
  },
  methods: {
    tabChange (name) {
      this.activeTab = name
    }
  }
}
</script>