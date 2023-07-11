<script setup>
import {getPostApi} from '../../api/api.js'
import { useRoute } from 'vue-router'
</script>

<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ post.title }}
            </p>
        </header>
        <div class="card-image">
            <figure class="image is-4by3">
                <img v-bind:src="post.image_url" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img v-bind:src="post.image_url" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4"> {{ post.user }} </p>
                </div>
            </div>

            <div class="content">
                <h1>{{ post.title }}</h1>
                <p>{{ post.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            post: {}
        }
    },  
    methods: {        
        async getPost() {
            const response = await getPostApi(useRoute().params.post);
            return response.data;
        },
    },
    created() {
        this.post = getPostApi(useRoute().params.post).then(response => {
            this.post = response.data
        })  
    }
}

</script>