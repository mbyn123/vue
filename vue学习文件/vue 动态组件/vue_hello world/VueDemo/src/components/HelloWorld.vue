<template>
<div>
  <p class="msg">{{msg}}</p>
  子组件:<input type="text" v-model="text.d">
  子组件: <input type="button" @click="set">
</div>
</template>


<script>
export default{//配置对象(vue一致)
props:['text'],
    data(){//组件必须写函数
      return{
          msg:'hello world vue-cli 2019-06-15',
          x:[
            "1", "1", "1", "1", "1",
          ]

      }
    },
    methods:{
    set(){
      this.$emit("parent",this.x.length)
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




