import store from '@/store/auth.js'

export function authGuard (from, to, next) {
    const isLoggin = store.state.isLoggedIn;
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggin) {
        next({name: 'Login'});
    } else if (to.matched.some(record => record.meta.requiresGuest) && isLoggin) {
        next({ name: 'Chat' });
    } else {
        next();
    }
}