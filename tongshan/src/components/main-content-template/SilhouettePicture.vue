<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="16">
        <div class="pictures-titlebar">
          <div>
            <Icon type="ios-film-outline" size="20" class="icon" color="#2d8cf0" />
            <span class="name">水库掠影</span>
          </div>
          <div>
            <a href="#">更多>></a>
          </div>
        </div>
      </Col>
      <Col span="16">
        <div class="pictures">
          <Row :gutter='10'>
            <Col span="6" v-for="item in picturess" :key="item.id">
              <div class="imgs">
                <img :src="item.img" alt />
                <div class="site-name">{{item.names}}</div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picturess: [
        {
          img: require("../../assets/gs.jpg"),
          names: "光山水库"
        },
        {
          img: require("../../assets/bs.jpg"),
          names: "半山水库"
        },
        {
          img: require("../../assets/jjs.jpg"),
          names: "将军山水库"
        },
        {
          img: require("../../assets/hsg.jpg"),
          names: "洪水沟水库"
        }
      ]
    };
  }
};
</script>

<style scoped>
.pictures-titlebar {
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
}
.pictures-titlebar .name {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}
.pictures-titlebar a {
  color: #ccc;
}
.pictures-titlebar .icon {
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}

.pictures .imgs {
  height: 160px;
  position: relative;
}
.pictures .imgs img {
  display: block;
  width: 100%;
  height: 100%;
}
.pictures .site-name {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 2px 10px;
  background: #2d8cf0;
  font-size: 14px;
  color: #fff;
}
</style>
