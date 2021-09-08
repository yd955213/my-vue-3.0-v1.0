<template>
  <router-link to="/movie/1">movieID1</router-link>
  <router-link to="/movie/2">movieID2</router-link>
  <router-link to="/movie/3">movieID3</router-link>
  <router-link to="/movie/4">movieID4</router-link>
  <router-link to="/movie/5">movieID5</router-link>
  <button type="button" @click="onclickMovie(3)">movieID=3</button>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "MyMovie",
  methods: {
    onclickMovie(id) {
      this.$router.push({
        name: "movie",
        params: {
          movieId: id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
