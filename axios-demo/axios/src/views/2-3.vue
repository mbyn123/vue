<template>
  <div></div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "axios2-3",
  created() {
    //axios 并发请求 一次发送多个请求
    axios.all([axios.get("/data.json"), axios.get("/city.json")]).then(
      axios.spread((dataRes, cityRes) => {
        console.log(dataRes, cityRes);
      })
    );
  }
};
</script>