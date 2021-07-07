<template>
  <nav>
    <v-app-bar color="#FFF" app>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-avatar id="ava" color="black">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>
      <v-list-item-content>
        <v-list-item-title> Ir.Soekarno </v-list-item-title>
        <v-list-item-subtitle> Dosen </v-list-item-subtitle>
      </v-list-item-content>
      <v-icon>mdi-logout</v-icon>
    </v-app-bar>

    <v-navigation-drawer app color="#006383" permanent>
      <v-list-item>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="50"
          max-width="50"
          class=".rounded-pill"
          src="../../assets/bnilogo.png"
        ></v-img>
        <v-list-item-content>
          <v-list-item-title class="text-h6 white--text">
            PraBNI
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">
            Course
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon color="#FFF">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content color="#FFF">
            <v-list-item-title class="white--text" color="#FFF">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Courses", icon: "mdi-collage", route: "/" },
        {
          title: "Mahasiswa",
          icon: "mdi-google-classroom",
          route: "/mahasiswa",
        },
      ],
      right: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>