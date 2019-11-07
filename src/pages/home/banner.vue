<template>
  <swipe class="h-banner" :auto="5000">
    <swipe-item>
      <a><img src="../../assets/images/sbanner/h-sban-lever1.jpg"></a>
    </swipe-item>
    <swipe-item>
      <a><img src="../../assets/images/sbanner/h-sban-lever1.jpg"></a>
    </swipe-item>
  </swipe>
</template>

<script>

  import { Swipe, SwipeItem } from "../../components"

  export default {
    components : {
      Swipe,
      SwipeItem
    },
    data() {
      return {
      }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    }
  }
</script>
