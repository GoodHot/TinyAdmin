<template>
  <b-taglist attached class="is-inline">
    <b-tag type="is-info">{{ copyText }}</b-tag>
    <b-tag type="is-dark" class="cursor-pointer" :data-clipboard-text="copyText" ref="clickCopy">copy</b-tag>
  </b-taglist>
</template>
<script>
import Clipboard from 'clipboard'; 
import { PropTypes } from '@/utils/types'

export default {
  props: {
    copyText: PropTypes.String
  },
  mounted () {
    const clipboard = new Clipboard(this.$refs.clickCopy.$el);
    clipboard.on('success', () => {
      this.$buefy.toast.open({
        message: '复制成功',
        type: 'is-success'
      })
    })
    clipboard.on('error', () => {
      this.$buefy.toast.open({
        message: '您的浏览器不支持此功能，请手动复制',
        type: 'is-danger'
      })
    })
  }
}
</script>