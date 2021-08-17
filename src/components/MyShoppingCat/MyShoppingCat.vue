<template>
  <div class="my-shopping-cat">
    <Header title="购物车" bg_color="blue" f_color="black" f_size="20"></Header>
  </div>
  <div>
    <Goods
      v-for="item in goodsList"
      :id="item.id + ''"
      :key="item.id"
      :goods-name="item.goods_name"
      :goods-img="item.goods_img"
      :goods-count="item.goods_count"
      :goods-price="item.goods_price"
      :checked="item.goods_state"
      @selectGoods="onCheckboxStatusChange"
      @goodsCountTextChanged="onGoodsCountTextChanged"
    ></Goods>
  </div>
  <div>
    <Footer :amount="amount" :count="count" @selectAll="onSelectAll"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Goods from "./components/Goods";
import Footer from "./components/Footer";

export default {
  name: "MyShoppingCat",
  components: { Footer, Goods, Header },
  data() {
    return {
      goodsList: [],
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    async getGoodList() {
      const { data: result } = await this.$http.get("/api/cart");
      if (result.status !== 200) return alert("请求购物车数据失败");
      this.goodsList = result.list;
      console.log(this.goodsList);
    },
    onSelectAll(status) {
      console.log(status);
      this.goodsList.forEach((goods) => (goods.goods_state = status));
    },
    onCheckboxStatusChange(selectGoodsInfo) {
      let findResult = this.goodsList.find(
        (goods) => goods.id === selectGoodsInfo.id
      );
      if (findResult) {
        findResult.goods_state = selectGoodsInfo.value;
      }
    },
    onGoodsCountTextChanged(goods) {
      console.log(goods);
      let result = this.goodsList.find((x) => x.id === goods.id);
      if (result) {
        result.goods_count = goods.value;
      }
    },
  },
  computed: {
    amount() {
      let totalCost = 0;
      this.goodsList
        .filter((goods) => goods.goods_state === true)
        .forEach((goods) => {
          totalCost += goods.goods_price * goods.goods_count;
        });
      return totalCost;
    },
    count() {
      let total = 0;
      this.goodsList
        .filter((goods) => goods.goods_state === true)
        .forEach((goods) => {
          total += goods.goods_count;
        });
      return total;
    },
  },
};
</script>

<style lang="less" scoped>
    .my-shopping-cat {
      display: block;

    }
</style>
