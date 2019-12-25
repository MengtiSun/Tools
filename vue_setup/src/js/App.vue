<template lang="html">
  <div class="box">
    hello, blue -> {{a}}
    <Cmp1></Cmp1>
  </div>
</template>

<script>
import Cmp1 from "@/components/Cmp1.vue";
export default {
  components: {Cmp1},
  data(){
    return {
      a: 12
    }
  },
}
</script>

<style lang="css" scoped>
.box {width:200px; height:200px; background:#CCC;}
</style>
