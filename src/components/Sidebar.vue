<template>
    <div class="Sidebar">
        <div class="Sidebar__logo">
            Vue Route Editor
        </div>

        <FakeTrackLoader />
    </div>
</template>

<script>
  import FakeTrackLoader from './FakeTrackLoader.vue';

  export default {
    components: {
      FakeTrackLoader
    }
  };
</script>

<style lang="scss">
    .Sidebar__logo {
        font-size: 2em;
        text-align: center;
        margin: 1em 0;
    }
</style>
