<template>
  <div class="card">
    <b-loading :is-full-page="false" :active.sync="loading" :can-cancel="true"></b-loading>
    <div class="card-content">
      <div class="media mb-1">
        <div class="media-content">
          <p class="title is-4"><b-tag type="is-success" v-if="active">当前使用</b-tag>  {{data.name}} <span class="font-size-sm">{{data.version}}</span></p>
        </div>
      </div>
      <div class="content">
        {{data.description}}<br>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item" v-if="!active">使用</a>
      <a href="javascript:void(0);" class="card-footer-item" @click="reload" >重新加载</a>
      <!-- <a :href="data.website" target="_blank" class="card-footer-item">官网</a> -->
      <a href="#" class="card-footer-item" v-if="!active">删除</a>
    </footer>
  </div>
</template>
<script>
import { switchSkin } from '@/api/skin'
export default {
  props: {
    active: Boolean,
    data: Object
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    reload() {
      this.loading = true
      switchSkin(this.data.id).then(res => {
        this.loading = false
        console.log(res)
      })
    }
  }
}
</script>