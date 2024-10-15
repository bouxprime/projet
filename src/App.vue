<template>
  <div id="app">
    <LoadingScreen v-if="showLoadingScreen" @loading-complete="loadingComplete" />
    <AppNavbar />
    <router-view/>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script>
import AppNavbar from './components/utilities/AppNavbar.vue'
import AppFooter from './components/utilities/AppFooter.vue'
import ScrollToTop from './components/utilities/ScrollToTop.vue'
import LoadingScreen from './components/utilities/LoadingScreen.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    ScrollToTop,
    LoadingScreen,
  },
  data() {
    return {
      showLoadingScreen: true,
    };
  },
  methods: {
    loadingComplete() {
      this.showLoadingScreen = false;
    },
  },
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Ensure padding and border are included in element's total width and height */
}
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

</style>
