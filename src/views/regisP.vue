
<template>
        <div id="regisP">
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
                      <h1 style="text-align: center">Login</h1>
                      <div id="box">
                        <br>
                        <div class="input-select">
                        <h2>Pilih role:</h2>
                        <br>
                        <select v-model="selected">
                          <option disabled value="">Please select one</option>
                          <option>Dosen</option>
                          <option>Mahasiswa</option>
                        </select>
<!--                        <v-select :options="options" label="Pilih role" solo></v-select>-->
<!--                        <span>Selected: {{ selected }}</span>-->
                        </div>
                      </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                      <v-spacer></v-spacer>
                      <v-btn style="color: white" v-on:click="next(selected)" color="#006383" :large="$vuetify.breakpoint.smAndUp">
                        Login
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
<!--    <div id="back">-->
<!--        <div>-->
<!--            <h3>Create Account</h3>-->
<!--            already have a account? <router-link to="/login">Log in</router-link>-->
<!--        </div>-->
<!--        <div id="box">-->
<!--            <br>-->
<!--            <select v-model="selected">-->
<!--            <option disabled value="">Pilih Role</option>-->
<!--            <option>Dosen</option>-->
<!--            <option>Mahasiswa</option>-->
<!--            </select>-->
<!--        </div>-->
<!--        <div>-->
<!--            <router-link to="/regisD">Dosen</router-link>   - -->
<!--            <router-link to="/regisM">Mahasiswa</router-link>-->
<!--        </div>-->
<!--        <button v-on:click="next(selected)" >Selanjutnya</button>-->
<!--    </div>-->
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);
//import regis from '../components/regis.vue'
//import {DropDownListPlugin} from '@syncfusion/ej2-vue-dropdowns';
//Vue.use(DropDownListPlugin);
//     new Vue({
//       el: "#app",
//       vuetify: new Vuetify(),
//       data: () => ({
//         options: ["Dosen","Mahasiswa"]
//       })
//     });
    export default {
        el: "#regisP",
        name: 'regisP',
        data(){
            return{
                selected: '',
            }
        },
         methods:{
             next(){}

        }
    }

</script>

<style >
    #box{
        padding: 10px;
      min-width: 200px;
    }
    .input-select {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    label {
      display: inline-block;
      width: 100%;
      font-size: 0.75em;
    }
    select {
      padding-right: 1.875em;
      cursor: pointer;
      color: #000;
      height: 40px;
      padding-bottom: 8px;
      border-radius: 2px;
      appearance: none;
      position: relative;
      background-color: #fff;
      color: #000;
      font-size: 100%;
      padding: 0.625em 0.5em;
      border: 1px solid #d2d2d2;
      width: 100%;
    }

</style>