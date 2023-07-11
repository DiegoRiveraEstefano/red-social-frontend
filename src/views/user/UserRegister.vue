<script setup>
import axios from 'axios'
import router from '../../router/index.js'
</script>

<template>
    <div>
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input v-model="username" id="username" class="input" type="text" placeholder="Text input" default="">
            </div>
            <!--todo: realizar un v-if para mostrar errores-->
        </div>

        <div class="field">
            <label class="label">Primer Nombre</label>
            <div class="control">
                <input v-model="firstName" id="firstName" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input v-model="email" id="email" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input v-model="password" id="password" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <div></div>

        <button class="button" v-on:click="createUser(username, firstName, email, password)">
            <h1>A</h1>
        </button>
    </div>
</template>

<script>
export default {
    data () {
      return {
        urlBase: "http://127.0.0.1:80/",
      }
    },
    methods: {
        async createUser(username, firstName, email, password){

            var data = {
                    username: username,
                    password: password,
                    email: email,
                    firstName: firstName
                }
            
            for (var key in data){
                if (data[key] == undefined){
                    throw Error
                }
            }

            var options = {
                method: 'POST',
                url: this.urlBase + 'user/api/v1/user/',
                headers: {
                    Accept: '*/*',
                    //Authorization: 'token ' + cookies.get("token"),
                    'Content-Type': 'application/json'
                },                
                data: data
            };
            const response = await axios.request(options)
            if (response.status == 201){
                router.push({name: "user-login"})
            }
        },        
    }
}
</script>