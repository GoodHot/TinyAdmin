<template>
  <div class="box t-box">
    <b-table
      :data="data"
      sort-icon="arrow-up"
      :paginated="true"
      :current-page="1"
      detailed
      detail-key="id"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="user.first_name" label="名称" sortable>
          {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="user.first_name" label="路径">
          <b-tag rounded>/tags/{{ props.row.first_name }}</b-tag>
        </b-table-column>
        <b-table-column field="user.first_name" label="文章数" sortable>
            {{ props.row.id }}篇
        </b-table-column>
        <b-table-column field="user.first_name" label="操作" width="150">
          <div class="buttons has-addons">
            <b-button size="is-small" icon-left="lead-pencil">编辑</b-button>
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
                <img src="/static/img/placeholder-128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ props.row.first_name }} {{ props.row.last_name }}</strong>
                <small>@{{ props.row.first_name }}</small>
                <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </div>
</template>
<script>
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
      data: [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
      ]
    }
  }
}
</script>