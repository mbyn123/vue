<template>
    <div>
        <Row>
            <Col span="16" offset="4">
                <div class="message">
                    <div class="title-f" v-for="value in subtitle" :key="value.id">
                        <img :src="value.img" alt="">
                        <span>{{value.title}}</span>
                    </div>
                    <div class="mains">
                        <div class="title" v-for="value in items" :key="value.id">
                            <a href="#" :title=value.title style="font-size:16px">
                                <h1>{{value.title}}</h1>
                            </a>
                        </div>
                        <div class="title-two">
                            <span v-for="value in titles" :key="value.id"><a href="#">{{value.subtitles}}</a> </span>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span="16" offset="4">
                <div class="side">
                    <Row>
                        <Col span="12">
                            <Carousel autoplay v-model="value2" loop>
                                <CarouselItem v-for="value in IPicture" :key="value.id">
                                    <div class="demo-carousel">
                                        <div style="position: relative">
                                            <div>
                                                <img :src=value.img alt="">
                                                <div class="title-san">
                                                    <a href="#">{{value.title}}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </Carousel>
                        </Col>
                        <Col span="12">
                            <div style="padding:20px;margin-left: 10px">
                                <div style="width:95%;padding-bottom:40px;border-bottom: 1px dotted #ccc"
                                     v-for="value in news" :key="value.id">
                                    <div>
                                        <a href="#" style="color:#0071cf;font-size: 22px;font-weight: 600">
                                            {{value.title}}
                                        </a>
                                    </div>
                                    <div style="font-size: 14px;text-indent:2em">
                                        {{value.conter}}
                                        <span style="color:#fb1414;font-size: 10px">{{value.time}}</span>
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
                value2: 0,
                subtitle: [
                    {
                        img: require("../../assets/images/gonggao.png"),
                        title: "泾阳召开 “ 六反十打 ” 第二战役总结暨第三战役动员会",

                    },
                    {
                        img: require("../../assets/images/zhiban.png"),
                        title: "局 领 导： 陈景锋 13892098188    法制大队： 罗建民 13619108966"
                    }
                ],
                IPicture: [
                    {
                         img: require("../../assets/images/1.jpg"),
                        title: "泾阳召开“六反十打”第二战役总结暨第三战役动员会"
                    },
                    {
                        img: require("../../assets/images/2.jpg"),
                        title: "泾阳召开“六反十打”第二战役总结暨第三战役动员会"
                    },
                    {
                        img: require("../../assets/images/1.jpg"),
                        title: "泾阳召开“六反十打”第二战役总结暨第三战役动员会"
                    },
                    {
                        img: require("../../assets/images/2.jpg"),
                        title: "泾阳召开“六反十打”第二战役总结暨第三战役动员会"
                    },
                ],
                titles: [
                    {
                        subtitles: "[我市17家重大火灾隐患单位被挂牌督办]",

                    },
                    {
                        subtitles: "[广州市残联组织四场特殊教育学校开放日]",

                    },
                    {
                        subtitles: "[集团年终贺岁晚会隆重举行 总裁期许集团明天更美好]",

                    },
                    {
                        subtitles: "[更多]",
                    }
                ],
                items: [
                    {
                        title: "习近平在全国网络安全和信息化工作会议上强调",
                    },
                ],
                news: [
                    {
                        title: "泾阳召开“六反十打”第二战役总结暨第三战役动员会",
                        conter: " 6月5日，我县召开“六反十打”第二战役总结暨第三战役专项行动动员会，县委常委、常务副县长王敏，县委常委、宣传部部长张宣朝，县政府党组...",
                        time: "【2018-06-12】"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .side {
        padding-top: 10px;
    }

    .side .title-san {
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        padding: 10px;
        width: 100%;
      
        
    }

    .side img {
        width: 100%;
        height: 406px;
    }

    .side .title-san a {
        color: #fff;
        font-size: 14px;
    }

    a {
        color: #333
    }

    .message {
        border-bottom: 1px dotted #ccc;
        padding: 20px 0;
    }

    .message .title-f {
        margin-left: 10px;
        display: inline-block;
        font-size: 14px;
        color: #333;
    }

    .message .title-f img {
        vertical-align: middle;
        margin-right: 10px;
    }

    .message .title {
        text-align: center;
        padding-top: 38px;
    }

    .message .title a {
        color: #0071cf
    }

    .message .title-two {
        text-align: center;
        margin: 12px 0;
    }

    .message .title-two a {
        margin-right: 5px;
    }
</style>