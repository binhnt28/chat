import { createStore } from 'vuex';

const store = createStore({
    state: {
        isLoggedIn: false,
        token: null,
    },
    mutations: {
        login(state, token) {
            state.isLoggedIn = true;
            state.token = token;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit('login', token);
        },
        clearToken({ commit }) {
            commit('logout');
        },
    },
});
export default store;