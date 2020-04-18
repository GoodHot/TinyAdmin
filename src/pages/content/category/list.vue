<template>
  <div class="box t-box">
    <b-table
      :data="data"
      :checked-rows.sync="checkedRows"
      checkbox-position="left"
      checkable
      sort-icon="arrow-up"
      :paginated="true"
      :current-page="1"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="user.first_name" label="图标">
            {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="user.first_name" label="名称" sortable>
          {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="user.first_name" label="路径">
          <b-tag rounded>http://localhost:9090/{{ props.row.first_name }}</b-tag>
        </b-table-column>
        <b-table-column field="user.first_name" label="文章数" sortable>
            {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="user.first_name" label="备注">
            {{ props.row.first_name }}
        </b-table-column>
        <b-table-column field="user.first_name" label="操作" width="150">
          <div class="buttons has-addons">
            <b-button size="is-small" icon-left="lead-pencil">编辑</b-button>
            <b-button size="is-small" icon-left="delete">删除</b-button>
          </div>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentTab: 'category',
      subtitle: '分类管理',
      data: [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
      ],
      checkedRows: []
    }
  }
}
</script>