<template>
    <div id="back">
        <div>
            <h3>Create Account</h3>
            already have a account? <router-link to="/login">Log in</router-link>
        </div>
        <div id="box">
            <br>
            <select v-model="selected">
            <option disabled value="">Pilih Role</option>
            <option>Dosen</option>
            <option>Mahasiswa</option>
            </select>
        </div>
        <div>
            <router-link to="/regisD">Dosen</router-link>   -
            <router-link to="/regisM">Mahasiswa</router-link>
        </div>
        <button v-on:click="next(selected)" >Selanjutnya</button>
    </div>
</template>

<script>
//import regis from '../components/regis.vue'
//import {DropDownListPlugin} from '@syncfusion/ej2-vue-dropdowns';
//Vue.use(DropDownListPlugin);
    export default {
        name: 'regisP',
        data(){
            return{
                selected: ''
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
    }
</style>