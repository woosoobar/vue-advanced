import { fetchNewsList } from '../../api/index.js'

export const newsStore = {
    namespaced: true,
    state: () => ({
        news: [],
    }),
    getters: {
        news(state) {
            return state.news
        }
    },
    mutations: {
        SET_NEWS(state, data) {
            state.news = data;
        },
    },
    actions: {
        FETCH_NEWS({commit}) {
            fetchNewsList()
            .then(response => {
                commit('SET_NEWS', response.data)
            })
            .catch(err => console.error(err));
        },
    }
}