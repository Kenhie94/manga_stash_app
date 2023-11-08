<template>
	<div v-if="mangaDetails">
		<h2>{{ mangaDetails.attributes.title.en }}</h2>
	</div>
	<div v-else>
		<p>Loading manga details...</p>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			mangaDetails: null,
		}
	},
	mounted() {
		const mangaId = this.$route.params.id; // Replace 'YOUR_MANGA_ID' with the ID of the manga you want to fetch
		axios
			.get(`https://api.mangadex.org/manga/${mangaId}`)
			.then(response => {
				this.mangaDetails = response.data.data;
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
/* Your component's styles */
</style>

// 1ee97895-4796-4bcf-bcd1-5ef99c011f8b
