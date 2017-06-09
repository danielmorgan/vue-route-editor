<template>
  <div class="App">
      <v-side-nav id="sidebar" fixed>
        <sidebar></sidebar>
      </v-side-nav>
      <!--<sidebar></sidebar>-->

    <div class="MapboxContainer">
      <mapbox :accessToken="env.mapbox.accessToken"></mapbox>
    </div>
  </div>
</template>

<script>
  import env from 'env';
  import Mapbox from './components/Mapbox.vue';
  import Sidebar from './components/Sidebar.vue';

  export default {
    name: 'app',

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
    display: flex;
    position: relative;
    z-index: 100;
    height: 100%;
  }
</style>
