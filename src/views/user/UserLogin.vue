<script setup>
import axios from 'axios'
import cookies from 'vue-cookies'
import router from '../../router/index.js' 
</script>

<template>
    <div>
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input v-model="username" id="username" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input v-model="password" id="password" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <button class="button" v-on:click="getToken(username, password)">
            <h1>Boton</h1>
        </button>
    </div>
</template>

<script>
export default {
    methods: {

        async getToken(username, password) {
            var options = {
                method: 'POST',
                url: 'http://127.0.0.1:8000/user/api/auth/',
                data: {
                    username: username,
                    password: password
                }
            };
            const response = await axios.request(options)
            const token = response.data.token;
            cookies.set("token", token);
            cookies.set("username", username);
            router.push({ name: 'user-home', params: { user: username } });
        },
    }
}
</script>