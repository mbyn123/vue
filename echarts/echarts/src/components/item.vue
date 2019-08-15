<template>
  <div id="liquidFill" style="width:100% ;height:400px"></div>
</template>

<script>
import echarts from "echarts";
import "echarts-liquidfill/src/liquidFill.js";
export default {
  methods: {
    drawChart12() {
      let myChart12 = this.$echarts.init(document.getElementById("liquidFill"));
      let option12 = {
        series: [
          {
            name: "系列",
            type: "liquidFill",
            data: [0.34],
            radius: "50%",
            outline: {
              show: true, //是否显示轮廓 布尔值
              borderDistance: 0, //外部轮廓与图表的距离 数字
              itemStyle: {
                borderColor: "rgb(65, 164, 255)", //边框的颜色
                borderWidth: 2 //边框的宽度
              }
            },
            backgroundStyle: {
              color: "#fff" //图表的背景颜色
            },
            color: ["rgb(65, 164, 255)"],
            waveLength: "90%",
            amplitude: 6 //振幅
          }
        ]
      };

      myChart12.setOption(option12);
    }
  },
  mounted() {
    this.drawChart12();
  }
};
</script>


<style>
</style>
