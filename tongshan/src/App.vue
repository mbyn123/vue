<template>
  <div id="app">
    <TopHeader/>
    <MainContent/>
    <Footer/>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader"
import MainContent from "./components/MainContent"
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
   TopHeader,
   MainContent,
   Footer
  }
}
</script>

<style>

</style>
