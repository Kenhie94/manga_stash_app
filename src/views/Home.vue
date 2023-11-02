<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div id="manga_stash_style">
        <body class="app_style_dimension mx-auto">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus ipsa porro odio quam? Fugiat
            placeat id expedita, dolore consectetur soluta, quaerat amet dolorem voluptate porro perferendis, eligendi
            eaque illum.</span>
        </body>
      </div>
    </div>
    <footer>
      <div class="app_style_dimension mx-auto">
        <FooterBar />
      </div>
    </footer>
  </div>
  <RouterView />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar
  },
};
</script>

<style>
@import '../../public/css/font.css';
@import '../../public/css/overview_style.css'
</style>
