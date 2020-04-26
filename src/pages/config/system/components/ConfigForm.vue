<template>
  <section style="position: relative">
    <b-loading :is-full-page="false" :active="loading"></b-loading>
    <b-field v-for="cfg in config" :key="cfg.id" :message="cfg.description">
      <template slot="label">
        {{ cfg.name }}
        <t-copy-tag :copyText="`{{${prefix} ${syh}${cfg.key}${syh}}}`"></t-copy-tag>
      </template>
      <b-input v-if="cfg.opt_type === 'text'" v-model="cfg.value"></b-input>
      <b-input v-if="cfg.opt_type === 'textarea'" type="textarea" v-model="cfg.value"></b-input>
      <b-input v-if="cfg.opt_type === 'tags'" v-model="cfg.value"></b-input>
      <t-image-upload v-if="cfg.opt_type === 'uploadImage'" v-model="cfg.value" ></t-image-upload>
    </b-field>
    <b-field label="" v-if="config && config.length > 0">
      <b-button @click="save">保存</b-button>
    </b-field>
  </section>
</template>
<script>
import { PropTypes } from '@/utils/types'
import { getConfigByGroup, updateConfig } from '@/api/config'

export default {
  props: {
    group: PropTypes.String,
    prefix: PropTypes.String
  },
  data () {
    return {
      config: [],
      syh: '"',
      loading: false
    }
  },
  mounted() {
    this.loadGroup(this.group)
  },
  methods: {
    loadGroup(name) {
      getConfigByGroup(name).then(res => {
        this.config = res.config
      })
    },
    save () {
      this.loading = true
      this.config.map(cfg => {
        if (cfg.key === 'default_avatar') {
          this.$systemCfg.default_avatar = cfg.value
        }
      })
      updateConfig({
        config: this.config
      }).then(() => {
        this.loading = false
        this.$buefy.toast.open({
          message: '保存成功!',
          type: 'is-success'
        })
      })
    }
  }
}
</script>