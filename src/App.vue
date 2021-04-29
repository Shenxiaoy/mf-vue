<template>
  <div>
    <router-view></router-view>   
  </div>
</template>

<script>
import _ from 'lodash'
// import Layout from '@/components/layout'
const ary = [678, 3,4,5]
const test = _.head(ary)
export default {
  data () {
    return {
      test: test
    }
  },
  components: {
    // Layout
  }
}
</script>

<style>
</style>
