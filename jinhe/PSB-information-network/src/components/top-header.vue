<template>
    <div>
        <Row>
            <Col span="24" >
                <div class="banner">
                    <Row>
                        <Col offset="4" span="16">
                            <div  class="topNav" >
                                <div style="display: flex;justify-content: space-between;">
                                    <div>
                                        <span class="text">欢迎光临泾河新城公安分局信息网!</span>
                                        <span  class="text" style="margin-left: 10px" >注册 | 登录</span>
                                    </div>
                                    <div class="nav">
                                        <span :key="value.id" class="links" v-for="value in links">
                                            <Icon :type=value.icon class="ico" size="20"/>
                                            {{value.title}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset="4" span="16">
                             <div class="bigimg">
                        <div class="logo">
                            <a href="#">
                                <img alt="" src="../assets/images/logo.png">
                            </a>
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
        data(){
            return{
            
                links:[
                    {
                        title:"手机版",
                        icon:"ios-phone-portrait"

                    },
                    {
                        title:"设为首页",
                        icon:"md-home"

                    },
                    {
                        title:"收藏本站",
                        icon:"ios-star"

                    },
                    {
                        title:"联系我们",
                        icon:"ios-pin"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .topNav{
        padding:7px 0;
        font-size: 14px;
        color:#333;
    }

    .topNav  .text{
        margin-right: 30px;
        cursor: pointer;
    }

    .topNav .nav .ico{
        display: inline-block;
        vertical-align: top;
        margin-left: 5px;
        cursor: pointer;
    }

    .topNav .nav .links{
        margin-left: 20px;
    }
    .banner{
        height:293px;
        background-image: url(../assets/images/topbg.jpg);
    }

    .banner .bigimg{
        background-image: url(../assets/images/logobg.jpg);
        background-repeat: no-repeat;

        height:257px;

    }
    .banner .logo{
        padding-top: 72px;

    }
</style>