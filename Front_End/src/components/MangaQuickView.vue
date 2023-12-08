<template>
  <div class="quickview-img d-flex align-items-end" :style="{background: 'url(' + image + ')'}">
    <h2 class="quickview-title mb-0">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MangaQuickView',
  props: {
    title: String,
    image: String
  },
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

.quickview-img {
  /* background: url("../assets/images/Haikyuu.jpg"); */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.quickview-title {
  color: white;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>