<template>
    <b-taginput
      :data="categorys"
      autocomplete
      icon="file-tree"
      maxtags="1"
      :open-on-focus="true"
      :allow-new="false"
      :ellipsis="false"
      ref="taginput"
      placeholder="选择分类"
      class="uselect"
      @add="onAdd"
      v-model="current"
      >
      <template slot-scope="props">
        <div :style="calcPaddingLeft(props.option.level)">
          <img :src="assetsURL(props.option.icon)" style="height: 24px; width: 24px" class="mr-1"/>  {{props.option.name}}
        </div>
      </template>
      <template slot="empty">
        没有分类
      </template>
      <template slot="selected" slot-scope="props">
        <div
          v-for="(tag, index) in props.tags"
          :key="index"
        >
          <b-taglist attached>
            <b-tag class="avatar"><img :src="assetsURL(tag.icon)" /></b-tag>
            <b-tag class="name" type="is-light" closable @close="$refs.taginput.removeTag(index, $event)">{{ tag.name }}</b-tag>
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
import { categoryTree } from '@/api/category'
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
      categorys: [],
      current: []
    }
  },
  mounted () {
    this.loadCategoryTree()
  },
  methods: {
    calcPaddingLeft (level) {
      if (level === 0) {
        return 'display: flex'
      }
      return `display: flex; padding-left: ${1 + level}rem`
    },
    loadCategoryTree () {
      if (this.categorys && this.categorys.length > 0) {
        return
      }
      this.loading = true
      categoryTree().then(res => {
        this.categorys = this.setData(res.tree, 0)
        this.setCurrent()
      })
    },
    setData (tree, level) {
      const data = []
      for (let i in tree) {
        const tmp = tree[i]
        data.push({
          id: tmp.id,
          name: tmp.name,
          icon: tmp.category.icon,
          level: level
        })
        if (tmp.children && tmp.children.length > 0) {
          data.push(...this.setData(tmp.children, level + 1))
        }
      }
      return data
    },
    onAdd (val) {
      this.$emit('value.change', val.id)
    },
    setCurrent () {
      for (let i in this.categorys) {
        const cate = this.categorys[i]
        if (cate.id === this.value) {
          const temp = [cate]
          this.current = temp
        }
      }
    }
  }
}
</script>