<template>
  <div id="regisM">
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
      <v-container>
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">
                    {{ platformName }}
                  </h3>
                </v-layout>
              </v-card-title>
              <v-card-text>
                <div style="text-align: center">
                  <h2>Create Account</h2>
                  <p>already have a account? <router-link to="/login">Log in</router-link></p><br>
                </div>
                <div id="box">
                  <br>
                  <v-form>
                    <v-text-field outline label="Nama" type="text" v-model="nama"></v-text-field>
                    <v-text-field outline label="Email" type="text" v-model="email"></v-text-field>
                    <v-text-field outline label="Angkatan" type="text" v-model="angkatan"></v-text-field>
                    <v-text-field outline label="Username" type="text" v-model="user"></v-text-field>
                    <v-text-field outline hide-details label="Password" type="password" v-model="pass"></v-text-field>
                  </v-form>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-spacer></v-spacer>
                <v-btn style="color: white" v-on:click="daftar()" color="#006383" :large="$vuetify.breakpoint.smAndUp">
                  Sign Up
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm12 md6 offset-md3>

          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
<!--    <div>-->
<!--            <h3>Create Account</h3>-->
<!--            already have a account? <router-link to="/login">Log in</router-link><br>-->
<!--        -->
<!--    <div>-->
<!--        Nama Lengkap-->
<!--        <input type="text" v-model="nama" placeholder="Nama"/><br>-->
<!--        Email-->
<!--        <input type="text" v-model="email" placeholder="Email"/><br>-->
<!--        Angkatan-->
<!--        <input type="text" v-model="angktn" placeholder="Angkatan"/><br>-->
<!--        Username-->
<!--        <input type="text" v-model="user" placeholder="Username"/><br>-->
<!--        Password-->
<!--        <input type="text" v-model="pass" placeholder="Password"/><br>-->
<!--        <button v-on:click="daftar()">Daftar</button>-->
<!--    </div></div>-->
</template>

<script>
    export default {
        name: 'regisM',
        data(){
            return{
                nama: '',
                email: '',
                angkatan: '',
                user: '',
                pass: ''
            }
    }
    }
</script>

<style lang="scss" scoped>

</style>