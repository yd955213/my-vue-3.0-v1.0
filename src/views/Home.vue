<template>
  <div class="home">
    <MyShoppingCat></MyShoppingCat>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MyShoppingCat from "@/components/MyShoppingCat/MyShoppingCat.vue";
@Options({
  components: {
    MyShoppingCat,
  },
})
export default class Home extends Vue {}
</script>
<!--<style lang="less" scoped>-->
<!--div{-->
<!--  top: 50px;-->
<!--}-->
<!--</style>-->
