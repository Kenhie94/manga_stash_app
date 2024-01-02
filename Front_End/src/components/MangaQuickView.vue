<template>
  <div class="quickview-img d-flex align-items-end" :style="{ background: 'url(' + image + ')' }">
    <h2 class="quickview-title m-1">{{ title }}</h2>
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
h2 {
  font-size: 20px;
}
.quickview-img {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover !important; 
  height: 100%;
  width: 100%;
}
.quickview-title {
  color: #e0e0e0;
  
}

</style>