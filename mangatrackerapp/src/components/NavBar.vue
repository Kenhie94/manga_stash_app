<template>
    <section id="header_style" class="d-flex flex-column border border-primary">
      <div class="d-flex justify-content-between">
        <h2>MangaStash</h2>
        <div class="d-flex align-items-center">
          <button class="login_button">Login</button>
          <button class="register_button mx-2">Register</button>
        </div>
      </div>
      <div class="d-flex">
        <button class="btn btn-outline-secondary btn-sm">Manga List</button>
        <button class="btn btn-outline-secondary btn-sm">Add Manga</button>
      </div>
    </section>
</template>

<script>
export default {
  name: 'NavBar',
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
#header_style {
  background-color: white;
}

.login_button {
  width: 3cm;
  height: 30px;
  border: 2px solid black;
  background-color: white;
  color: #352F44;
}

.login_button:hover {
  background-color: #B9B4C7;
}

.register_button {
  width: 3cm;
  height: 30px;
  border: 2px solid black;
  background-color: #352F44;
  color: white;
}

.register_button:hover {
  background-color: #B9B4C7;
}
</style>