import { createStore } from 'vuex';
import socketIo from '@/socket-io.js';
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
            socketIo.emit('registerUser', data._id);
        },
        logout(state) {
            socketIo.emit('deleteUser', state._id);
            state.isLoggedIn = false;
            state.token = null;
            state._id = null;
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