<template>
    <div id='map' class='Map'>
        <div style='display: none;'>{{ selectedTrack }}</div>
    </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';

  export default {
    props: [
      'accessToken'
    ],

    computed: {
      selectedTrack () {
        const index = this.$store.state.selectedTrack;
        return this.$store.state.tracks[index];
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
      this.map.getSource('route').setData(this.selectedTrack.data);
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
          source: this.selectedTrack
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
