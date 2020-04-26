<template>
  <b-upload drag-drop accept=".jpg,.jpeg,.png,.gif" @input="imageUploadChange">
    <section class="section" v-if="!image">
      <div class="content has-text-centered" >
        <p>
          <b-icon
              icon="upload"
              size="is-large">
          </b-icon>
        </p>
        <p>点击上传或拖拽图片到此处上传</p>
      </div>
    </section>
    <img :src="assetsURL(image)" v-else>
  </b-upload>
</template>
<script>
import {PropTypes} from '@/utils/types'
import { uploadFile } from '@/api/upload'

export default {
  model: {
    prop: 'image',
    event: 'image.change'
  },
  props: {
    image: PropTypes.String
  },
  methods: {
    imageUploadChange (file) {
      uploadFile(file).then(res => {
        this.$emit('image.change', res.path)
      })
    }
  }
}
</script>