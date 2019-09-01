<template>
  <div>
    <!-- <h1>count:{{count}}</h1>
    <button @click="countIncrease">点击</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    //使用计算属性监听  获取$store实例
    // count() {
    //   return this.$store.state.count;
    // }
  },
  methods: {
    //使用 commit(方法名，参数) 获取$store实例  mutations 中的方法
  //   countIncrease() {
  //      const v = 100
  //     this.$store.commit("countIncrease",v);
  //   }
   }
};
</script>

<style>
</style>
