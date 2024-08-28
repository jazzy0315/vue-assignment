import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { useAuthStore } from '@/stores/authStore.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:id',
            component: HomeView,
            beforeEnter: (to, from, next) => {
                const authStore = useAuthStore();
                if (authStore.isAuthenticated()) {
                    next();
                } else {
                    next('/');
                }
            },
        },
        {
            path: '/',
            component: LoginView,
        },
        {
            path: '/register',
            component: RegisterView,
        },
        {
            path: '/:catchAll(.*)',
            component: NotFoundView,
        }
    ],
});

export default router;
