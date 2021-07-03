<template>
    <div >
        <h3>Login</h3><br>
        
        <div id="back">Username</div>
        <input type="text" v-model="user" placeholder="Username"/>
        <div id="back">Password</div>
        <input type="text" v-model="pass" placeholder="Password"/><br>
        <br><button v-on:click="masuk(user, pass)">Masuk</button>
        
    </div>
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
    
</style>