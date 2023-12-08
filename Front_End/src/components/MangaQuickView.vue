<template>
  <div id="quickview" class="border border-success d-flex justify-content-center">
    <div class="d-flex flex-column">
      <h1 class="d-flex justify-content-center">Title of Manga</h1>
      <img src="../assets/images/Haikyuu.jpg" alt="">
      <p>Manga Description</p>
      <p>Manga Volume Count</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MangaQuickView',
  data() {
    return {
      // Your data properties here
    };
  },
  methods: {
    // Your methods here
  },
};
</script>

<style scoped>
/* Your component-specific styles here */
#quickview {
  max-width: 400px;
}
</style>