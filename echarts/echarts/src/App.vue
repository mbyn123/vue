<template>
  <div id="app">
    <Row>
      <Col span="6">
        <div style="border:1px solid red">
          <div id="main" style="width: 100%;height:400px;"></div>
        </div>
      </Col>
      <Col span="6">
        <div id="main2" style="width: 100%;height:400px;"></div>
      </Col>
      <Col span="6">
        <div id="main3" style="width: 100%;height:400px;"></div>
      </Col>

      <Col span="24">
        <div id="main5" style="width:100%;height:200px;"></div>
      </Col>
      <Col span="6">
        <div id="main7" style="width:100%;height:200px;border:1px solid"></div>
      </Col>
    
        <Col span="24" >
          <div id="main4" style="width:100% ;height:400px"></div>
        </Col>
      
    </Row>

    <div id="main6" style="width:100%;height:800px;"></div>
  
    <item />
  </div>
</template>
<script>
import item from "./components/item";
export default {
  name: "app",
  components: {
    item
  },
  methods: {
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      let myChart2 = this.$echarts.init(document.getElementById("main2"));
      let myChart3 = this.$echarts.init(document.getElementById("main3"));
      let myChart4 = this.$echarts.init(document.getElementById("main4"));
      let myChart5 = this.$echarts.init(document.getElementById("main5"));
      let myChart6 = this.$echarts.init(document.getElementById("main6"));
      let myChart7 = this.$echarts.init(document.getElementById("main7"));
      // 指定图表的配置项和数据
      let option = {
        color: ["#3398DB"],
        title: {
          text: "销售趋势"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "none" // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: "#ffffff",
          textStyle: {
            color: "black"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            default: "dashed"
          }
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "50%",

            data: [532, 1092, 449, 746, 448, 209, 1131, 462, 848, 218, 702, 803]
          }
        ]
      };
      let option2 = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}%",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "black"
          }
        },
        color: [
          "rgb(58, 161, 255)",
          "rgb(54, 203, 203)",
          "rgb(78, 203, 115)",
          "rgb(251, 212, 55)",
          "rgb(242, 99, 123)",
          "rgb(151, 95, 229)"
        ],
        legend: {
          orient: "vertical",
          x: "right",
          y: "center",
          data: [
            "家用电器",
            "食用酒水",
            "个护健康",
            "服饰箱包",
            "母婴产品",
            "其他"
          ],
          icon: "circle",
          itemWidth: 5, // 设置宽度
          itemHeight: 5, // 设置高度
          itemGap: 10 // 设置间距
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 28.79, name: "家用电器" },
              { value: 21.04, name: "食用酒水" },
              { value: 19.73, name: "个护健康" },
              { value: 14.73, name: "服饰箱包" },
              { value: 7.8, name: "母婴产品" },
              { value: 7.8, name: "其他" }
            ]
          }
        ]
      };
      let option3 = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          show: false //隐藏x坐标轴
        },
        yAxis: {
          type: "value",
          show: false //隐藏y坐标轴
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "black"
          }
        },
        series: [
          {
            data: [20, 22, 15, 26, 24, 8, 10],
            type: "line",
            areaStyle: {},
            smooth: true, //圆滑曲线true
            showSymbol: false,
            //  symbol:'none',隐藏圆点
            itemStyle: {
              normal: {
                color: "rgb(208, 233, 255)",
                lineStyle: {
                  color: "rgb(16, 137, 255)"
                }
              }
            }
          }
        ]
      };
      let option4 = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "black"
          }
        },
        xAxis: {
          type: "category",
          data: [
            "16:12",
            "",
            "17:12",
            "",
            "18:12",
            "",
            "19:12",
            "",
            "20:12",
            "",
            "21:12",
            "",
            "22:12",
            "",
            "23:12",
            "",
            "00:12",
            ""
          ]
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 100,
            startValue: "15:12",
            endValue: "00:42"
          },

          {
            type: "inside",
            xAxisIndex: [0],
            start: 1,
            end: 100,
            startValue: "15:12",
            endValue: "00:42"
          }
        ],
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "deshed" //设置刻度线虚线
            }
          },
          axisLine: {
            show: false, //隐藏y坐标轴线
            lineStyle: {
              color: "#ccc" //设置y轴坐标线颜色
            }
          },
          axisLabel: {
            textStyle: {
              color: "black" //设置y轴坐标字体颜色
              // fontSize:'14px'
            }
          }
        },
        legend: {
          x: "center",
          data: ["客流量", "支付笔数"],
          icon: "rect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
          itemWidth: 10, // 设置宽度
          itemHeight: 2.5, // 设置高度
          itemGap: 10 // 设置间距
        },

        series: [
          {
            name: "客流量",
            data: [
              85,
              11,
              32,
              23,
              97,
              30,
              79,
              48,
              49,
              34,
              35,
              36,
              27,
              15,
              100,
              107,
              20,
              86,
              55
            ],
            type: "line",
            itemStyle: {
              normal: {
                color: "rgb(208, 233, 255)",
                lineStyle: {
                  color: "rgb(16, 137, 255)"
                }
              }
            },
            showSymbol: false
          },
          {
            name: "支付笔数",
            data: [
              63,
              46,
              33,
              52,
              84,
              109,
              81,
              29,
              84,
              103,
              89,
              100,
              68,
              82,
              97,
              17,
              32,
              34,
              98
            ],
            type: "line",
            itemStyle: {
              normal: {
                color: "#2fc25b",
                lineStyle: {
                  color: "#2fc25b"
                }
              }
            },
            showSymbol: false
          }
        ]
      };
      let option5 = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: false //隐藏x坐标轴
        },
        yAxis: {
          type: "value",

          show: false //隐藏y坐标轴
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#ffffff",
          textStyle: {
            color: "black"
          }
        },
        series: [
          {
            data: [
              10,
              8,
              12,
              14,
              16,
              18,
              16,
              22,
              20,
              24,
              26,
              30,
              35,
              32,
              33,
              35,
              33,
              36,
              34,
              36,
              38,
              39,
              40,
              38
            ],
            type: "line",
            areaStyle: {},
            smooth: true, //圆滑曲线true
            //  showSymbol: false,
            // symbol:'none',隐藏圆点
            itemStyle: {
              normal: {
                color: "rgb(208, 233, 255)",
                lineStyle: {
                  color: "rgb(16, 137, 255)"
                }
              }
            }
          }
        ]
      };
      let option6 = {
        title: {
          text: "基础雷达图"
        },
        tooltip: {},
        legend: {
          data: ["个人", "团队", "部门"]
        },
        radar: {
          shape: "circle",
          splitNumber: 6,
          name: {
            textStyle: {
              color: "black"
            }
          },
          indicator: [
            { name: "引用", max: 10 },
            { name: "热度", max: 10 },
            { name: "贡献", max: 10 },
            { name: "产量", max: 10 },
            { name: "口碑", max: 10 }
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#ccc",
              type: "dashed"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: "#ccc", // 设置网格的颜色
              type: "dashed",
              shape: "circle"
            }
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: "rgba(255,0,0,0)" // 图表背景的颜色
            }
          }
        },

        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",

            // areaStyle: {normal: {}},
            data: [
              {
                value: [10, 7, 5, 4, 8],
                name: "个人"
              },
              {
                value: [3, 1, 3, 6, 9],
                name: "团队"
              },
              {
                value: [4, 7, 5, 6, 1],
                name: "部门"
              }
            ]
          }
        ]
      };
      let option7 = {
        title: {
          text: "词云图",
         
        },
        tooltip: {},
        series: [
          {
            type: "wordCloud",
            gridSize: 10,
            sizeRange: [8,40],
            rotationRange: [0, 0],
            shape: "circle",
            textStyle: {
              normal: {
                  fontSize:20,
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: [
              {
                name: "上海",
                value: 1000,
                // textStyle: {
                //   normal: {
                //     color: "black"
                //   },
                //   emphasis: {
                //     color: "red"
                //   }
                // }
              },
              {
                name: "定西市",
                value: 618
              },
              {
                name: "克拉玛依市",
                value: 43
              },
              {
                name: "淮安市",
                value: 405
              },
              {
                name: "三亚市",
                value: 246
              },
              {
                name: "惠州市",
                value: 224
              },
              {
                name: "临夏回族自治州",
                value: 289
              },
              {
                name: "广州市",
                value: 248
              },
              {
                name: "苏州市",
                value: 111
              },
              {
                name: "德阳市",
                value: 196
              },
              {
                name: "赣州市",
                value: 184
              },
              {
                name: "海口市",
                value: 158
              },
              {
                name: "海东市",
                value: 255
              },
              {
                name: "百色市",
                value: 550
              },
              {
                name: "株洲市",
                value: 46
              },
              {
                name: "秦皇岛市",
                value: 366
              },
              {
                name: "延安市",
                value: 360
              },
              {
                name: "保山市",
                value: 282
              },
              {
                name: "北京市",
                value: 273
              },
              {
                name: "雅安市",
                value: 265
              },
               {
                name: "日照市",
                value: 36
              },
              {
                name: "攀枝花市",
                value: 282
              },
              {
                name: "资阳市",
                value: 273
              },
              
               {
                name: "株洲市",
                value: 360
              },
              {
                name: "泉州市",
                value: 282
              },
              {
                name: "武汉市",
                value: 273
              },
              {
                name: "长治县",
                value: 265
              },
               {
                name: "资阳市",
                value: 273
              },
              {
                name: "海南藏族自治州",
                value: 265
              },
               {
                name: "株洲市",
                value: 360
              },
              {
                name: "泉州市",
                value: 282
              },
              {
                name: "武汉市",
                value: 273
              },
              {
                name: "长治县",
                value: 265
              },
              {
                name:'海南市',
                value:'100'
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
      myChart4.setOption(option4);
      myChart5.setOption(option5);
      myChart6.setOption(option6);
      myChart7.setOption(option7);
    //   window.addEventListener("resize", () => {
    //     myChart.resize();
    //   });
    //   window.addEventListener("resize", () => {
    //     myChart2.resize();
    //   });
    //   window.addEventListener("resize", () => {
    //     myChart3.resize();
    //   });
    //   window.addEventListener("resize", () => {
    //     myChart4.resize();
    //   });
    //   window.addEventListener("resize", () => {
    //     myChart5.resize();
    //   });
    //   window.addEventListener("resize", () => {
    //     myChart6.resize();
    //   });

      window.onresize = function() {
        myChart.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
        myChart7.resize();
        //myChart1.resize();若有多个图表变动，可多写
      };
    }
  },
  mounted() {
    this.drawChart2();
  }
};
</script>
<style>
</style>
