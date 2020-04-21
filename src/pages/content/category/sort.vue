<template>
  <div class="box t-box">
    <b-message type="is-primary">
      点击分类拖拽排序
    </b-message>
    <t-nestable :data="data" :loading="loading" @change="changeHandler">
      <template v-slot:default="props">
        <img :src="assetsURL(props.item.category.icon)" width="20" height="20" class="mr-2" /> {{ props.item.name }}
        <span class="float-right"><t-icon icon="hand-rock" pack="far" /></span>
      </template>
    </t-nestable>
  </div>
</template>

<script>
import { categoryTree, categorySort } from '@/api/category'

export default {
  data () {
    return {
      data: [],
      loading: false,
      currentTab: 'category',
      breadcrumbs: [
        {
          name: '分类管理',
          router: '/content/category'
        },
        {
          name: '分类排序',
          active: true
        }
      ]
    }
  },
  mounted () {
    this.loadTree()
  },
  methods: {
    loadTree () {
      this.loading = true
      categoryTree().then(res => {
        this.data = res.tree
        this.loading = false
      })
    },
    changeHandler (val, opt) {
      const pathTo = opt.pathTo
      if (!pathTo) {
        return
      }
      let tmpArr = null
      for (let i = 0; i < pathTo.length - 1; i++ ) {
        if (i == 0) {
          tmpArr = opt.items[pathTo[i]]
        } else {
          tmpArr = tmpArr.children
        }
      }
      let pid = 0
      if (!tmpArr) {
        tmpArr = opt.items
      } else {
        pid = tmpArr.id
        tmpArr = tmpArr.children
      }
      const sort = []
      tmpArr.map((item, index) => {
        sort.push({
          id: item.id,
          index
        })
      })
      const param = {
        parent_id: pid,
        sort
      }
      this.loading = true
      categorySort(param).then(() => {
        this.loading = false
      })
    }
  }
}
</script>