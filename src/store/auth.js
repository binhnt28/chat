import { createStore } from 'vuex';
const store = createStore({
    state: {
        isLoggedIn: false,
        _id: null,
        token: null,
    },
    mutations: {
        login(state, data) {
            state.isLoggedIn = true;
            state.token = data.token;
            state._id = data._id;
            localStorage.setItem('token', data.token);
            localStorage.setItem('_id', data._id);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('_id');
        },
    },
    actions: {
        setToken({ commit }, data) {
            commit('login', data);
        },
        clearToken({ commit }) {
            commit('logout');
        },
    },
});
export default store;