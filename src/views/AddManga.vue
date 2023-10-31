<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div id="manga_stash_style">
        <div class="app_style_dimension mx-auto">
          <MenuBar />
        </div>
        <body class="app_style_dimension mx-auto">
          <span>Add Manga</span>
        </body>
      </div>
    </div>
    <footer>
      <div class="app_style_dimension mx-auto">
        <FooterBar />
      </div>
    </footer>
  </div>
  <RouterView />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import MenuBar from "../components/MenuBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MenuBar,
    FooterBar
  },
};
</script>

<style>
@import '../../public/css/font.css';
@import '../../public/css/overview_style.css'
</style>
