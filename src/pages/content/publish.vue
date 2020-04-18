<template>
  <div class="box t-box">
    <textarea placeholder="输入Markdown" style="width: 100%; max-width: 100%; height: 200px; outline: none"></textarea>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      currentTab: 'publish',
      subtitle: '发布文章',
    }
  },
  mounted () {
  }
}
</script>