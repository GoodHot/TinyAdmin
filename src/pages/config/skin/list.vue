<template>
<div>
  <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
  <div class="columns">
    <div class="column is-3"><skin-cart active></skin-cart></div>
    <div class="column is-3"><skin-cart></skin-cart></div>
    <div class="column is-3"><skin-cart></skin-cart></div>
    <div class="column is-3"><skin-cart></skin-cart></div>
  </div>
</div>
</template>
<script>
import SkinCart from './components/SkinCard'
export default {
  components: {
    SkinCart
  },
  data () {
    return {
      currentTab: 'skin',
      subtitle: '界面设置',
      isLoading: false
    }
  }
}
</script>