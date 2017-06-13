<template>
    <div class="Sidebar">
        <li class="Sidebar__logo">
            Vue Route Editor

        </li>

        <li>
            <a href="#" class="subheader">Routes</a>
        </li>

        <li>
            <div class="divider"></div>
        </li>

        <li>
            <a href="#" v-on:click.prevent="loadTestTrack">
                <i class="material-icons">timeline</i>
                test-track
            </a>
        </li>
    </div>
</template>

<script>
  import localforage from 'localforage';

  export default {
    methods: {
      loadTestTrack () {
        localforage.getItem('test-track').then(data => {
          this.$store.commit('loadTrack', data);
        });
      }
    }
  };
</script>

<style lang="scss">
    .Sidebar {
    }

    .Sidebar__logo {
        font-size: 2em;
        text-align: center;
        margin: 1em 0;
    }
</style>
