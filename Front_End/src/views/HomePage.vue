<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div id="manga_stash_style">
        <body class="app_style_dimension mx-auto">
          <span>
            <h1>Welcome to Manga Stash!</h1>
          </span>
          <div class="test d-flex">
            <div v-for="manga in mangaArray" :key="manga" class="cont" p-4>
              <MangaQuickView :title="manga.title" :image="manga.image" />
            </div>
          </div>
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
import NavBar from "@/components/layout/NavBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import MangaQuickView from "@/components/MangaQuickView.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
    MangaQuickView,
  },
  data() {
    return {
      mangaArray: [
        { title: "Haikyuu", image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Haiky%C5%AB_Volume_1.jpg" },
        { title: "Spy x Family", image: "https://upload.wikimedia.org/wikipedia/en/5/51/Spy_Family_vol_1.jpg" },
        { title: "Hunter x Hunter", image: "https://upload.wikimedia.org/wikipedia/en/e/e8/Hunter_%C3%97_Hunter_vol._1.png" },
      ]
    }
  }
};
</script>

<style>
@import "../../public/css/font.css";
@import "../../public/css/overview_style.css";

.test {
  height: 300px;
}

.cont {
  width: 200px;
}
</style>
