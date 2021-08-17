<template>
  <div class="footer">
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
        @change="checkboxSelectChange"
        :checked="ifFull"
      />
      <label class="form-check-label" for="exampleCheck1">全选</label>
    </div>
    <div>
      <span>合计：</span>
      <span class="count">{{ amount.toFixed(2) }}</span>
    </div>
    <div>
      <button type="button" class="btn btn-primary" :disabled="count === 0">
        结算（{{ count }}）
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    amount: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    ifFull: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["selectAll"],
  methods: {
    checkboxSelectChange(e) {
      this.$emit("selectAll", e.target.checked);
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: white;
  border-top: 1px solid black;

  .form-check-input {
    border-radius: 1.25em;
  }

  .count {
    color: red;
  }

  .btn-primary {
    min-width: 90px;
    border-radius: 19px;
    height: 38px;
  }
}
</style>
