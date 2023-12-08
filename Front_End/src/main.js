// *Import*
// Imports all related files into the website
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import axios from 'axios';
import App from './App.vue'
import HomePage from './views/HomePage.vue';
import MangaListPage from './views/MangaListPage.vue'
import AboutPage from './views/AboutPage.vue'
import MangaSearchPage from './views/MangaSearchPage';
import MangaDetailPage from './views/MangaDetailPage.vue';
import TestingPage from './views/TestingPage.vue'

// *Routes*
// Connecting routing pages
const routes = [
  { path: '/', component: HomePage },
  { path: '/list', component: MangaListPage},
  { path: '/about', component: AboutPage},
  { path: '/manga/:searchId', name: 'MangaSearch', component: MangaSearchPage },
  { path: '/manga/:id', name: 'MangaDetail', component: MangaDetailPage },
  { path: '/test', name: 'TestingPage', component: TestingPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app')
