<template>
	<div id="app">
		<div class="wrapper">
			<header class="app_style_dimension mx-auto">
				<NavBar />
			</header>
			<div id="manga_stash_style">
				<body class="app_style_dimension mx-auto">
					<div v-if="mangaDetails">
						<h2>{{ mangaDetails[0].attributes.title.en }}</h2>
						<span>{{ mangaDetails[0].attributes.description.en }}</span>
					</div>
					<div v-else>
						<p>Loading manga details...</p>
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
	data() {
		return {
			mangaDetails: null,
		};
	},
	components: {
		NavBar,
		FooterBar,
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
