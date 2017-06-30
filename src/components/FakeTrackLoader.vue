<template>
    <div class="TrackLoader">
        <ul>
            <li>
                <a href="#" class="subheader">Routes</a>
            </li>

            <li>
                <div class="divider"></div>
            </li>

            <li v-for="(track, index) in tracks">
                <a href="#" v-on:click.prevent="selectTrack(index)">
                    <i class="material-icons">timeline</i>
                    Track {{ index }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
      computed: {
        tracks () {
          return this.$store.state.tracks;
        }
      },

      methods: {
        selectTrack (index) {
          this.$store.commit('selectTrack', index);
        }
      }
    };
</script>
