<template>
  <div id="top-nav">
    <ul>
      <li>{{$t('Home')}}</li>
      <li>{{$t('Login')}}</li>
      <li>{{$t('Register')}}</li>
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
