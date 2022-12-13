<template>
  <div>
    <div v-for="item in this.$store.state.jobsStore.jobs" v-bind:key="item">{{ item.title }}</div>
  </div>
</template>

<script>

// import { fetchJobsList } from '../api/index.js'

export default {
    // data() {
    //     return {
    //         users: []
    //     }
    // },
    created() {
        this.$store.dispatch('jobsStore/FETCH_JOBS');
        // console.log(this);
        // fetchJobsList().then(response => {
        //     console.log(this);
        //     this.users = response.data
        // });
    }
}
</script>

<style>

</style>