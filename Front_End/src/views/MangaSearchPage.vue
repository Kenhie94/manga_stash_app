!<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div class="app_style_dimension mx-auto">
        <body>
          <h1>Multiple Manga Title:</h1>
          <p>Blah blah blah</p>
          <p>Blah blah blah</p>
          <p>Blah blah blah</p>
        </body>
      </div>
    </div>
    <footer>
      <div class="app_style_dimension mx-auto">
        <FooterBar />
      </div>
    </footer>
    <!-- Your Vue template code here -->
  </div>
</template>

<script>
  import NavBar from '@/components/layout/NavBar.vue';
  import FooterBar from '@/components/layout/FooterBar.vue';

export default {
  name: 'MangaSearchPage',
  data() {
    return {
      // Your data properties here
    };
  },
  components: {
    NavBar,
    FooterBar,
  },
  mounted() {
    const apiUrl = 'https://api'
  }
};
</script>

<style scoped>
@import '../../public/css/font.css';
@import '../../public/css/overview_style.css';
/* Your component-specific styles here */
</style>