<template>
  <div id="footerbar_style" class="d-flex justify-content-between">
    <div class="d-flex align-items-center">
      <div class="title_footer">©<span style="color: red">M</span>anga<span style="color: red">S</span>tash</div>
    </div>
    <div class="d-flex align-items-center">
      <span>Links</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
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
#footerbar_style {
  color: white;
  font-weight: bold;
}

.title_footer {
  font-family: BananaYeti, serif;
  font-size: 2.5rem;
}
</style>