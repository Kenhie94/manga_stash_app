<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div id="manga_stash_style">
        <body class="app_style_dimension mx-auto">
          <div v-for="manga in mangaDetails" :key="manga">
            <h1>{{ manga.attributes.title.en }}</h1>
            <!-- <pre>{{ manga }}</pre> -->
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
</template>

<script>
import axios from "axios";
import NavBar from "@/components/layout/NavBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";

export default {
  name: 'MangaDetailPage',
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      mangaDetails: null
    };
  },

  mounted() {
    const apiUrl = "https://api.mangadex.org/manga/";
    const searchTitle = this.$route.params.id;

    axios
      .get(apiUrl, {
        params: {
          title: searchTitle,
        },
      })
      .then(response => {
        this.mangaDetails = response.data.data;
        console.log(response)
        console.log("Manga Details:", this.mangaDetails);
      })
      .catch(error => {
        console.error("Error fetching manga details:", error);
      });
    console.log("Received ID:", this.$route.params.id);
  },
};
</script>

<style>
@import "../../public/css/font.css";
@import "../../public/css/overview_style.css";
</style>
