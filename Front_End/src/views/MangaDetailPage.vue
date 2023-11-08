<template>
	<div v-if="mangaDetails">
		<h2>{{ mangaDetails[0].attributes.title.en }}</h2>
		<p>{{	mangaDetails[0].attributes.description.en }}</p>
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
		const apiUrl = 'https://api.mangadex.org/manga/';
		const searchTitle = this.$route.params.id;
	
		axios
			.get(apiUrl, {
				params: {
					title: searchTitle
				}
			})
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
