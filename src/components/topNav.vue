<template>
  <div id="top-nav">
    <ul>
      <li>Home</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TopNav extends Vue {
  active = ''
}
</script>

<style lang='scss'>
</style>
