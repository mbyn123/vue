<template>
  <li class="list-group-item clearfix">
        <div class="del"><a href="#javascript:;" @click="delitem">删除</a></div>
        <p class="user">
        <span>{{comment.name}}</span> <span>说</span>
         </p>
        <p class="center">
           {{comment.content}}
        </p>
        </li>
</template>

<script>
export default{
 props:{comment:Object,index:Number,delComment:Function},
 methods:{
   delitem(){
     const {comment,index,delComment}=this
     if(window.confirm(`确定要删除${comment.name}的评论吗`)){
       delComment(index)
     }
   }
 }
}
</script>

<style>
.del{
  border:1px solid #ccc;
  float: right;
}
.del a{
  display: block;
  text-decoration: none;
}
.user{font-size: 22px}
.center{padding: 0 50px}
</style>
