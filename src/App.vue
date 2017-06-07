<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col s12 l3">

        <v-card class="blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              <i class="material-icons">announcement</i>
              Hello World!
            </span>
            <p>I am a very simple v-card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="#">Action</a>
          </div>
        </v-card>

      </div>

      <div class="col s12 l9">

        <v-card>
          <mapbox :accessToken="env.mapbox.accessToken"></mapbox>
        </v-card>

      </div>
    </div>
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
</style>
