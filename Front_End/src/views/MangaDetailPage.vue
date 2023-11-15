<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div id="manga_stash_style">
        <body class="app_style_dimension mx-auto">
          <div v-if="mangaDetails">
            <h1 class="d-flex">Title: {{ mangaDetails.attributes.title.en }}</h1>
            <img class="d-flex ms-5" :src="coverURL" alt="Manga Cover" v-if="coverURL" />
            <span>Description: {{ mangaDetails.attributes.description.en }}</span>
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
      mangaDetails: null,
      coverURL: null,
    };
  },
  mounted() {
    const apiUrl = "https://api.mangadex.org/manga/";
    const searchId = this.$route.params.id;

    axios
      .get(`${apiUrl}${searchId}`)
      .then(response => {
        console.log(response.data.data.relationships);
        // const coverURL = response.data.data.relationships.find(rel => rel.type === "cover_art").fileName
        const coverURL = '5bb594c8-9551-4b35-9912-4541400a1067.jpg';
        this.mangaDetails = response.data.data;
        this.coverURL = `https://mangadex.org/covers/${searchId}/${coverURL}`;
        console.log('Cover Image URL:', this.coverURL);
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

img {
  width: 200px;
  height: 284.766px;
}
</style>
