<template>
  <div>
    <Banner />
    <NewsInformation />
    <Publicity/>
    <SilhouettePicture/>
  </div>
</template>

<script>
import Banner from "./main-content-template/Banner";
import NewsInformation from "./main-content-template/NewsInformation";
import Publicity from "./main-content-template/Publicity"
import SilhouettePicture from "./main-content-template/SilhouettePicture"
export default {
  components: {
    Banner,
    NewsInformation,
    Publicity,
    SilhouettePicture
  }
};
</script>

<style>
</style>
