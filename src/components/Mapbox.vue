<template>
    <div id="map"></div>
</template>

<script>
    import mapboxgl from 'mapbox-gl';

    export default {
      props: [
        'accessToken'
      ],

      mounted () {
        mapboxgl.accessToken = this.accessToken;

        this.map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v9'
        });
      }
    };
</script>

<style lang="scss">
    #map {
        width: 100%;
        height: 100%;
        min-height: 500px;
    }
</style>
