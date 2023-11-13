// *Import*
// Imports all related files into the website
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import axios from 'axios';
import App from './App.vue'
import HomePage from './views/HomePage.vue';
import MangaListPage from './views/MangaListPage.vue'
import AddMangaPage from './views/AddMangaPage.vue';
import CommunityPage from './views/CommunityPage.vue';
import MangaDetailPage from './views/MangaDetailPage.vue'

// *Routes*
// Connecting routing pages
const routes = [
  { path: '/', component: HomePage },
  { path: '/list', component: MangaListPage},
  { path: '/add', component: AddMangaPage },
  { path: '/community', component: CommunityPage },
  { path: '/manga/:id', name: 'Manga', component: MangaDetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app')
