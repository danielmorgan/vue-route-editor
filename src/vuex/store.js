import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    geojson: {
      type: 'geojson',
      data: {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [-122.48369693756104, 37.83381888486939]
          ]
        }
      }
    }
  },

  mutations: {
    loadTrack (state, geoJsonData) {
      state.geojson.data = geoJsonData;
    }
  }
});
