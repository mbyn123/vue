<template>
  <div id="app">
        <TopHeader/>
        <NavBar/>
        <Container/>
        <Footer/>
  </div>
</template>

<script>

  import TopHeader from "./components/top-header"
  import NavBar from "./components/nav-bar"
  import Container from "./components/container"
  import Footer from "./components/footer"

export default {
  name: 'app',
 components:{
   TopHeader,
   NavBar,
   Container,
   Footer
 }
}
</script>

<style>

</style>
