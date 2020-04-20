<template>
  <div>
    <b-field :label="item.label" :message="item.validState || item.validState === null ? item.description : item.validMsg" v-for="(item, index) of items" :key="index" :type="item.validState || item.validState === null ? '' : 'is-danger'">
      <template slot="label">
        <b class="text-must" v-if="item.must">*</b> {{ item.label }}
        <b-tag rounded v-if="item.tag">{{ item.tag }}</b-tag>
      </template>
      <b-input v-if="item.type === 'input'" @blur="validation(item)" :disabled="item.loading" :loading="item.loading" :placeholder="item.placeholder" v-model="item.value"></b-input>
      <b-input v-if="item.type === 'textarea'" @blur="validation(item)" :disabled="item.loading" :loading="item.loading" :placeholder="item.placeholder" v-model="item.value" type="textarea"></b-input>
      <b-upload drag-drop v-if="item.type === 'imageUpload'" accept=".jpg,.jpeg,.png,.gif">
        <section class="section" v-if="!item.value">
          <div class="content has-text-centered" >
            <p>
              <b-icon
                  icon="upload"
                  size="is-large">
              </b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
        <img src="https://bulma.io/images/placeholders/480x320.png" style="max-height: 100%; max-width: 100%;" v-else>
      </b-upload>
    </b-field>
  </div>
</template>
<script>
import {PropTypes} from '@/utils/types'
import { valid } from '@/utils/valid'

export default {
  props: {
    form: PropTypes.Array
  },
  data () {
    return {
      items: null
    }
  },
  mounted () {
    this.loadData(this.form)
  },
  methods: {
    loadData (val) {
      const temp = JSON.parse(JSON.stringify(val))
      temp.map((item, index) => {
        item.validState = null
        item.validMsg = ''
        item.loading = false
        if (val[index].valid) {
          val[index].valid.map((v, i) => {
            for (let k in v) {
              if (typeof(v[k]) === 'function') {
                item.valid[i][k] = v[k]
              }
            }
          })
        }
      })
      this.items = temp
    },
    validation (item) {
      valid.valid(item)
    },
    validate () {
      let hasErr = false
      this.items.map(item => {
        valid.valid(item)
        if (!item.validState) {
          hasErr = true
        }
      })
      return !hasErr
    },
    submit (callback) {
      const data = {}
      this.items.map(item => {
        data[item.name] = item.value
      })
      callback(data)
    }
  },
  watch: {
    form (val) {
      this.loadData(val)
    }
  }
}
</script>