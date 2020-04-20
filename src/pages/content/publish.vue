<template>
  <div class="box t-box">
    <input type="text" placeholder="请输入文章标题" style="width: 100%;outline: none;height: 4rem; text-align: center; font-size: 2.75rem; padding: 2rem 0 3rem 0; border: 0; border-bottom: 2px dashed #ddd;" />
    <t-markdown ref="markdown" v-model="markdown"></t-markdown>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      currentTab: 'article',
      subtitle: '发布文章',
      markdown: '# 你好，世界'
    }
  },
  mounted () {
  }
}
</script>