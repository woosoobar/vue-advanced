<template>
  <div>
    <div v-for="item in this.$store.state.askStore.ask" v-bind:key="item">{{ item.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js'

export default {
    // data() {
    //     return {
    //         users: []
    //     }
    // },
    created() {
        this.$store.dispatch('askStore/FETCH_ASK');
        // console.log(this);
        // fetchAskList().then(response => {
        //     console.log(this);
        //     this.users = response.data
        // });
    }
}
</script>

<style>

</style>