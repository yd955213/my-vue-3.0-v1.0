<template>
  <div class="home-container">
    <my-header></my-header>
    <div class="home-main-box">
      <my-aside></my-aside>
      <div class="home-main-body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MyAside from "@/components/UserInfo/components/MyAside";
import MyHeader from "@/components/UserInfo/components/MyHeader";
export default {
  name: "userInfo",
  components: {
    MyAside,
    MyHeader,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
