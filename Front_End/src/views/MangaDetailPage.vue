<template>
	<div id="app">
		<div class="wrapper">
			<header class="app_style_dimension mx-auto">
				<NavBar />
			</header>
			<div id="manga_stash_style">
				<body class="app_style_dimension mx-auto">
					<div v-if="mangaDetails">
						<div class="d-flex p-3">
							<img class="d-flex" :src="coverUrlId" alt="Manga Cover" v-if="coverUrlId" />
							<div class="d-flex flex-column">
								<h1 class="d-flex ps-4">{{ mangaDetails.attributes.title.en }}</h1>
								<h2 class="d-flex ps-4" v-for="manga in mangaDetails.attributes.altTitles" :key="manga">{{ manga.en }}</h2>
								<button class="btn btn-success m-4" @click="saveManga">Save to DB</button>
							</div>
						</div>
						<span class="d-flex ps-3">Description: {{ mangaDetails.attributes.description.en }}</span>
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
	name: "MangaDetailPage",
	components: {
		NavBar,
		FooterBar,
	},
	data() {
		return {
			mangaDetails: null,
			coverUrlId: null,
		};
	},
	mounted() {
		const apiUrl = "https://api.mangadex.org/";
		const searchId = this.$route.params.id;

		axios
			.get(`${apiUrl}/manga/${searchId}`)
			.then(response => {
				const coverURL = response.data.data.relationships.find(rel => rel.type === "cover_art").id;

				axios
					.get(`${apiUrl}/cover/${coverURL}`)
					.then(response => {
						console.log(response.data.data.attributes.fileName);
						const coverUrlId = response.data.data.attributes.fileName;
						this.coverUrlId = `https://mangadex.org/covers/${searchId}/${coverUrlId}`;
					})
					.catch(error => {
						console.log("Error fetching manga cover art", error);
					});
				this.mangaDetails = response.data.data;
				console.log("Manga Details:", this.mangaDetails);
			})
			.catch(error => {
				console.error("Error fetching manga details:", error);
			});
		console.log("Received ID:", this.$route.params.id);
	},
	methods: {
    async saveManga() {
      try {
        // Fetch manga details (replace this with your actual API call)
        const mangaDetails = await this.fetchMangaDetails();

        // Send manga details to your backend
        await axios.post('http://localhost:3000/api/manga', mangaDetails);

        alert('Manga details saved successfully');
      } catch (error) {
        console.error('Error saving manga details:', error);
        alert('Failed to save manga details');
      }
    },
    async fetchMangaDetails() {
      // Implement your logic to fetch manga details here
      // Example:
      return {
        type: 'Manga Title',
        title: 'Manga Author',
        // Add other details here
      };
    },
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
