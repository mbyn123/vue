<template>
<div>
  <p class="msg">{{msg}}</p>
</div>
</template>


<script>
export default{//配置对象(vue一致)
    data(){//组件必须写函数
      return{
          msg:'hello world vue-cli 2019-06-15'
      }
    }
}
</script>


<style>
  .msg{
      font-size:20px;
      color:red;
  }
</style>




