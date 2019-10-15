<template>
  <section class="app-main">
    <router-view :key="key"/>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 84px);
  position: relative;
  overflow: hidden;
}
</style>

