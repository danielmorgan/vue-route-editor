import Vuex from 'vuex';

const state = {
  tracks: require('../../test/fixtures/fake-tracks.json'),
  selectedTrack: 0
};

const mutations = {
  loadTracks (state, tracks) {
    state.tracks = [];
    for (const track of tracks) {
      state.tracks.push(track);
    }
  },

  selectTrack (state, index) {
    state.selectedTrack = index;
  }
};

export default new Vuex.Store({ state, mutations });
