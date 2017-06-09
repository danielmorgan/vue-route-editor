<template>
  <div id="app">
    <mapbox :accessToken="env.mapbox.accessToken"></mapbox>
  </div>
</template>

<script>
  import env from 'env';
  import Mapbox from './components/Mapbox.vue';

  export default {
    name: 'app',

    components: { Mapbox },

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

  #app {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
