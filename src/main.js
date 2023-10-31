import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './views/Home.vue';
import AddManga from './views/AddManga.vue';
import Community from './views/Community.vue';

const routes = [
  { path: '/', component: Home},
  { path: 'Add', component: AddManga},
  { path: 'Community', component: Community}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app')
