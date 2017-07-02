import Vuex from 'vuex';
import tracks from '../../test/fixtures/fake-tracks.json';

const state = {
  tracks: tracks,
  selectedTrack: tracks[0]
};

const mutations = {
  loadTracks (state, tracks) {
    state.tracks = [];
    for (const track of tracks) {
      state.tracks.push(track);
    }
  },

  selectTrack (state, index) {
    state.selectedTrack = state.tracks[index];
  }
};

export default new Vuex.Store({ state, mutations });
