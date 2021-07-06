<template>
  <div id="login">
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
                <v-form>
                  <v-text-field outline label="Username" type="text" v-model="user"></v-text-field>
                  <v-text-field outline hide-details label="Password" type="password" v-model="pass"></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-spacer></v-spacer>
                <v-btn style="color: white" v-on:click="masuk(user, pass)" color="#006383" :large="$vuetify.breakpoint.smAndUp">
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
<!--    <div >-->
<!--        <h3>Login</h3><br>-->
<!--        -->
<!--        <div id="back">Username</div>-->
<!--        <input type="text" v-model="user" placeholder="Username"/>-->
<!--        <div id="back">Password</div>-->
<!--        <input type="text" v-model="pass" placeholder="Password"/><br>-->
<!--        <br><button v-on:click="masuk(user, pass)">Masuk</button>-->
<!--        -->
<!--    </div>-->
</template>

<script>
//import loginC from '../components/loginC.vue'

    export default {
        name: 'loginP',
        data(){
            return{
                user: '',
                pass: '',
            }
        },
        options: {
          isLoggingIn: true,
          shouldStayLoggedIn: true
        },
        methods:{
            masuk(){

            }
        }
    }
    
</script>

<style >
#back{
        padding: 10px;
        text-align: center;
    }
.v-btn{
  color: #42b983;
}
.v-card {
  border-radius: 4px;
}
.v-card__title {
  text-transform: uppercase;
}

    
</style>