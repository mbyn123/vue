<template>
    <div>
        <Row>
            <Col span="16" offset="4">
                <div class="study">
                    <Row>
                        <Col span="8" v-for="value in files"  :key="value.id" >
                            <div class="lists">
                                <div class="top">
                                    <div class="titles"><span>{{value.title}}</span></div>
                                    <div class="wire"></div>
                                    <span class="gd"><img :src=value.img alt=""></span>
                                </div>
                                <div class="lis">
                                    <div>
                                        <div class="wen" v-for="item in content" :key="item.id">
                                            <div>
                                                <img :src=item.img alt=""><span class="con">{{item.title}}</span>
                                            </div>
                                            <div>
                                                <span>{{item.time}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                files: [
                    {
                        title: "学习之窗",
                        img: require("../../assets/images/more.png"),
                    },
                    {
                        title: "学习之窗",
                        img: require("../../assets/images/more.png"),
                    },
                    {
                        title: "学习之窗",
                        img: require("../../assets/images/more.png"),
                    },

                ],
                content: [
                    {
                        title: "乾县纪委深入贯彻十九大精神激发",
                        time: "17-11-28",
                        img: require('../../assets/images/d1.png'),
                    },
                    {
                        title: "乾县纪委创建“学习型廉洁型”机关",
                        time: "17-11-27",
                        img: require('../../assets/images/d1.png'),
                    },
                    {
                        title: "乾县纪委“四盏灯”照贫攻坚路",
                        time: "17-11-26",
                        img: require('../../assets/images/d1.png'),
                    },
                    {
                        title: "乾县纪委持续发力“四风”",
                        time: "17-11-25",
                        img: require('../../assets/images/d1.png'),
                    },
                    {
                        title: "乾县纪委“四个结贯彻十九大精神",
                        time: "17-11-24",
                        img: require('../../assets/images/d1.png'),
                    },
                ],

            }
        }
    }
</script>

<style scoped>


    .study {

        margin-top: 10px;
    }

    .study .lis {
        padding: 10px 10px 10px 0;
    }

    .study .lis .wen {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #333333;
        padding: 10px 10px 5px 0;
    }

    .study .lis .wen .con:hover {
        color: #fff;
        cursor: pointer;
    }

    .study .lis .wen img {
        margin: 0 10px;
    }

    .lists .top {
        display: flex;
        justify-content: space-between;
    }

    .lists .top .titles {
        background-color: #1258AE;
        line-height: 34px;
        text-align: center;
        color: #FFF;
        font-size: 20px;
        font-weight: 600;
        padding: 0 10px;
    }


    .lists .top .wire {
        width: 50%;
        height: 20px;
        border-bottom: 1px solid #ccc

    }

    .lists .top .gd {
        padding-top: 10px;
        margin-right: 10px;
        cursor: pointer;
    }
</style>