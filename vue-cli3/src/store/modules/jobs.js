import { fetchJobsList } from '../../api/index.js'

export const jobsStore = { /* options */ 
    namespaced: true,
    state: () => ({
        jobs: [],
    }),
    mutations: {
        SET_JOBS(state, data) {
            state.jobs = data;
        },
    },
    actions: {
        FETCH_JOBS({commit}) {
            fetchJobsList()
            .then(response => commit('SET_JOBS', response.data))
            .catch(err => console.error(err));
        },
    }
};
