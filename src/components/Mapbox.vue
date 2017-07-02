<template>
    <div id='map' class='Map'>
        <div style='display: none;'>{{ selectedTrack }}</div>
    </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';
  import lineStyles from './lineStyles.json';

  export default {
    props: [
      'accessToken'
    ],

    computed: {
      selectedTrack () {
        return this.$store.state.selectedTrack;
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
        for (const i in this.$store.state.tracks) {
          this.map.addLayer({
            'id': 'track_' + i,
            'type': 'line',
            'source': this.$store.state.tracks[i],
            ...lineStyles.inactive
          });
        }

        this.map.addLayer({
          'id': 'route',
          'type': 'line',
          'source': this.selectedTrack,
          ...lineStyles.active
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
