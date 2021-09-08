<template>
  <MyTable :data="goodsList">
    <template v-slot:header>
      <th>序号</th>
      <th>商品名称</th>
      <th>价格</th>
      <th>标签</th>
      <th>操作</th>
    </template>
    <template v-slot:body="{ row, index }">
      <th>{{ index + 1 }}</th>
      <th>{{ row.goods_name }}</th>
      <th>￥ {{ row.goods_price }}</th>
      <th>
        <input
          type="text"
          class="form-control form-control-sm ipt-tag"
          v-if="row.inputVisible"
          v-focus
          v-model.trim="row.inputValue"
          @blur="onInputConfirm(row)"
          @keyup.enter="onInputConfirm(row)"
          @keyup.esc="row.inputValue = ''"
        />
        <button
          type="button"
          class="btn btn-primary btn-sm"
          v-else
          @click="row.inputVisible = true"
        >
          +Tag
        </button>
        <span
          class="badge badge-warning my-tags"
          v-for="item in row.tags"
          :key="item"
          >{{ item }}</span
        >
      </th>
      <th>
        <button
          type="button"
          class="btn btn-danger btn-sm"
          @click="onDelete(row.id)"
        >
          删除
        </button>
      </th>
    </template>
  </MyTable>
</template>

<script>
import MyTable from "../components/MyTable/MyTable";

export default {
  name: "About",
  components: {
    MyTable,
  },
  data() {
    return {
      goodsList: [],
    };
  },
  methods: {
    async getGoodList() {
      const { data: result } = await this.$http.get("/api/goods");
      if (result.status !== 0) alert("请求商品列表失败");
      this.goodsList = result.data;
    },
    onDelete(goodsID) {
      this.goodsList = this.goodsList.filter(
        (goodsList) => goodsList.id !== goodsID
      );
    },
    onInputConfirm(row) {
      const inputValue = row.inputValue;
      row.inputValue = "";
      row.inputVisible = false;
      if (!inputValue || row.tags.indexOf(inputValue) !== -1) return;
      row.tags.push(inputValue);
    },
  },
  created() {
    this.getGoodList();
  },
  directives: {
    focus(el) {
      el.focus();
    },
  },
};
</script>
<style lang="less" scoped>
.my-tags {
  margin: 5px;
  background-color: green;
  color: black;
}
</style>
