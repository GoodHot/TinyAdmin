<template>
  <div class="box t-box">
    <b-button size="is-small" icon-left="delete" v-if="checkedRows.length > 0" @click="deleteCategory()">删除选中的{{ checkedRows.length }}个分类</b-button>
    <b-table
      :data="data"
      :checked-rows.sync="checkedRows"
      checkbox-position="left"
      checkable
      sort-icon="arrow-up"
      :paginated="true"
      :backend-pagination="true"
      :current-page="pagination.current"
      :total="pagination.total"
      :per-page="pagination.pageSize"
      :loading="loading"
      @page-change="pageChange"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="user.first_name" label="图标">
          <figure class="image is-24x24">
            <img :src="assetsURL(props.row.icon)">
          </figure>
        </b-table-column>
        <b-table-column field="user.first_name" label="名称">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column field="user.first_name" label="路径">
          <b-tag rounded>/category/{{ props.row.path }}</b-tag>
        </b-table-column>
        <b-table-column field="user.first_name" label="文章数" sortable>
            {{ props.row.article_count }}
        </b-table-column>
        <b-table-column field="user.first_name" label="备注">
            {{ props.row.remark }}
        </b-table-column>
        <b-table-column field="user.first_name" label="操作" width="150">
          <div class="buttons has-addons">
            <b-button size="is-small" icon-left="lead-pencil" tag="router-link" :to="`/content/category/edit/${props.row.id}`">编辑</b-button>
            <b-button size="is-small" icon-left="delete" @click="deleteCategory(props.row.id)">删除</b-button>
          </div>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>
<script>
import { getCategoryByPage, deleteCategory } from '@/api/category'

export default {
  data () {
    return {
      currentTab: 'category',
      breadcrumbs: [
        {
          name: '分类管理',
          active: true
        }
      ],
      loading: false,
      data: [],
      checkedRows: [],
      pagination: {
        total: 1,
        current: 1,
        pageSize: 1
      }
    }
  },
  mounted () {
    this.loadCategory()
  },
  methods: {
    loadCategory () {
      this.loading = true
      getCategoryByPage(this.pagination.current, '').then(res => {
        this.data = res.page.list
        this.pagination.total = res.page.total_count
        this.pagination.pageSize = res.page.page_size
        this.loading = false
      })
    },
    pageChange (num) {
      this.pagination.current = num
      this.loadCategory()
    },
    deleteCategory (id) {
      this.$buefy.dialog.confirm({
          title: '删除分类',
          message: '分类删除后<b>不可恢复</b>, 所关联该分类的文章也会<b>取消关联</b>，确定要删除这些分类吗? ',
          confirmText: '确定删除',
          cancelText: '再想想',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => {
            this.loading = true
            const ids = []
            if (id) {
              ids.push(id)
            } else {
              this.checkedRows.map(item => ids.push(item.id))
            }
            deleteCategory({
              category_ids: ids
            }).then(() => {
              this.$buefy.toast.open({
                message: '删除成功',
                type: 'is-success'
              })
              this.loadCategory()
            }).catch(() => this.loading = false)
          }
      })
    }
  }
}
</script>