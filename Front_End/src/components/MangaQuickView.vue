<template>
  <div class="quickview-manga">
    <div class="quickview-img">
    </div> <!-- <img class="d-flex" src="../assets/images/Haikyuu.jpg" alt=""> -->
    <h2 class="quickview-title">Haikyuu</h2>
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
.quickview-manga {
  height: 100vh;
}

.quickview-img {
  background: url("../assets/images/Haikyuu.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
}

.quickview-title {
  color: white;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
}
</style>