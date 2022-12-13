import { fetchAskList } from '../../api/index.js'

export const askStore = {
    namespaced: true,
    state: () => ({
        ask: [],
    }),
    mutations: {
        SET_ASK(state, data) {
            state.ask = data;
        },
    },
    actions: {
        FETCH_ASK({commit}) {
            fetchAskList()
            .then(response => commit('SET_ASK', response.data))
            .catch(err => console.error(err));
        },
    }
};