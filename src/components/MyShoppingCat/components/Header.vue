<template>
  <div
    class="header"
    :style="{
      color: f_color,
      backgroundColor: bg_color,
      fontSize: f_size + 'px',
    }"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Header",
    },
    bg_color: {
      type: String,
      default: "Header",
    },
    f_color: {
      type: String,
      default: "Header",
    },
    f_size: {
      type: String,
      default: "14",
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  line-height: 45px;
  text-align: center;
  font-weight: bold;
  z-index: 999;
}
</style>
