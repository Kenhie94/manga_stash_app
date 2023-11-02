<template>
	<div>
		<div id="header_style">
			<div class="d-flex flex-column">
				<div class="d-flex justify-content-between align-items-center">
					<router-link to="/" class="title_font"><span style="color: red">M</span>anga<span style="color: red">S</span>tash</router-link>
					<div>
						<button class="login_button">Login</button>
						<button class="register_button mx-2">Register</button>
					</div>
				</div>
			</div>
		</div>
		<div id="menubar_style" class="d-flex justify-content-between">
			<div class="d-flex align-items-center">
        <router-link to="/list" class="menubar_button d-flex align-items-center px-3">Manga List</router-link>
				<router-link to="/add" class="menubar_button d-flex align-items-center px-3">Add Manga</router-link>
				<router-link to="/community" class="menubar_button d-flex align-items-center px-3">Community</router-link>
				<span class="menubar_button d-flex align-items-center px-3">Read</span>
				<span class="menubar_button d-flex align-items-center px-3">Help</span>
			</div>
			<div class="d-flex align-items-center">
				<div>
					<button @click="toggleGenre" class="menubar_genre_style mt-1 mb-1 ms-2">All</button>
					<div v-if="isGenreOpen" class="dropmenu_menu">
						<h1 style="color: white">Hello?</h1>
					</div>
				</div>
				<input type="text" class="menubar_search_style mt-1 mb-1 me-2 border round-3" placeholder="Search Manga, Anime, and more..." />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavBar",
	data() {
		return {
			isGenreOpen: false,
		};
	},
	methods: {
		toggleGenre() {
			this.isGenreOpen = !this.isGenreOpen;
		},
	},
};
</script>

<style scoped>
/* Custom Font Styling */
#menubar_style {
	background-color: black;
}
.title_font {
	font-family: BananaYeti, serif;
	font-size: 2.5rem;
	text-decoration: none;
	color: black;
}

/* Button Styling */
.login_button {
	width: 3cm;
	height: 30px;
	border: 2px solid black;
	background-color: white;
	color: #352f44;
	font-weight: bold;
}

.login_button:hover {
	background-color: #80b3ff;
}

.register_button {
	width: 3cm;
	height: 30px;
	border: 2px solid black;
	background-color: #687eff;
	color: white;
	font-weight: bold;
}

.register_button:hover {
	background-color: #80b3ff;
}

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
