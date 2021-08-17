<template>
  <div class="counter">
    <button type="button" class="btn btn-primary btn-sm" @click="onSubtractOne">
      -
    </button>
    <input type="text" class="form-control" v-model.number.lazy="number" />
    <button type="button" class="btn btn-primary btn-sm" @click="onAddOne">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    count: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: NaN,
    },
  },
  data() {
    return {
      number: this.count,
    };
  },
  emits: ["goodsCountTextChange"],
  methods: {
    onSubtractOne() {
      if (!isNaN(this.min) && this.number - 1 < this.min) return;
      this.number -= 1;
    },
    onAddOne() {
      this.number += 1;
    },
  },
  watch: {
    number(newNumber) {
      const result = parseInt(newNumber);
      if (isNaN(result) || result <= 0) {
        this.number = 1;
        return;
      }
      if (String(newNumber).indexOf(".") !== -1) {
        this.number = newNumber;
        return;
      }
      console.log(this.number);
      this.$emit("goodsCountTextChange", this.number);
    },
  },
};
</script>

<style lang="less" scoped>
.counter {
  display: flex;

  .btn {
    width: 25px;
  }

  .form-control {
    width: 50px;
    text-align: center;
    margin: 0 4px;
    font-size: 12px;
  }
}
</style>
