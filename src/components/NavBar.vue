<template>
	<div id="header_style">
		<div class="d-flex flex-column">
			<div class="d-flex justify-content-between align-items-center">
				<router-link to="/" class="title_font"><span style="color: red;">M</span>anga<span style="color: red;">S</span>tash</router-link>
				<div>
					<button class="login_button">Login</button>
					<button class="register_button mx-2">Register</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavBar",
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

/* Custom Font Styling */
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
	background-color: #80B3FF;
  }

.register_button {
	width: 3cm;
	height: 30px;
	border: 2px solid black;
	background-color: #687EFF;
	color: white;
  font-weight: bold;
}

.register_button:hover {
	background-color: #80B3FF;
}
</style>
