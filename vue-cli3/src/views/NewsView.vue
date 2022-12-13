<template>
  <div>
    <!-- <div v-for="item in this.$store.state.newsStore.news" v-bind:key="item">{{ item.title }}</div> -->

    <table>
      <tr v-for="item in news" v-bind:key="item">
        <td>
          <span class="poinsts">{{ item.points }}</span>
        </td>
        <td>
          <!-- <span class=""><a :href="`${item.url}`" target="blank">{{ item.title }}</a></span> -->
          <span class=""><a :href="`${ item.url }`" target="blank">{{ item.title }}</a></span>
        </td>
        <td>
          <span>{{ item.time_ago}}</span>
        </td>
        <td>
          Created by <router-link :to="`/user/${item.user}`" >{{ item.user }}</router-link>
        </td>
      </tr>
    </table>
    
  </div>
</template>

<script>

// import { fetchNewsList } from '../api/index.js'
import { createNamespacedHelpers } from 'vuex'
// import { mapGetters } from 'vuex';
const { mapState: newsMapState } = createNamespacedHelpers('newsStore');

export default {
    // data() {
    //     return {
    //       // news: []
    //     }
    // },
    computed: {
      // news() {
      //   return this.$store.state.newsStore.news
      // }
      // news : this.$store.state.newStore.news
      // ...mapState({news: state => state.newsStore.news})
      // ...mapGetters({news: 'newsStore/news'})
      ...newsMapState({news: state => state.news})
    },
    created() {
        this.$store.dispatch('newsStore/FETCH_NEWS');
        // console.log(this);
        // fetchNewsList().then(response => {
        //     console.log(this);
        //     this.users = response.data
        // });
        // var vm = this;
        // fetchNewsList().then(function(response) {
        //     console.log(vm);
        //     vm.users = response.data;
        // });
    },
}
</script>

<style>

</style>