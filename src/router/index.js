import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/AppLogin.vue';
import Dashboard from '../views/UserDashboard.vue';
import store from '../store'; // Importamos el store para conectar con auth

const routes = [
  { path: '/', redirect: '/login' }, // redirige la raíz hacia login
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guard de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!store.state.auth.user; 
  // Si el usuario no está autenticado y la ruta requiere auth → redirige a login
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
