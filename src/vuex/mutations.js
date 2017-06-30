export default {
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
