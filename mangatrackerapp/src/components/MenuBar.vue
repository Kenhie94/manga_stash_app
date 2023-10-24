<template>
	<div id="menubar_style" class="d-flex justify-content-between">
		<div class="d-flex align-items-center">
			<span class="menubar_button d-flex align-items-center px-2">Manga List</span>
			<span class="menubar_button d-flex align-items-center px-2">Add Manga</span>
			<span class="menubar_button d-flex align-items-center px-2">Community</span>
			<span class="menubar_button d-flex align-items-center px-2">Read</span>
			<span class="menubar_button d-flex align-items-center px-2">Help</span>
		</div>
		<div class="d-flex align-items-center">
			<input type="text" class="menubar_search_style m-1 border round-3" placeholder="Search Manga, Anime, and more...">
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuBar",
	data() {
		return {
			// Your data properties here
		};
	},
	methods: {
		// Your methods here
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
	height: 30px;
	font-size: medium;
}

.menubar_search_style {
	width: 25rem;
	border-radius: 5px;
}
</style>
