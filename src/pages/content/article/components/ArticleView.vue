<template>
  <div class="card t-article-view">
    <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <header class="card-header">
      <div class="card-header-info">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
      </div>
      <div class="columns">
        <div class="column is-two-thirds">
          <a href="be_pages_generic_profile.html">Sara Fields</a>
          <div class="text-muted font-size-sm"><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div>
        </div>
        <div class="column options">
          <div class="has-text-right w100">
            <b-button size="is-small" type="is-primary" icon-left="edit" icon-pack="fa">编辑</b-button>
          </div>
        </div>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
}
</script>