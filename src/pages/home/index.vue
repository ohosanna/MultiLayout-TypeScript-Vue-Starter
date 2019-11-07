<template>
  <div class="home-page">
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
