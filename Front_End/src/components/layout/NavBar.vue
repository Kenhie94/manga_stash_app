<template>
  <div>
    <div id="header_style">
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center">
          <router-link to="/" class="title_font"><span style="color: red">M</span>anga<span
              style="color: red">S</span>tash</router-link>
        </div>
      </div>
    </div>
    <div id="menubar_style" class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <router-link to="/list" class="menubar_button d-flex align-items-center px-3">Manga List</router-link>
        <span @click="showModal('https://www.mangadex.org')" class="read_button d-flex align-items-center px-3">Read</span>
        <span @click="showModal('https://www.crunchyroll.com')" class="read_button d-flex align-items-center px-3">Watch</span>
        <span @click="showModal('https://store.crunchyroll.com')" class="read_button d-flex align-items-center px-3">Buy</span>
        <router-link to="/about" class="menubar_button d-flex align-items-center px-3">About</router-link>
      </div>
      <div class="d-flex align-items-center">
        <div>
          <button class="menubar_genre_style mt-1 mb-1 ms-2">All</button>
        </div>
        <form @submit.prevent="submitUserInput">
          <input v-model="userInput" type="text" class="menubar_search_style mt-1 mb-1 me-2 border round-3"
            placeholder="Search Manga, Anime, and more..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="overlay" :class="{ active: isModalVisible }" @click="hideModal"></div>
    <div v-if="isModalVisible" class="read_modal">
      <div class="d-flex flex-column p-3">
        <h2 class="d-flex p-2">You are about to leave this page</h2>
        <span class="d-flex p-2">A new tab will open to redirect you to MangaDex</span>
        <div class="d-flex justify-content-end p-1">
          <button class="d-flex m-1" style="background-color: red; color: white;" @click="hideModal">Cancel</button>
          <button class="d-flex m-1" style="background-color: green; color: white;" @click="redirectUrl">Leave Page</button>
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
      userInput: '',
      urlLink: '',
      isModalVisible: false,
    };
  },
  methods: {
    submitUserInput() {
      console.log(this.userInput);
      this.$router.push({ name: 'MangaSearch', params: { searchId: this.userInput } });
      this.userInput = '';
    },
    showModal(url) {
      this.isModalVisible = !this.isModalVisible
      this.urlLink = url
    },
    hideModal() {
      this.isModalVisible = false;
      document.removeEventListener('click', this.handleClickOutisde);
    },
    handleClickOutisde(event) {
      if (!this.$refs.modal.contains(event.target)) {
        this.hideModal();
      }
    },
    redirectUrl() {
      window.open(this.urlLink, '_blank');
      this.urlLink = '';
      this.hideModal();
    }
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

.read_button {
  color: white;
  font-weight: bold;
  background-color: black;
  font-size: 15px;
  text-decoration: none;
}

.read_button:hover {
  cursor: pointer;
}

.menubar_search_style {
  width: 15rem;
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

.read_modal {
  position: fixed;
  background: rgb(30, 30, 30);
  color: white;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

.overlay.active {
  display: block;
}
</style>
