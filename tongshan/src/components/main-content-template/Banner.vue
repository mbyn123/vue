<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="16">
        <div class="time">2019 - 07 - 20 19:23</div>
      </Col>
      <Col span="16">
        <Row>
          <Col span="12">
            <div class="banner-slideshow">
              <Carousel autoplay v-model="value2" loop>
                <CarouselItem v-for="item in slideshows" :key="item.id">
                  <div class="demo-carousel">
                    <img :src="item.img" alt />
                    <div class="title">
                      <span class="internal">{{item.title}}</span>
                      <a href="#">
                        <span class="link">更多 >></span>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </Col>
          <Col span="5">
            <div class="picture">
              <div class="internal" v-for="item in pictures" :key="item.id">
                <img :src=item.img alt />
                <div class="name">{{item.name}}</div>
              </div>
              
            </div>
          </Col>
          <Col span="7">
            <Announcement/>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script scoped>
import Announcement from "./Announcement"
export default {
  data() {
    return {
      value2: 0,
      slideshows: [
        {
          img: require("../../assets/banshan.jpg"),
          title: "小心水库运行管理现状及政策"
        },
        {
          img: require("../../assets/btq.jpg"),
          title: "小心水库运行管理现状及政策"
        },
        {
          img: require("../../assets/sk.jpg"),
          title: "小心水库运行管理现状及政策"
        },
        {
          img: require("../../assets/ts.jpg"),
          title: "小心水库运行管理现状及政策"
        }
      ],
      pictures: [
        {
          img: require("../../assets/banshan.jpg"),
          name: "半山水库"
        },
        {
          img: require("../../assets/sk.jpg"),
          name: "光山水库"
        },
      ]
    };
  },
  components:{
    Announcement
  }
};
</script>

<style>
.time {
  text-align: right;
  font-size: 14px;
  padding-right: 40px;
}

.banner-slideshow .demo-carousel {
  position: relative;
}

.title {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

.banner-slideshow .demo-carousel .title .internal {
  font-size: 16px;
  font-weight:bold;
  color: #fff;
}

.banner-slideshow .demo-carousel .title .link {
  position: absolute;
  bottom: 20px;
  right: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  line-height: 14px;
  padding: 2px 10px;
  color: #fff;
  cursor: pointer;
}
.banner-slideshow img {
  display: block;
  width: 100%;
  height: 360px;
}
.picture {
  margin-left: 5px;
}

.picture .internal {
  margin-bottom: 5px;
  position: relative;
}

.picture .internal .name {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}

.picture img {
  width: 100%;
  height: 178px;
  display: block;
}
</style>
