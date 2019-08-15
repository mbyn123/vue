<template>
<div>
      <header class="site-header jumbotron">
          <div class="container">
            <div class="row">
                  <div class="col-xs-12">
                    <h1>请发表对vue的评论</h1>
                  </div>
            </div>
          </div>
      </header>
      <div class="container">
        <Add :addComment="addComment"/>,
       <List :comments="comments" :delComment="delComment"/>
      </div>
</div>
</template>

<script>
import Add from "./components/Add.vue"
import List from "./components/List.vue"
export default{
 data(){
   return{
     comments:[
       {name:'BOB',content:'vue 还不错'},
       {name:'JACK',content:'so easy'},
       {name:'Marry',content:'感觉vue有点难'}
     ]
   }
 }, 
 methods:{
   addComment(comment){
     this.comments.unshift(comment)
   },
   delComment(index){
      this.comments.splice(index,1)
   }
 },
 components:{
   Add,
   List
 }
}
</script>

<style>

</style>
