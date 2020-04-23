<template>
  <div class="card">
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
      <a href="javascript:alert('comming soon')" class="card-footer-item">预览</a>
      <a :href="data.website" target="_blank" class="card-footer-item">官网</a>
      <a href="#" class="card-footer-item" v-if="!active">删除</a>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    active: Boolean,
    data: Object
  },
  data () {
    return {
    }
  }
}
</script>