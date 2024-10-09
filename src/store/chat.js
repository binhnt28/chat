import { createStore } from "vuex";
const store = createStore({
    state: {
        messages: [],
        messageId: null,
    },
    mutations: {
        fetch(state, messages){
            state.messages = messages
        },
        setMessageId(state, id) {
            state.messageId = id;
        }
    },
    actions: {
        fetchMessage({commit}, messages) {
            commit('fetch', messages)
        },
        updateMessageId({ commit }, id) {
            commit('setMessageId', id);
        }
    }
})

export default store;