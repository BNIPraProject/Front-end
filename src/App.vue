<template>
  <v-app>
    <navbar />
    <!-- <login/> -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/mahasiswa/Navbar.vue";
// import Login from "./components/Login.vue";
export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
