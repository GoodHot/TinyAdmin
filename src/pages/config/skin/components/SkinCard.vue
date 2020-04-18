<template>
  <div class="card">
    <div class="card-content">
      <div class="media mb-1">
        <div class="media-content">
          <p class="title is-4"><b-tag type="is-success" v-if="active">当前使用</b-tag>  John Smith <span class="font-size-sm">1.0.1</span></p>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. 
        <a href="#">#访问官网#</a>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item" v-if="!active">使用</a>
      <a href="#" class="card-footer-item">预览</a>
      <a href="#" class="card-footer-item">删除</a>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    active: Boolean
  },
  data () {
    return {
      carousels: [
          { text: 'Slide 1', color: 'primary' },
          { text: 'Slide 2', color: 'info' },
          { text: 'Slide 3', color: 'success' },
          { text: 'Slide 4', color: 'warning' },
          { text: 'Slide 5', color: 'danger' }
      ]
    }
  }
}
</script>