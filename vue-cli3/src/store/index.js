import { createStore } from 'vuex'

import { newsStore } from './modules/news.js'
import { askStore } from './modules/ask.js'
import { jobsStore } from './modules/jobs.js'

// import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'
import { fetchUserInfo } from '../api/index.js'

const store = createStore({ /* options */ 
    modules: {
        newsStore,
        askStore,
        jobsStore
    },
    state: {
        userinfo: {},
    },
    mutations: {
        SET_USERINFO(state, userinfo) {
            state.userinfo = userinfo;
        }
    },
    actions: {
        FETCH_USER({ commit }, username) {
            return fetchUserInfo(username)
                .then(response => { 
                    console.log(1)
                    commit('SET_USERINFO', response.data);
                    return response;
                })
                .catch(error => console.log(error));
        }
    }
    // state: {
    //     news: [],
    //     ask: [],
    //     jobs: []
    // },
    // getters: {

    // },
    // mutations: {
    //     SET_NEWS(state, news) {
    //         state.news = news;
    //     },
    //     SET_ASK(state, data) {
    //         state.ask = data;
    //     },
    //     SET_JOBS(state, data) {
    //         state.jobs = data;
    //     },
    // },
    // actions: {
    //     FETCH_NEWS({ commit }) {
    //         fetchNewsList()
    //             .then(response => commit('SET_NEWS', response.data))
    //             .catch(err => console.error(err));
    //     },
    //     FETCH_ASK({commit}) {
    //         fetchAskList()
    //         .then(response => commit('SET_ASK', response.data))
    //         .catch(err => console.error(err));
    //     },
    //     FETCH_JOBS(context) {
    //         fetchJobsList()
    //         .then(response => context.commit('SET_JOBS', response.data))
    //         .catch(err => console.error(err));
    //     },
    // }
});

export default store;