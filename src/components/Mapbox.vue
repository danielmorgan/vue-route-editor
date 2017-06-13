<template>
    <div id='map' class='Map'>
        <div style='display: none;'>{{ geojson }}</div>
    </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';

  export default {
    props: [
      'accessToken'
    ],

    computed: {
      geojson () {
        return this.$store.state.geojson;
      }
    },

    mounted () {
      mapboxgl.accessToken = this.accessToken;

      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-122.486, 37.829],
        zoom: 14
      });

      this.map.on('load', this.prepareLayers.bind(this));
    },

    updated () {
      this.map.getSource('route').setData(this.geojson.data);
    },

    methods: {
      prepareLayers () {
        this.map.addLayer({
          'id': 'route',
          'type': 'line',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#396eda',
            'line-width': 5
          },
          source: this.geojson
        });
      }
    }
  };
</script>

<style lang='scss'>
    .Map {
        width: 100%;
        height: 100%;
        align-items: stretch;
    }

    .mapboxgl-canvas:focus {
        outline: none;
    }
</style>
