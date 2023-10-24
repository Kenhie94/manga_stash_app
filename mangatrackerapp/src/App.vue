<template>
  <div id="manga_stash_style">
    <div id="app_style_dimension" class="mx-auto">
      <NavBar />
    </div>
    <div id="section_style">
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#manga_stash_style {
  background-color: #B9B4C7;
}
#app_style_dimension {
  max-width: 1062px;
}

#section_style {
  background-color: #5C5470;
}
</style>
