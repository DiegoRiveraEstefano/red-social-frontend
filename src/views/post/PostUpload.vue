<script setup>
import axios from 'axios'
import cookies from 'vue-cookies'
import router from '../../router/index.js' 
</script>

<template>
    <div class="box container">
        <div class="field">
            <label class="label">title</label>
            <div class="control">
                <input v-model="title" id="username" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <input v-model="description" id="password" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <div class="field">
            <label class="label">Url image</label>
            <div class="control">
                <input v-model="imageUrl" id="password" class="input" type="text" placeholder="Text input" default="">
            </div>
        </div>

        <button class="button" v-on:click="uploadPost(title, description, imageUrl)">
            <h1>Boton</h1>
        </button>
    </div>
</template>

<script>
export default {
    data () {
      return {
        urlBase: "http://127.0.0.1:80/"
      }
    },
    methods: {

        async uploadPost(title, description, imageUrl) {

            if (cookies.get("token") == undefined){
                return
            }

            console.log(this.urlBase)

            var options = {
                method: 'POST',
                url: this.urlBase + 'post/api/v1/post/',
                headers: {
                    'Accept': '*/*',
                    'Authorization': 'token ' + cookies.get("token"),
                    'Content-Type': 'application/json'
                },
                data: {
                    title: title,
                    description: description,
                    image_url: imageUrl,
                }
            };
            const response = await axios.request(options)
            if (response.status == 201){
                router.push({ name: 'home'});
            }
        },
    }
}

</script>