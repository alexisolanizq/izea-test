import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { userToken } from '@/helpers/constants';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/pages/Error404.vue')
        },
        MainRoutes,
        AuthRoutes
    ]
});

router.beforeEach((to, from, next) => {
    const needsAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = userToken ?? null

    if(!needsAuth && to.name !== 'Login' && isAuthenticated ) return next({name: 'Dashboard'})
    if (needsAuth && !isAuthenticated) return next({name: 'Login'}) 
    next()
})

export default router