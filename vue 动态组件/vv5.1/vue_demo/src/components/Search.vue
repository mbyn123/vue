<template>
<section class="jumbotron">
    <h2>搜索github用户</h2>
    <input type="text" placeholder="请输入用户名" v-model="name" @keyup.enter="search">
     <button @click="search">搜索</button>
</section>
</template>

<script>
import PubSub from "pubsub-js"
export default {
data(){
    return{
        name:''
    }
},
methods:{
    search(){
        //发布消息
     const searchName= this.name.trim()
     if(searchName){
         PubSub.publish('search',searchName)
     }  
    }
}
}
</script>

<style>


</style>