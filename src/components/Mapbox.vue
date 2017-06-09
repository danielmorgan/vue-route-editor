<template>
    <div id="map" class="mapboxgl-map"></div>
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
    .mapboxgl-map {
        width: 100%;
        height: 100%;
        align-items: stretch;
    }
</style>
