<template>
    <b-taginput
      :data="users"
      autocomplete
      icon="account"
      maxtags="1"
      :open-on-focus="true"
      :allow-new="false"
      :ellipsis="false"
      ref="taginput"
      placeholder="选择用户"
      class="uselect"
      v-model="current"
      @add="onAdd"
      >
      <template slot-scope="props">
        <div style="display: flex">
          <img src="http://wx2.sinaimg.cn/mw600/0085KTY1gy1ge0dq5xgl6j30u00fgjva.jpg" style="height: 24px; width: 24px" class="mr-1"/> {{props.option.username}}
        </div>
      </template>
      <template slot="empty">
        没有用户
      </template>
      <template slot="selected" slot-scope="props">
        <div
          v-for="(tag, index) in props.tags"
          :key="index"
        >
          <b-taglist attached>
            <b-tag class="avatar"><img src="http://wx2.sinaimg.cn/mw600/0085KTY1gy1ge0dq5xgl6j30u00fgjva.jpg" /></b-tag>
            <b-tag class="name" type="is-light" closable @close="$refs.taginput.removeTag(index, $event)">{{ tag.username }}</b-tag>
          </b-taglist>
        </div>
      </template>
  </b-taginput>
</template>
<style scoped>
.uselect /deep/ small {
  display: none;
}
</style>
<script>
import { getAllAdmin } from '@/api/user'
import { PropTypes } from '@/utils/types'

export default {
  model: {
    prop: 'value',
    event: 'value.change'
  },
  props: {
    value: PropTypes.Number
  },
  data (){
    return {
      users: [],
      current: []
    }
  },
  mounted () {
    this.loadAdmin()
  },
  methods: {
    loadAdmin () {
      if (this.users && this.users.length > 0) {
        return
      }
      getAllAdmin().then(res => {
        this.users = res.admins
        this.setCurrent()
      })
    },
    onAdd (val) {
      this.$emit('value.change', val.id)
    },
    setCurrent () {
      for (let i in this.users) {
        const user = this.users[i]
        if (user.id === this.value) {
          const temp = [user]
          this.current = temp
        }
      }
    }
  },
  watch: {
    value () {
      this.setCurrent()
    }
  }
}
</script>