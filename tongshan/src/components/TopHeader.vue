<template>
  <div>
    <div>
      <Row>
        <Col span="24">
          <div class="topbanner">
            <img src="../assets/banner.png" alt />
          </div>
        </Col>
        <Col span="24">
          <div class="navbar-warp">
            <Row type="flex" justify="center">
              <Col span="16">
                <div class="nav">
                  <div class="port">首页</div>
                  <div class="port">通知公告</div>
                  <div class="port">政策法规</div>
                  <div class="port">新闻资讯</div>
                  <div class="port">水库名录</div>
                  <div class="port">责任人公式</div>
                  <div class="port">视频资料</div>
                </div>
              </Col> 
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style scoped>
.topbanner {
  height: 235px;
}
.topbanner img {
  width: 100%;
  height: 100%;
}

.navbar-warp{
  background: #0084ff;
}
.navbar-warp .nav {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px
}

.navbar-warp .nav .port {
  padding: 10px 0 7px 0;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 22px;
  cursor: pointer;
}

.navbar-warp .nav .port:hover {
  background: #fff;
  color: #0084ff;
}
</style>
