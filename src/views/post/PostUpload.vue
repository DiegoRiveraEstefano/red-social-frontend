<script setup>
import cookies from 'vue-cookies'
import router from '../../router/index.js' 
import {uploadPostApi} from '../../api/api.js'
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
    methods: {

        async uploadPost(title, description, imageUrl) {

            if (cookies.get("token") == undefined){
                return
            }
            const response = await uploadPostApi(title, description, imageUrl)
            console.log(response)
            if (response.status == 201){
                router.push({ name: 'home'});
            }
        },
    }
}

</script>