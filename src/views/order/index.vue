<template>
  <div>
    订单
    <a-button type='danger'>订单</a-button>
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
