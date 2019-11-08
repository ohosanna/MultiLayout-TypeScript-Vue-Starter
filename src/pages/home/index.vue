<template>
  <div class="home-page">
    <h1>{{$t('首页')}} {{$t('测试')}}</h1>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
// import { Toast } from '../../components'
import topNav from '@comps/topNav.vue';

@Component({
  components: {
    topNav
  }
})
export default class Home extends Vue {
}
</script>
