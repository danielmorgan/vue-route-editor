<template>
    <div class="TrackLoader">
        <ul>
            <li>
                <a href="#" class="subheader">Tracks</a>
            </li>

            <li>
                <div class="divider"></div>
            </li>

            <li v-for="(track, index) in tracks"
                v-bind:class="{ active: isActive(index) }">
                <a href="#" v-on:click.prevent="selectTrack(index)">
                    <i class="material-icons">timeline</i>
                    Track {{ index }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import localforage from 'localforage';

    export default {
      computed: {
        tracks () {
          return this.$store.state.tracks;
        },

        selectedTrack () {
          return this.$store.state.selectedTrack;
        }
      },

      methods: {
        selectTrack (index) {
          this.$store.commit('selectTrack', index);
          localforage.setItem('editing', this.$store.state.selectedTrack);
        },

        isActive (index) {
          return this.tracks[index] === this.selectedTrack;
        }
      }
    };
</script>
