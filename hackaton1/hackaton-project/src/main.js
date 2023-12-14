// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Exemple de configuration du routeur dans main.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import login from './components/login.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import PubPage from './components/PubPage.vue';
import test from './components/test.vue';
import register from './components/register.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/register', component: register },
  { path: '/pub', component: PubPage },
  { path: '/login', component: login },
  { path: '/test', component: test },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
