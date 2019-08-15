<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="16">
        <div class="Publicity">
          <div class="Publicity-titlebar">
            <div>
              <Icon type="md-contacts" color="#2d8cf0" size="20" class="icon" />
              <span class="Publicity-title">责任人公示</span>
            </div>
            <div>
              <a href="#">更多>></a>
            </div>
          </div>
          <div class="internal">
            <Row :gutter="10">
              <Col span="8" v-for="item in publicity" :key="item.id">
                <div class="Publicity-card">
                  <div class="Publicity-inner">
                    <div class="picture">
                      <img :src="item.img" />
                    </div>
                    <div class="introduce">
                      <div style="display:flex;  justify-content: space-between;">
                        <h3>{{item.title}}</h3>
                        <Icon type="ios-pricetag-outline" size="20" />
                      </div>

                      <div class="controller">
                        <span class="post">{{item.post}}</span>
                        <span class="name">{{item.name}}</span>
                      </div>
                      <div class="controller">
                        <span class="post">{{item.post2}}</span>
                        <span class="name">{{item.name2}}</span>
                      </div>
                      <div class="controller">
                        <span class="post">{{item.post3}}</span>
                        <span class="name">{{item.name3}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="site">
                    <div class="site-reservoir">
                      <span>{{item.sitePost1}}</span>
                      <span>{{item.site1}}</span>
                    </div>
                    <div class="site-manage">
                      <span>{{item.sitePost2}}</span>
                      <span>{{item.site2}}</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicity: [
        {
          img: require("../../assets/bq.jpg"),
          title: "白桥水库",
          post: "行政责任人:",
          name: "管洁",
          post2: "技术责任人:",
          name2: "李世春",
          post3: "巡查责任人",
          name3: "李世建",
          sitePost1: "水库地址:",
          sitePost2: "管理单位:",
          site1: "江苏省徐州市铜山区张集镇",
          site2: "徐州市铜山区河道水库管理处"
        },
        {
          img: require("../../assets/bt.jpg"),
          title: "白塔泉水库",
          post: "行政责任人:",
          name: "周林",
          post2: "技术责任人:",
          name2: "--",
          post3: "巡查责任人",
          name3: "--",
          sitePost1: "水库地址:",
          sitePost2: "管理单位:",
          site1: "江苏省徐州市铜山区张集镇",
          site2: "徐州市铜山区河道水库管理处"
        },
        {
          img: require("../../assets/btq.jpg"),
          title: "白桥水库",
          post: "行政责任人:",
          name: "管洁",
          post2: "技术责任人:",
          name2: "李世春",
          post3: "巡查责任人",
          name3: "李世建",
          sitePost1: "水库地址:",
          sitePost2: "管理单位:",
          site1: "江苏省徐州市铜山区张集镇",
          site2: "徐州市铜山区河道水库管理处"
        },
        {
          img: require("../../assets/bq.jpg"),
          title: "白桥水库",
          post: "行政责任人:",
          name: "管洁",
          post2: "技术责任人:",
          name2: "李世春",
          post3: "巡查责任人",
          name3: "李世建",
          sitePost1: "水库地址:",
          sitePost2: "管理单位:",
          site1: "江苏省徐州市铜山区张集镇",
          site2: "徐州市铜山区河道水库管理处"
        },
        {
          img: require("../../assets/bt.jpg"),
          title: "白塔泉水库",
          post: "行政责任人:",
          name: "周林",
          post2: "技术责任人:",
          name2: "--",
          post3: "巡查责任人",
          name3: "--",
          sitePost1: "水库地址:",
          sitePost2: "管理单位:",
          site1: "江苏省徐州市铜山区张集镇",
          site2: "徐州市铜山区河道水库管理处"
        },
        {
          img: require("../../assets/btq.jpg"),
          title: "白桥水库",
          post: "行政责任人:",
          name: "管洁",
          post2: "技术责任人:",
          name2: "李世春",
          post3: "巡查责任人",
          name3: "李世建",
          sitePost1: "水库地址:",
          sitePost2: "管理单位:",
          site1: "江苏省徐州市铜山区张集镇",
          site2: "徐州市铜山区河道水库管理处"
        }
      ]
    };
  }
};
</script>

<style scoped>
.Publicity-titlebar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.Publicity-titlebar .Publicity-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}

.Publicity-titlebar .icon {
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}

.Publicity-titlebar a {
  color: #ccc;
}

.Publicity-card {
  padding: 10px;
  margin-bottom: 10px;
  background: #fff;
}

.Publicity .internal .Publicity-inner {
  display: flex;
}
.Publicity .internal .Publicity-inner .picture {
  width: 200px;
  height: 130px;
}
.Publicity-inner .picture img {
  display: block;
  width: 100%;
  height: 100%;
}
.Publicity-inner .introduce {
  flex: 1;
  padding: 0 10px;
  white-space: nowrap;
}

.Publicity-inner .introduce h3 {
  font-size:16px;
  margin-bottom: 5px
}

.Publicity-inner .introduce .controller{
  padding-top:14px;
}
.Publicity-inner .introduce .controller .post {
  font-size: 14px;
  color: #333;
  margin-right: 5px;
}
.Publicity-inner .introduce .controller .name {
  font-size: 14px;
  color: #333;
}
.Publicity .site {
  padding-top: 10px;
}
.Publicity .site .site-reservoir {
  margin-bottom: 5px;
}
</style>
