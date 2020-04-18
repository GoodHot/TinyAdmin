<template>
  <div>
    <div class="t-article-group">
      <!-- <simplebar class="scrollbar"> -->
        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
        <t-list-group>
          <t-list-group-item class="t-article-group-item">
            <h2><b-tag type="is-primary">草稿</b-tag> New Photo Pack New Photo Pack New Photo Pack</h2>
            <p class="font-size-sm text-muted text-word">Our new photo pack is now available to go live and we couldn’t be more excited..</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">愤怒</strong>,
              <time datetime="article.created_at">2020-02-02 12:32:44</time>
            </small>
          </t-list-group-item>
          <t-list-group-item class="t-article-group-item">
            <h2><b-tag type="is-primary">草稿</b-tag> New Photo Pack New Photo Pack New Photo Pack</h2>
            <p class="font-size-sm text-muted text-word">Our new photo pack is now available to go live and we couldn’t be more excited..</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">愤怒</strong>,
              <time datetime="article.created_at">2020-02-02 12:32:44</time>
            </small>
          </t-list-group-item>
          <t-list-group-item class="t-article-group-item">
            <h2><b-tag type="is-primary">草稿</b-tag> New Photo Pack New Photo Pack New Photo Pack</h2>
            <p class="font-size-sm text-muted text-word">Our new photo pack is now available to go live and we couldn’t be more excited..</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">愤怒</strong>,
              <time datetime="article.created_at">2020-02-02 12:32:44</time>
            </small>
          </t-list-group-item>
          <t-list-group-item class="t-article-group-item">
            <h2><b-tag type="is-primary">草稿</b-tag> New Photo Pack New Photo Pack New Photo Pack</h2>
            <p class="font-size-sm text-muted text-word">Our new photo pack is now available to go live and we couldn’t be more excited..</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">愤怒</strong>,
              <time datetime="article.created_at">2020-02-02 12:32:44</time>
            </small>
          </t-list-group-item>
          <t-list-group-item class="t-article-group-item">
            <h2><b-tag type="is-primary">草稿</b-tag> New Photo Pack New Photo Pack New Photo Pack</h2>
            <p class="font-size-sm text-muted text-word">Our new photo pack is now available to go live and we couldn’t be more excited..</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">愤怒</strong>,
              <time datetime="article.created_at">2020-02-02 12:32:44</time>
            </small>
          </t-list-group-item>
          <t-list-group-item class="t-article-group-item">
            <h2><b-tag type="is-primary">草稿</b-tag> New Photo Pack New Photo Pack New Photo Pack</h2>
            <p class="font-size-sm text-muted text-word">Our new photo pack is now available to go live and we couldn’t be more excited..</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">愤怒</strong>,
              <time datetime="article.created_at">2020-02-02 12:32:44</time>
            </small>
          </t-list-group-item>
          <t-list-group-item class="t-article-group-item">
            <h2><b-tag type="is-primary">草稿</b-tag> New Photo Pack New Photo Pack New Photo Pack</h2>
            <p class="font-size-sm text-muted text-word">Our new photo pack is now available to go live and we couldn’t be more excited..</p>
            <small class="font-size-sm text-muted">
              <strong class="text-muted">愤怒</strong>,
              <time datetime="article.created_at">2020-02-02 12:32:44</time>
            </small>
          </t-list-group-item>
        </t-list-group>
      <!-- </simplebar> -->
    </div>
    <div class="box t-box mt-2">
      <b-pagination
        :total="2000"
        :current="10"
        :range-before="1"
        :range-after="1"
        :simple="true"
        size="is-small"
        order="is-centered">
      </b-pagination>
    </div>
  </div>
</template>
<script>
// import simplebar from 'simplebar-vue'
// import 'simplebar/dist/simplebar.min.css'

export default {
  data() {
    return {
      isLoading: false,
    }
  },
  components: {
    // simplebar
  }
}
</script>