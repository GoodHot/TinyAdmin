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
          <b-menu-list label="Runtime">
            <b-menu-item icon="database" label="数据库信息" :active="activeTab === 'database'" @click="tabChange('database')"></b-menu-item>
            <b-menu-item icon="cached" label="缓存设置" :active="activeTab === 'cache'" @click="tabChange('cache')"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </div>
    <div class="column is-three-quarters">
      <div class="box t-box" v-show="activeTab === 'base'">
        <section>
          <b-field>
            <template slot="label">
              站点域名
              <t-copy-tag copyText="1"></t-copy-tag>
            </template>
            <b-input></b-input>
          </b-field>
          <b-field>
            <template slot="label">
              站点名称
              <t-copy-tag copyText="2"></t-copy-tag>
            </template>
            <b-input></b-input>
          </b-field>
          <b-field>
            <template slot="label">
              描述
              <t-copy-tag copyText="3"></t-copy-tag>
            </template>
            <b-input maxlength="160" type="textarea"></b-input>
          </b-field>
          <b-field label="">
            <b-button>保存</b-button>
          </b-field>
       </section>
      </div>
      <div class="box t-box" v-show="activeTab === 'seo'">
        <b-message type="is-info">
          这里是SEO相关字段
        </b-message>
        <section>
          <b-field message="This email is invalid">
            <template slot="label">
              关键字
              <b-tag rounded><span v-pre>{{dict "seo_keyword"}}</span></b-tag>
            </template>
            <b-taginput ellipsis icon="label" placeholder="Add a tag"></b-taginput>
          </b-field>
          <b-field message="This email is invalid">
            <template slot="label">
              描述
              <b-tag rounded><span v-pre>{{dict "seo_description"}}</span></b-tag>
            </template>
            <b-input maxlength="200" type="textarea"></b-input>
          </b-field>
          <b-field label="">
            <b-button>保存</b-button>
          </b-field>
       </section>
      </div>
      <div class="box t-box" v-show="activeTab === 'custom'">
        <b-message type="is-info">
          目前还没有自定义字段，您可以快速创建
        </b-message>
        <b-button type="is-primary" expanded>创建自定义字段</b-button>
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