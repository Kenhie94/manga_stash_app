<template>
  <div>
    <div v-if="mangaDetails">
      <h2>{{ mangaDetails.attributes.title.en }}</h2>
      <p>{{ mangaDetails.attributes.description.en }}</p>
      <pre>{{ mangaDetails }}</pre>
    </div>
    <div v-else>
      <p>Loading manga details...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      mangaDetails: null
    };
  },
  mounted() {
    const mangaId = '1ee97895-4796-4bcf-bcd1-5ef99c011f8b'; // Replace 'YOUR_MANGA_ID' with the ID of the manga you want to fetch
    axios.get(`https://api.mangadex.org/manga/${mangaId}`)
      .then(response => {
        this.mangaDetails = response.data.data;
        console.log('Manga Details:', this.mangaDetails);
      })
      .catch(error => {
        console.error('Error fetching manga details:', error);
      });
  }
};
</script>

<style>
/* Your component's styles */
h1 {
  color: #333;
}
h2 {
  color: #666;
}
</style>
