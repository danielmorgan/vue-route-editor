<template>
  <div class="App">
    <v-side-nav id="sidebar" fixed>
      <sidebar></sidebar>
    </v-side-nav>

    <div class="MapboxContainer">
      <mapbox :accessToken="env.mapbox.accessToken"></mapbox>
    </div>
  </div>
</template>

<script>
  import env from 'env';
  import store from './vuex/store';
  import Mapbox from './components/Mapbox.vue';
  import Sidebar from './components/Sidebar.vue';

  export default {
    name: 'app',

    store: store,

    components: { Mapbox, Sidebar },

    data () {
      return {
        env: env
      };
    }
  };
</script>

<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
  }

  .App {
    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 0;
  }

  .SidebarContainer {
    position: relative;
    z-index: 1000;
  }

  .MapboxContainer {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
  }
</style>
