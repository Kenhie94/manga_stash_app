<template>
  <div id="app">
    <div class="wrapper">
      <header class="app_style_dimension mx-auto">
        <NavBar />
      </header>
      <div id="manga_stash_style">
        <div class="app_style_dimension mx-auto">
          <MenuBar />
        </div>
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
import MenuBar from "../components/MenuBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MenuBar,
    FooterBar
  },
};
</script>

<style>
@import '../../public/css/font.css';

body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

footer {
  background-color: #687EFF;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#manga_stash_style {
  background-color: #A0E9FF;
}

.app_style_dimension {
  max-width: 1062px;
}

.wrapper {
  flex: 1;
}
</style>
