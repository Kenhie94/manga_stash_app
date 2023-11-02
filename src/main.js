import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './views/HomePage.vue';
import AddMangaPage from './views/AddMangaPage.vue';
import CommunityPage from './views/CommunityPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/add', component: AddMangaPage },
  { path: '/community', component: CommunityPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app')
