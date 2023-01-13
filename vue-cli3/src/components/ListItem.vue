<template>
  <table>
      <tr v-for="item in news" v-bind:key="item">
        <td>
          <span class="poinsts">{{ item.points }}</span>
        </td>
        <td>
          <!-- <span class=""><a :href="`${item.url}`" target="blank">{{ item.title }}</a></span> -->
          <span class="news-title"><a :href="`${ item.url }`" target="blank">{{ item.title }}</a></span>
        </td>
        <td>
          <span class="">{{ item.time_ago}}</span>
        </td>
        <td>
          <small class="link-text">
            Created by <router-link :to="`/user/${item.user}`" >{{ item.user }}</router-link>
          </small>
        </td>
      </tr>
    </table>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'

export default {
  props: {
    news: Array
  },
  
}
</script>

<style>
  a {
    color: #34495c;
    text-decoration: none;
  }
  a:hover {
    color: #42b883;
    text-decoration: underline;
  }
  a.-webkit-any-link {
    text-decoration: underline;
  }
  .news-title {

  }
  .link-text {
    color: #828282
  }
</style>