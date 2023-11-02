<template>
	<div id="menubar_style" class="d-flex justify-content-between">
		<div class="d-flex align-items-center">
			<span class="menubar_button d-flex align-items-center px-3">Manga List</span>
      <router-link to="/add" class="menubar_button d-flex align-items-center px-3">Add Manga</router-link>
      <router-link to="/community" class="menubar_button d-flex align-items-center px-3">Community</router-link>
			<span class="menubar_button d-flex align-items-center px-3">Read</span>
			<span class="menubar_button d-flex align-items-center px-3">Help</span>
		</div>
		<div class="d-flex align-items-center">
			<div>
				<button @click="toggleGenre" class="menubar_genre_style mt-1 mb-1 ms-2">All</button>
				<div v-if="isGenreOpen" class="dropmenu_menu">
					<h1 style="color: white;">Hello?</h1>
				</div>
			</div>
			<input type="text" class="menubar_search_style mt-1 mb-1 me-2 border round-3" placeholder="Search Manga, Anime, and more..." />
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuBar",
	data() {
		return {
			// Your data properties here
			isGenreOpen: false
		};
	},
	methods: {
		// Your methods here
		toggleGenre() {
			this.isGenreOpen = !this.isGenreOpen;
		}
	},
};
</script>

<style scoped>
/* Page Styling */
#menubar_style {
	background-color: black;
}

/* Button styling */
.menubar_button {
	color: white;
	font-weight: bold;
	background-color: black;
	font-size: 15px;
  text-decoration: none;
}

.menubar_search_style {
	width: 25rem;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	font-size: small;
}
.menubar_genre_style {
	width: 5rem;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	font-size: small;
}
.dropmenu_menu {
	display: none;
}
  .dropmenu_menu.show {
    display: block;
}
</style>
