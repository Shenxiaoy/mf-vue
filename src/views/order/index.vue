<template>
  <div class="system-obj">商品---shop
    <p>{{tss}}</p>
    <p>{{sharelodash}}</p>
    <a-button>ssss</a-button>
  </div>
</template>

<script>
// import _ from 'lodash'
import './system.scss'

// const list = [7,8,9]
// const sharelodash = _.head(list)
export default {
  data () {
    return {
      ori: '',
      sharelodash: null
    }
  },
  computed: {
    tss: function () {
      return 'this.$mainsdk.a'
    }
  },
  async mounted () {
    console.log('child-vue')
  }
}
</script>

<style>
</style>
