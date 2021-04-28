<template>
  <div>
    <div>{{test}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import _ from 'lodash'
const ary = [3,4,5]
const test = _.head(ary)
export default {
  data () {
    return {
      test: test
    }
  }
}
</script>

<style>
</style>
