<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
    </div>
    <body>
      <div>
        <ul class="d-flex">
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
    </body>
    <footer>
      <div class="app_style_dimension mx-auto">
        <FooterBar />
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";

export default {
  name: 'MangaListPage',
  components: {
    NavBar,
    FooterBar,
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

<style>
@import "../../public/css/font.css";
@import "../../public/css/overview_style.css";


</style>