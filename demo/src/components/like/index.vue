<template>
  <div>
    <div class="like-container" @click="onlike">
      <img class="like-img" :src="like?likeimg:nolikeimg" alt="">
      <span class="count">{{count}}</span>
    </div>
  </div>
</template>

<script>

  export default {

    data(){

      return{
        like:true,
        count:0,
        likeimg:"/static/images/icon/like.png",
        nolikeimg:"/static/images/icon/nolike.png",

      }
    },
    methods:{
      onlike(event){
        this.like=!this.like
        if(this.like){
           this.count=this.count+1
        }else{
          this.count=this.count-1
        }
      }
    },




  }
</script>

<style>
  .like-container{
    display:inline-flex;
    flex-direction: row;
    padding:10rpx;
    border:1px solid red;
  }

  .like-container .count {
    font-size: 24rpx;
    color: #bbbbbb;
    position: relative;
    bottom:10rpx;
    left:5rpx;

  }

  .like-img {
    width: 32rpx;
    height: 28rpx;
  }
</style>
