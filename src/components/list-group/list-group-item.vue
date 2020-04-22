<template>
  <div :class="classes" @click="onclick">
    <slot></slot>
  </div>
</template>
<script>
import {PropTypes} from '@/utils/types'

export default {
  props: {
    active: PropTypes.Boolean,
    data: PropTypes.Object
  },
  data () {
    return {
      // current: false
    }
  },
  mounted () {
    // this.current = JSON.parse(JSON.stringify(this.active))
  },
  computed: {
    classes () {
      return [
        'comp-list-group-item',
        {
          'comp-list-group-item-active': this.active
        }
      ]
    }
  },
  methods: {
    onclick () {
      this.$emit('onclick', this.data)
    }
  }
}
</script>