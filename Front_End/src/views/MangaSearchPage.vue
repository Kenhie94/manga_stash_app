<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div id="manga_stash_style">
        <body class="app_style_dimension mx-auto">
          <h1 class="d-flex justify-content-center">Related Search of: {{ upperCase(searchTitle) }}</h1>
          <div v-for="manga in mangaDetails" :key="manga">
            <span>{{ manga.attributes.title.en }}</span>
          </div>
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
import axios from 'axios';

export default {
  name: 'MangaSearchPage',
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      mangaDetails: null,
      searchTitle: "",
    };
  },
  methods: {
    upperCase(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  },
  mounted() {
    const apiUrl = 'https://api.mangadex.org/manga/';
    const searchTitle = this.$route.params.searchId

    this.searchTitle = searchTitle;

    axios
      .get(apiUrl, {
        params: {
          title: searchTitle,
        },
      })
      .then(response => {
        this.mangaDetails = response.data.data;
        console.log(response)
        console.log('Manga Details:', this.mangaDetails);
      })
      .catch(error => {
        console.log('Error fetching manga list:', error);
      });
      console.log('Received ID:', this.$route.params.searchId);
  },
};
</script>

<style scoped>
@import '../../public/css/font.css';
@import '../../public/css/overview_style.css';
</style>