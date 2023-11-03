<template>
  <div>
    <p v-if="mangaData"> {{ mangaData }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      mangaData: null
    };
  },
  mounted() {
    this.fetchMangaData();
  },
  methods: {
    async fetchMangaData() {
      try {
        const response = await axios.get('https://api.mangadex.org/manga'); // Example endpoint
        this.mangaData = response.data;
        console.log(this.mangaData); // Log the retrieved data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>