<template>
  <div class="t-main">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="box t-box">
            <b-menu>
              <b-menu-list label="Information">
                <b-menu-item icon="human-greeting" label="个人信息"></b-menu-item>
                <b-menu-item icon="lock" label="安全设置"></b-menu-item>
                <b-menu-item icon="ninja" label="头像设置"></b-menu-item>
              </b-menu-list>
              <b-menu-list label="Creation">
                <b-menu-item icon="pen" label="我的文章"></b-menu-item>
              </b-menu-list>
            </b-menu>
          </div>
        </div>
        <div class="column is-three-quarters">
          <div class="box t-box">
            <section>
              <b-field>
                <template slot="label">
                  站点域名
                  <b-tag rounded>domain</b-tag>
                </template>
                <b-input></b-input>
              </b-field>
              <b-field>
                <template slot="label">
                  站点名称
                  <b-tag rounded>title</b-tag>
                </template>
                <b-input></b-input>
              </b-field>
              <b-field>
                <template slot="label">
                  描述
                  <b-tag rounded>description</b-tag>
                </template>
                <b-input maxlength="160" type="textarea"></b-input>
              </b-field>
              <b-field label>
                <b-button>保存</b-button>
              </b-field>
            </section>
          </div>
          <div class="box t-box">
            <b-message type="is-info">这里是SEO相关字段</b-message>
            <section>
              <b-field message="This email is invalid">
                <template slot="label">
                  关键字
                  <b-tag rounded>seo_keyword</b-tag>
                </template>
                <b-taginput ellipsis icon="label" placeholder="Add a tag"></b-taginput>
              </b-field>
              <b-field message="This email is invalid">
                <template slot="label">
                  描述
                  <b-tag rounded>seo_description</b-tag>
                </template>
                <b-input maxlength="200" type="textarea"></b-input>
              </b-field>
              <b-field label>
                <b-button>保存</b-button>
              </b-field>
            </section>
          </div>
          <div class="box t-box">
            <b-message type="is-info">目前还没有自定义字段，您可以快速创建</b-message>
            <b-button type="is-primary" expanded>创建自定义字段</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>