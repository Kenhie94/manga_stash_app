<template>
	<div>
		<h1>{{	$route.params.id }}</h1>
	</div>
</template>

<script>
export default {
	data() {},
	mounted() {
		console.log('Received ID:', this.$route.params.id)
	},
};
</script>

<style>
/* Your component's styles */
</style>
