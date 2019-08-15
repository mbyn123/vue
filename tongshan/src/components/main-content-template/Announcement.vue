<template>
  <div>
    <div class="summary">
      <div class="inner">
        <div class="title-bar">
          <div>
            <Icon type="md-notifications-outline" color="#2d8cf0" size="20" class="icon" />
            <span class="name">通知公告</span>
          </div>
          <div>
            <a href="#">更多 >></a>
          </div>
        </div>
        <div class="internal">
          <div class="summary-title" v-for="item in announcement" :key="item.id">
            <div>
              <em></em>
            </div>
            <div class="list">
              <span class="subtitle">{{item.title}}</span>
              <span class="subtime">{{item.time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcement: [
        {
          title: "近期的气象风险预报分析，一定确保人民生命财产安全 ",
          time: "2019-07-29 19:23"
        },
        {
          title: "一旦出现险情，要立即应急处置，避免发生垮坝决堤等事故，",
          time: "2019-07-29 19:13"
        },
        {
          title: "迎今年入梅后第七波强降水 铜山源水库等7座水库开闸泄洪",
          time: "2019-07-29 19:03"
        },
        {
          title: "铜山源水库利用提升等项目专题报告编制服务的中标结果公示  ",
          time: "2019-07-29 19:33"
        }
      ]
    };
  }
};
</script>

<style scoped>
.summary {
  padding: 10px 10px 20px 10px;
  background: #fff;
  margin-left: 10px;
  
}
.summary .inner {
  position: relative;
}
.summary .title-bar {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.summary .title-bar .name {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}

.summary .title-bar .icon {
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
 .summary .title-bar a {
  color: #ccc;
}

.summary em {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #333;
  border-radius: 50%;
  margin-right: 10px;
}

.summary .internal .summary-title {
  padding-left: 7px;
  display: flex;
  margin-bottom: 24px;
}
.summary .internal .summary-title .subtitle {
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

.internal .summary-title .subtime {
  position: absolute;
  right: 0;
}

.internal .summary-title .list {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
