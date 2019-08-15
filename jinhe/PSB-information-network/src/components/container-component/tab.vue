<template>
    <div>
        <Row>
            <Col span="16" offset="4">
                <div class="bgnav" >
                    <div><img src="../../assets/images/bgan.jpg" alt="" style="width:100%;height:100%"></div>
                    <div class="in">
                        <div class="aniu">
                            <span v-for="value in anius" :key="value.id" style="margin-left: 20px">
                                <a href="#">
                                    <img :src=value.img alt="" style="width:100%">
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span="16" offset="4">
                <div class="lists">
                    <div class="top">
                        <div class="titles">视频中心</div>
                        <div class="tit">/ video</div>
                        <div class="wire"></div>
                        <div class="link">
                            <span v-for="value in items" :key="value.id">{{value.title}}</span>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span="16" offset="4">


                <div style="width:100%;">
                    <!-- Using the slider component -->
                    <slider ref="slider" :options="options">
                        <!-- slideritem wrapped package with the components you need -->
                        <slideritem v-for="item in someList" :key="item.id" :style="item.style" style="width:500px">
                            {{item.html}}
                        </slideritem>
                        <!-- Customizable loading -->
                    </slider>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import {slider, slideritem} from 'vue-concise-slider'

    export default {
        data() {
            return {
            
            
                items: [
                    {
                        title: "动漫",
                    },
                    {
                        title: "公益广告",
                    },
                    {
                        title: "微电影",
                    },
                    {
                        title: "镜头",
                    },
                    {
                        title: "图解",
                    },
                ],
                anius: [
                    {
                       img: require("../../assets/images/bg1.jpg")
                    },
                    {
                       img: require("../../assets/images/bg2.jpg")
                    },
                    {
                      img: require("../../assets/images/bg3.jpg")
                    },
                    {
                       img: require("../../assets/images/bg4.jpg")
                    },
                    {
                        img: require("../../assets/images/bg5.jpg")
                    },
                    {
                       img: require("../../assets/images/bg6.jpg")
                    }
                ],
                someList: [

                    {
                        html: '',
                        style: {
                            'background': '  ',
                            'background-size': 'cover',
                            'width': '266px',
                            'height': '166px',
                            'margin-right': '2%',
                            'font-size': '30px',

                        }
                    },
                    {
                        html: '',
                        style: {
                            'background-image': 'url()',
                            'background-size': 'cover',
                            'width': '266px',
                            'height': '166px',
                            'margin-right': '1%',

                        }
                    },
                    {
                        html: '',
                        style: {
                            'background-image': 'url("http://ptt5and7y.bkt.clouddn.com/1.jpg")',
                            'background-size': 'cover',
                            'width': '266px',
                            'height': '166px',
                            'margin-right': '1%',

                        }
                    },
                    {
                        html: '',
                        style: {
                            'background-image': 'url("")',
                            'background-size': 'cover',
                            'width': '266px',
                            'height': '166px',
                            'margin-right': '1%',

                        }
                    },
                    {
                        html: '',
                        style: {
                            'background-image': 'url("http://ptt5and7y.bkt.clouddn.com/1.jpg")',
                            'background-size': 'cover',
                            'width': '266px',
                            'height': '166px',
                            'margin-right': '1%',

                        }
                    },
                    {
                        html: '',
                        style: {
                            'background-image': 'url("http://ptt5and7y.bkt.clouddn.com/1.jpg")',
                            'background-size': 'cover',
                            'width': '266px',
                            'height': '166px',
                            'margin-right': '1%',

                        }
                    },


                ],
                options: {
                    currentPage: 0,
                    tracking: false,
                    thresholdDistance: 10,
                    //   thresholdTime: 3000,
                    //  infinite: 4,
                    slidesToScroll: 1,
                    loop: true,
                    autoplay: 1000,
                    speed: 600,
                    itemAnimation: true
                }
            }
        },
        components: {
            slider,
            slideritem
        }


    }
</script>

<style scoped>
    .bgnav {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;

    }

    .bgnav .in {
        padding: 20px
    }

    .bgnav .in .aniu {
        display: flex;
    }

    .lists {
        padding-top: 10px;
    }

    .lists .top {
        display: flex;
        justify-content: space-between;
    }

    .lists .top .titles {
        line-height: 34px;
        text-align: center;
        color: #333;
        font-size: 20px;
        font-weight: 600;
        padding: 0 10px;
    }

    .lists .top .wire {
        width: 50%;
        height: 20px;
        border-bottom: 1px solid #ccc;;
    }

    .lists .top .tit {
        font-size: 16px;
        font-weight: 600;;
        color: #CBCBCB;
        padding-top: 5px;


    }

    .lists .top .link span {
        font-size: 14px;
        margin-left: 10px;
        cursor: pointer;
    }

    .lists .top .link span:hover {
        color: #fff
    }
</style>