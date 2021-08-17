<template>
  <div class="goods">
    <div class="goods-left">
      <input
        type="checkbox"
        class="form-check-input"
        :id="id"
        :checked="checked"
        @change="onCheckboxStatusChange"
      />
      <label class="form-check-label" for="id">
        <img :src="goodsImg" class="goods-img" />
      </label>
    </div>
    <div class="goods-info">
      <div class="goods-name">
        <span>{{ goodsName }}</span>
      </div>
      <div class="goods-info-bottom">
        <span class="goodsPrice">￥ {{ goodsPrice }}</span>
        <Counter
          :count="goodsCount"
          :min="1"
          @goodsCountTextChange="goodsCountTextChanged"
        ></Counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter";
export default {
  name: "Goods",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    goodsName: {
      type: String,
      required: true,
    },
    goodsImg: {
      type: String,
      required: true,
    },
    goodsPrice: {
      type: Number,
      required: true,
    },
    goodsCount: {
      type: Number,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Counter,
  },
  emits: ["selectGoods", "goodsCountTextChanged"],
  methods: {
    onCheckboxStatusChange(e) {
      this.$emit("selectGoods", {
        id: this.id,
        value: e.target.checked,
      });
    },
    goodsCountTextChanged(textValue) {
      this.$emit("goodsCountTextChanged", {
        id: parseInt(this.id),
        value: textValue,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.goods {
  + .goods {
    border-top: 1px solid black;
  }
  display: flex;
  padding: 10px;
  top: 45px;
  .goods-left {
    margin-right: 10px;

    .form-check-input {
      padding-right: 5px;
      line-height: 50px;
      border-radius: 1.25em;
    }

    .form-check-label {
      top: 3.4rem;
    }

    .goods-img {
      display: block;
      width: 100px;
      height: 100px;
      background-color: #efefef;
    }
  }
  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .goods-name {
      font-weight: bold;
    }

    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .goodsPrice {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
