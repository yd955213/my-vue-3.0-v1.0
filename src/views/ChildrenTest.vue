<template>
  <div>
    <router-link to="/childrenTest/home">购物车</router-link>
    <router-link to="/childrenTest/about">表格</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "ChildrenTest",
};
</script>

<style lang="less" scoped></style>
