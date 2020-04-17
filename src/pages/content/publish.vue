<template>
  <div class="editable">
  </div>
</template>
<script>
import MEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/beagle.css'

export default {
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new MEditor('.editable');
  }
}
</script>