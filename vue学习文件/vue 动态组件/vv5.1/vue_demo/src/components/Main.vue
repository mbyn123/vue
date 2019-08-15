<template>
   <div class="row">
      <h2 v-if="start">请输入用户名搜索</h2>
      <h2 v-if="coures">loading...</h2>
     <div class="col-xs-6 col-md-3" v-for="(user,index) in users" :key="index">
        <a :href="user.url" class="thumbnail">
          <img :src="user.avatar_url" style="width:150px">
          <p>{{user.name}}</p>
        </a>
    </div>             
  </div>
</template>

<script>
import PubSub from "pubsub-js"
import axios from "axios"

export default {
data(){
  return{
   start:true,
   coures:false,
   users:null,
   end:''
  }
},

mounted(){
  PubSub.subscribe("search",(msg,searchName)=>{
const url=`https://api.github.com/search/users?q=${searchName}`
this.start=false
this.coures=true
axios.get(url).then(response=>{
  const reslut=response.data
  const users=reslut.items.map(item=>({
    url:item.html_url,
    avatar_url:item.avatar_url,
    name:item.login
  }))
this.coures=false
this.users=users
})
.catch(error=>{
  
  this.end="请求失败"
})
  })
}
}
</script>

<style>
.row a{
  text-decoration: none;
}

</style>