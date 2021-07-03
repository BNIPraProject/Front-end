<template>
        <div>
            <h3>Create Account</h3>
            already have a account? <router-link to="/login">Log in</router-link><br>
        
    <div>
        Nama Lengkap
        <input type="text" v-model="nama" placeholder="Nama"/><br>
        Email
        <input type="text" v-model="email" placeholder="Email"/><br>
        Username
        <input type="text" v-model="user" placeholder="Username"/><br>
        Password
        <input type="text" v-model="pass" placeholder="Password"/><br>
        <button v-on:click="daftar()">Daftar</button>
    </div></div>
</template>

<script>
    export default {
        name: 'regisD',
        data(){
            return{
                nama: '',
                email: '',
                user: '',
                pass: ''
            }
            

        },
        methods: {
            daftar(){

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>