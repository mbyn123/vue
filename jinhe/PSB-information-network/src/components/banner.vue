<template>
    <div>

        <Row>
            <Col offset="4" span="16">
                <div style="padding-top: 10px">
                    <div class="banners">
                        <div :key="value.id" v-for="value in banner">
                            <img :src=value.img alt="">
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col offset="4" span="16">
                <Row>
                    <div class=" carousel">
                        <Col :key="value.id" span="2" v-for="value in titles">
                            <div><img :src=value.img alt=""></div>
                        </Col>
                        <Col span="22">
                            <div class="list">
                                <div style="width:100%;position: relative">
                                    <slider :options="options" ref="slider">
                                        <slideritem :key="item.id" :style="item.style" style="width:500px"
                                                    v-for="item in someList">{{item.html}}
                                        </slideritem>
                                    </slider>
                                    <span @click=" slide " class="btn-left"><Icon size="30"
                                                                                  type="ios-arrow-back"/></span>
                                    <span @click=" slideNext " class="btn-right"><Icon size="30"
                                                                                       type="ios-arrow-forward"/></span>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Col>
        </Row>

    </div>
</template>

<script>
    import {slider, slideritem} from 'vue-concise-slider'

    export default {
        data() {
            return {
                titles: [
                    {
                        img: require("../assets/images/zhuanti.jpg")
                    }
                ],
                banner: [
                    {
                        img: require("../assets/images/banner1.jpg")
                    }
                ],
                someList: [

                    {
                        html: '',
                        style: {
                            'background':'url("../assets/images/banner1.jpg") ',
                            'background-size': 'cover',
                            'width': '176px',
                            'height': '73px',
                            'margin-right': '2%',
                            'font-size': '30px',
                            'cursor': 'pointer'
                        }
                    },
                    {
                        html: '',
                        style: {
                            'background': '',
                            'background-size': 'cover',
                            'width': '176px',
                            'height': '73px',
                            'margin-right': '1%',
                            'cursor': 'pointer'
                        }
                    },
                    {
                        html: '',
                        style: {
                            'background': 'url("http://ptt5and7y.bkt.clouddn.com/z1.jpg") ',
                            'background-size': 'cover',
                            'width': '176px',
                            'height': '73px',
                            'margin-right': '2%',
                            'font-size': '30px',
                            'cursor': 'pointer'
                        }
                    },
                    {
                        html: '',
                        style: {
                            'background-image': 'url("http://ptt5and7y.bkt.clouddn.com/z2.jpg")',
                            'background-size': 'cover',
                            'width': '176px',
                            'height': '73px',
                            'margin-right': '1%',
                            'cursor': 'pointer'
                        }
                    },
                    {
                        html: '',
                        style: {
                            'background': 'url("http://ptt5and7y.bkt.clouddn.com/z1.jpg") ',
                            'background-size': 'cover',
                            'width': '176px',
                            'height': '73px',
                            'margin-right': '2%',
                            'font-size': '30px',
                            'cursor': 'pointer'
                        }
                    },
                    {
                        html: '',
                        style: {
                            'background-image': 'url("http://ptt5and7y.bkt.clouddn.com/z2.jpg")',
                            'background-size': 'cover',
                            'width': '176px',
                            'height': '73px',
                            'margin-right': '1%',
                            'cursor': 'pointer'
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
                    autoplay: 3000,
                    speed: 600,
                    itemAnimation: true

                }
            }
        },
        components: {
            slider,
            slideritem
        },
        methods: {
            slideNext() {
                this.$refs.slider.$emit('slideNext')
            },
            slide() {
                this.$refs.slider.$emit('slidePre')
            }

        }
    }
</script>

<style scoped>

    .carousel .list .btn-left {
        position: absolute;
        top: 30%;
        left: -30px;
        cursor: pointer;
    }

    .carousel .list .btn-right {
        position: absolute;
        top: 30%;
        right: -30px;
        cursor: pointer;
    }

    .banners {
        border: 1px solid #ccc;
        padding: 10px 10px 5px 10px;
    }

    .banners img {
        width: 100%;
    }

    .carousel {
        display: flex;
    }

    .carousel .list {
        width: 100%;
        padding: 0 20px;
        padding-top: 10px;
    }
</style>
