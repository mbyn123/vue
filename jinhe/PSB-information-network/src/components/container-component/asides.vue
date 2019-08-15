<template>
    <div>

        <Row>
            <Col span="16" offset="4">
                <div class="bannerimg" >
                    <a href="#">
                        <img src="../../assets/images/banner2.jpg">
                    </a>
                </div>
            </Col>
        </Row>
        <Lists/>

    </div>

</template>

<script>
    import Lists from "../../components/component/lists"

    export default {
      
        components: {
            Lists
        }
    }
</script>

<style scoped>
    .bannerimg {
        border: 1px solid #ccc;
        padding: 10px;
    }

    .bannerimg img {
        width: 100%;
    }
</style>