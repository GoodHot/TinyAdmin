<template>
  <div class="box t-box">
    <b-table
      :data="data"
      :paginated="false"
      detail-key="id"
      :loading="loading"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="user.first_name" label="头像">
          <img :src="assetsURL(props.row.avatar)" width="24px" height="24px">
        </b-table-column>
        <b-table-column field="user.first_name" label="用户名">
          {{ props.row.username }}
        </b-table-column>
        <b-table-column field="user.first_name" label="昵称">
          {{ props.row.nickname }}
        </b-table-column>
        <b-table-column field="user.first_name" label="操作" width="240">
          <div class="buttons has-addons">
            <b-button size="is-small" icon-left="lead-pencil" tag="router-link" :to="`/user/edit/${props.row.id}`">编辑</b-button>
            <b-button size="is-small" icon-left="lock" tag="router-link" :to="`/user/password/${props.row.id}`">重置密码</b-button>
            <b-button size="is-small" icon-left="delete" @click="deleteTag(props.row.id)">删除</b-button>
          </div>
        </b-table-column>
      </template>
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon
                  icon="emoticon-sad"
                  size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>
<script>
import { getAllAdmin } from '@/api/user'

export default {
  data () {
    return {
      currentTab: 'user',
      breadcrumbs: [
        {
          name: '用户管理',
          active: true
        }
      ],
      loading: false,
      data: [],
      pagination: {
        total: 1,
        current: 1,
        pageSize: 1
      }
    }
  },
  mounted () {
    this.loadAllUser()
  },
  methods: {
    loadAllUser () {
      this.loading = true
      getAllAdmin(this.pagination.current, '').then(res => {
        this.loading = false
        this.data = res.users
      })
    },
    // deleteTag (id) {
    //   this.$buefy.dialog.confirm({
    //       title: '删除标签',
    //       message: '标签删除后<b>不可恢复</b>, 所关联该标签的文章也会<b>取消关联</b>，确定要删除标签吗? ',
    //       confirmText: '确定删除',
    //       cancelText: '再想想',
    //       type: 'is-danger',
    //       hasIcon: true,
    //       onConfirm: () => {
    //         this.loading = true
    //         deleteTags({
    //           tag_ids: [id]
    //         }).then(() => {
    //           this.$buefy.toast.open({
    //             message: '删除成功',
    //             type: 'is-success'
    //           })
    //           this.loadTags()
    //         }).catch(() => this.loading = false)
    //       }
    //   })
    // }
  }
}
</script>