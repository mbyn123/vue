<template>
    <div>

        <Row>
            <Col span="16" offset="4">
                <div class="lists">
                    <div class="top" v-for="value in titles" :key="value.id">
                        <div class="titles">{{value.title}}</div>
                        <div class="tit">{{value.title2}}</div>
                        <div class="wire"></div>
                        <div class="gd"><img :src=value.img alt=""></div>
                    </div>
                    <div class="conter">
                        <div class="ins">
                            <Row>
                                <div class="table" v-for="value in tabs" :key="value.id">
                                    <Col span="8">
                                        <div class="li">{{value.title1}}</div>
                                    </Col>
                                    <Col span="3">
                                        <div>{{value.title2}}</div>
                                    </Col>
                                    <Col span="2">
                                        <div class="li">{{value.title3}}</div>
                                    </Col>
                                    <Col span="3">
                                        <div class="li">{{value.title4}}</div>
                                    </Col>
                                    <Col span="3">
                                        <div class="li">{{value.title5}}</div>
                                    </Col>
                                    <Col span="3">
                                        <div class="li">{{value.title6}}</div>
                                    </Col>
                                    <Col span="2">
                                        <div class="li">{{value.title7}}</div>
                                    </Col>
                                </div>
                            </Row>
                            <Row>
                                <div class="tables" v-for="value  in tables" :key="value.id">
                                    <Col span="1">
                                        <div class="li"><img :src=value.img alt=""></div>
                                    </Col>
                                    <Col span="7">
                                        <div class="li">{{value.title1}}</div>
                                    </Col>
                                    <Col span="3">
                                        <div class="li">{{value.title2}}</div>
                                    </Col>
                                    <Col span="2">
                                        <div class="li">{{value.title3}}</div>
                                    </Col>
                                    <Col span="3">
                                        <div class="li">{{value.title4}}</div>
                                    </Col>
                                    <Col span="3">
                                        <div class="li">{{value.title5}}</div>
                                    </Col>
                                    <Col span="3">
                                        <div class="li">{{value.title6}}</div>
                                    </Col>
                                    <Col span="2">
                                        <div class="li"><a href="#"><img class="i" :src=value.img2 alt="">{{value.title7}}</a>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </div>
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
                tables: [
                    {
                        img: require("../../assets/images/txt.png"),
                        title1: "关于开展互联网上网服务营业场所集中清查行动的通知",
                        title2: "网安大队",
                        title3: "查看",
                        title4: "2018年6月14",
                        title5: "签到中",
                        title6: "已签6单位",
                        img2: require("../../assets/images/qstb.gif"),
                        title7: '我要签到'
                    },
                    {
                        img: require("../../assets/images/txt.png"),
                        title1: "关于开展互联网上网服务营业场所集中清查行动的通知",
                        title2: "网安大队",
                        title3: "查看",
                        title4: "2018年6月14",
                        title5: "签到中",
                        title6: "已签6单位",
                       img2: require("../../assets/images/qstb.gif"),
                        title7: '我要签到'
                    },
                    {
                        img: require("../../assets/images/txt.png"),
                        title1: "关于开展互联网上网服务营业场所集中清查行动的通知",
                        title2: "网安大队",
                        title3: "查看",
                        title4: "2018年6月14",
                        title5: "签到中",
                        title6: "已签6单位",
                       img2: require("../../assets/images/qstb.gif"),
                        title7: '我要签到'
                    },
                    {
                        img: require("../../assets/images/txt.png"),
                        title1: "关于开展互联网上网服务营业场所集中清查行动的通知",
                        title2: "网安大队",
                        title3: "查看",
                        title4: "2018年6月14",
                        title5: "签到中",
                        title6: "已签6单位",
                        img2: require("../../assets/images/qstb.gif"),
                        title7: '我要签到'
                    },
                    {
                       img: require("../../assets/images/txt.png"),
                        title1: "关于开展互联网上网服务营业场所集中清查行动的通知",
                        title2: "网安大队",
                        title3: "查看",
                        title4: "2018年6月14",
                        title5: "签到中",
                        title6: "已签6单位",
                         img2: require("../../assets/images/qstb.gif"),
                        title7: '我要签到'
                    },
                ],
                tabs: [
                    {
                        title1: "文章标题",
                        title2: "发文单位",
                        title3: "需签单位",
                        title4: "发文时间",
                        title5: "签收状态",
                        title6: "签收情况",
                        title7: "签收",
                    }
                ],
                titles: [
                    {
                        title: "签收文件列表",
                        title2: "/ To sign for the file list",
                       img: require("../../assets/images/more.png"),
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    a {
        color: #333
    }

    .lists .conter {
        border: 1px solid #ccc;
        padding: 10px 5px;

    }


    .lists .conter .ins .table {
        display: flex;
        font-size: 14px;
        color: #333;
        text-align: center;
        background-color: #F8F8F8;
    }

    .lists .conter .ins .tables {
        display: flex;
        font-size: 14px;
        color: #333;
        text-align: center;
    }

    .conter .ins .table .li {
        padding: 7px 0;
        border: 1px solid #F3F3F3;
    }

    .conter .ins .tables .li {
        padding: 6px 0;
        border: 1px solid #F3F3F3;
    }

    .conter .ins .tables .li .i {
        display: inline-block;
        vertical-align: middle;
    }

    .lists {
        padding-top: 10px;
    }

    .lists .top {
        display: flex;
        justify-content: space-between;

        padding-bottom: 10px;
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
        border-bottom: 1px solid #ccc;;


    }

    .lists .top .gd {
        padding-top: 10px;
        margin-right: 10px;
        cursor: pointer;
    }

    .lists .top .tit {
        font-size: 16px;
        font-weight: 600;
        color: #CBCBCB;
        padding-top: 10px;

    }
</style>