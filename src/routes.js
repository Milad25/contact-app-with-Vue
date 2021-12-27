import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AddPage from './pages/AddPage.vue';

const routes = [
  { path: '/add/:id', component: AddPage },
  { path: '/add', component: AddPage },
  { path: '/', component: HomePage },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;
