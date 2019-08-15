<template>
    <div>
        <Row>
            <Col span="16" offset="4">
                <div class="navigations">
                    <div v-for="value in titles" :key="value.id"><img :src=value.img alt=""></div>
                    <div style="width:100%;margin: auto 20px">
                        <Row>
                            <Col span="6">
                                <Select v-model="model18" clearable>
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label
                                        }}
                                    </Option>
                                </Select>
                            </Col>
                            <Col span="6" style="margin: 0 10px">
                                <Select v-model="model19" clearable>
                                    <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{
                                        item.label }}
                                    </Option>
                                </Select>
                            </Col>
                            <Col span="6">
                                <Select v-model="model20" clearable>
                                    <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{
                                        item.label }}
                                    </Option>
                                </Select>
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
                titles: [
                    {
                        img: require("../../assets/images/linkbg.jpg")
                    }
                ],
                cityList: [
                    {
                        value: '全国导航',
                        label: '全国导航'
                    },
                    {
                        value: '公安部',
                        label: '公安部'
                    },
                    {
                        value: '北京',
                        label: '北京'
                    },
                ],
                model18: '全国导航',
                cityList2: [
                    {
                        value: '省内导航',
                        label: '省内导航'
                    },
                    {
                        value: '咸阳',
                        label: '咸阳'
                    },
                    {
                        value: '西安',
                        label: '西安'
                    },
                ],
                model19: '省内导航',
                cityList3: [
                    {
                        value: '市内导航',
                        label: '市内导航'
                    },
                    {
                        value: '市局',
                        label: '市局'
                    },
                    {
                        value: '渭城',
                        label: '渭城'
                    },
                ],
                model20: '市内导航'
            }
        },

    }
</script>

<style scoped>
    .navigations {
        border: 1px solid #ccc;
        display: flex;
        height: 50px;
        background: url("../../assets/images/linkbg2.jpg") no-repeat right;


    }


</style>