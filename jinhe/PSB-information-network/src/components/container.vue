<template>
    <div>
        <TopNews/>
        <Banner/>
        <File/>
        <Tab/>
        <Lists/>
        <Asides/>
        <Shop/>
        <Figures/>
        <Navigation/>
    </div>
</template>

<script>

    import TopNews from "./container-component/top-news";
    import Banner from "./banner";
    import File from "./container-component/file";
    import Tab from "./container-component/tab";
    import Lists from "./component/lists";
    import Asides from "./container-component/asides";
    import Shop from "./container-component/shop";
    import Figures from "./container-component/figures";
    import Navigation from "./container-component/navigation";

    export default {
        components: {
            TopNews,
            Banner,
            File,
            Tab,
            Lists,
            Asides,
            Shop,
            Figures,
            Navigation
        }
    };
</script>

<style scoped>
</style>
