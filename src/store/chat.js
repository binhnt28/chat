import { createStore } from "vuex";
const store = createStore({
    state: {
        messages: [],
        messageId: null,
    },
    mutations: {
        fetch(state, messages){
            state.messages = messages
        }
    },
    actions: {
        fetchMessage({commit}, messages) {
            commit('fetch', messages)
        }
    }
})

export default store;