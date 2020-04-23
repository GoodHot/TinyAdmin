<template>
<div>
  <b-loading :is-full-page="false" :active.sync="loading" :can-cancel="true"></b-loading>
  <div class="columns">
    <div class="column is-3" v-for="skin in skins" :key="skin.id"><skin-cart :active="skin.active" :data="skin"></skin-cart></div>
  </div>
</div>
</template>
<script>
import SkinCart from './components/SkinCard'
import { getAllSkin } from '@/api/skin'

export default {
  components: {
    SkinCart
  },
  data () {
    return {
      currentTab: 'skin',
      subtitle: '界面设置',
      loading: false,
      skins: []
    }
  },
  mounted () {
    this.loadSkins()
  },
  methods: {
    loadSkins () {
      this.loading = true
      getAllSkin().then(res=>{
        this.skins = res.skins
        this.loading = false
      })
    }
  }
}
</script>