<template>
	<div>
		<div id="app_style_dimension" class="mx-auto">
			<NavBar />
		</div>
		<div id="manga_stash_style">
			<div id="app_style_dimension" class="mx-auto">
        <MenuBar />
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MenuBar from "./components/MenuBar.vue";

export default {
	name: "App",
	components: {
    NavBar,
    MenuBar
},
};
</script>

<style>
@import '../public/css/font.css';

#manga_stash_style {
	background-color: #b9b4c7;
}
#app_style_dimension {
	max-width: 1062px;
}

#section_style {
	background-color: #5c5470;
}

</style>
