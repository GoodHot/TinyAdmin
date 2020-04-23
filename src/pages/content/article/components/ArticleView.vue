<template>
  <div>
    <b-loading :is-full-page="false" :active.sync="loading" :can-cancel="false"></b-loading>
    <div class="card t-article-view" v-if="article">
      <header class="card-header">
        <div class="card-header-info">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <div class="columns">
          <div class="column is-two-thirds">
            <a href="#">{{ article.title }}</a>
            <div class="text-muted font-size-sm"><time :datetime="article.created_at">{{ dateFmt(article.created_at) }}</time></div>
          </div>
          <div class="column options">
            <div class="has-text-right w100">
              <b-button size="is-small" class="mr-1" type="is-primary" icon-left="lead-pencil" @click="$router.push('/content/edit/' + article.id)">编辑</b-button>
              <b-button size="is-small" icon-left="delete" @click="deleteArticle(article.id)" >删除</b-button>
            </div>
          </div>
        </div>
      </header>
      <div class="card-content text-word">
        <div class="content"  v-html="content.html"></div>
      </div>
      <footer class="card-footer" v-if="article.tags">
        <b-icon icon="tag" class="mr-1"/>
        <b-tag class="ml-1" type="is-info" v-for="(tag, index) in tagSplit(article.tags)" :key="index">{{ tag }}</b-tag>
      </footer>
    </div>
    <b-message type="is-info" v-else>
      <div v-if="loading">
        正在加载文章……
      </div>
      <div v-else>
        没有找到任何文章，<b-button size="is-small" type="is-primary" @click="$router.push('/content/publish')">马上发布</b-button> 一篇文章
      </div>
    </b-message>
  </div>
</template>
<script>
import { getArticleById, deleteArticles } from '@/api/article'
import moment from 'moment'

export default {
  data() {
    return {
      loading: false,
      article: null,
      content: null
    }
  },
  methods: {
    loadArticle (id) {
      this.loading = true
      getArticleById(id).then(res => {
        this.article = res.article
        this.content = res.content
        this.loading = false
      })
    },
    dateFmt (dt) {
      return moment(dt).format('YYYY-MM-DD H:mm:ss')
    },
    tagSplit (tags) {
      return tags.split(',')
    },
    deleteArticle (id) {
      this.$buefy.dialog.confirm({
          title: '删除文章',
          message: '确定要删除该文章吗? ',
          confirmText: '确定删除',
          cancelText: '再想想',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => {
            this.loading = true
            deleteArticles({
              ids: [id]
            }).then(() => {
              this.$buefy.toast.open({
                message: '删除成功',
                type: 'is-success'
              })
              this.$emit('delete')
            }).catch(() => this.loading = false)
          }
      })
    }
  }
}
</script>