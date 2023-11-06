<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div id="manga_stash_style">
        <body class="app_style_dimension mx-auto">
          <span>
            <MiniMangaDisplayVue />
          </span>
          <span>
            {{ data }}
          </span>
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
import NavBar from "../components/layout/NavBar.vue";
import FooterBar from "../components/layout/FooterBar.vue";
import MiniMangaDisplayVue from "../components/MiniMangaDisplay.vue";
import {displayDB} from "../services/mangadexService"

export default {
  name: "App",
  components: {
    NavBar,
    MiniMangaDisplayVue,
    FooterBar,
  },
  data() {
    return {
      data: ""
    };
  },
  mounted() {
    this.data = displayDB();
  }
};
</script>

<style>
@import '../../public/css/font.css';
@import '../../public/css/overview_style.css';
</style>
