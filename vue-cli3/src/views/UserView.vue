<template>
  <div clas="user-container">
    <div>
        <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
        <div>username: {{ userinfo.id }}</div>
        <div class="time">created: {{ userinfo.created }}</div>
        <div class="time">karma: {{ userinfo.karma }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  computed: {
      ...mapState(['userinfo'])
  },
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id);
  }

}
</script>

<style>

</style>