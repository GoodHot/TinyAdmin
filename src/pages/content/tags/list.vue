<template>
  <div class="box t-box">
    <b-table
      :data="data"
      sort-icon="arrow-up"
      :paginated="true"
      :current-page="1"
      detailed
      detail-key="id"
      :loading="loading"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="user.first_name" label="名称" sortable>
          {{ props.row.name }}
        </b-table-column>
        <b-table-column field="user.first_name" label="路径">
          <b-tag rounded>/tags/{{ props.row.path }}</b-tag>
        </b-table-column>
        <b-table-column field="user.first_name" label="文章数" sortable>
            {{ props.row.article_count }}篇
        </b-table-column>
        <b-table-column field="user.first_name" label="操作" width="150">
          <div class="buttons has-addons">
            <b-button size="is-small" icon-left="lead-pencil" tag="router-link" :to="`/content/tags/edit/${props.row.id}`">编辑</b-button>
            <b-button size="is-small" icon-left="delete">删除</b-button>
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
      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="assetsURL(props.row.icon)">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong class="mr-2">MetaTitle: {{ props.row.meta_title }}</strong>
                <strong>MetaDescription: {{ props.row.meta_description }}</strong>
                <br>
                描述：{{ props.row.description }}
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </div>
</template>
<script>
import {getTagByPage} from '@/api/tag'

export default {
  data () {
    return {
      currentTab: 'tags',
      breadcrumbs: [
        {
          name: '标签管理',
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
    this.loadTags()
  },
  methods: {
    loadTags () {
      this.loading = true
      getTagByPage(this.pagination.current, '').then(res => {
        this.loading = false
        this.data = res.page.list
      })
    }
  }
}
</script>