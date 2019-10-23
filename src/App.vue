<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'
export default {
  name: 'app',
  components: { Footer, Header }
}
</script>

<style lang="scss">
</style>
