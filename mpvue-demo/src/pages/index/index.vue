<template>
  <div class="container">
    <img class="user-img" src="/static/images/avatar/1.png" alt />
    <p class="user-name">hello world</p>
    <div class="but" @click="tolist">开启小程序之旅</div>
  </div>
</template>

<script>
export default {
  data () {},
  methods:{
    tolist(){
      wx.navigateTo({ url: '/pages/list/main' });

    }
  }

}
</script>

<style>
page {
  background: #00a1d6;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-img {
  width: 120rpx;
  height: 120rpx;
  margin: 200rpx 0 50rpx 0;
}

.user-name {
  font-size: 32rpx;
  margin-bottom: 150rpx;
}

.but {
  border: 1px solid #333;
  padding: 10rpx;
  border-radius: 20rpx;
}
</style>
