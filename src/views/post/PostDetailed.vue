<script setup>
import axios from 'axios'
import cookies from 'vue-cookies'
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
                <h1>{{ post.description }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            urlBase: "http://127.0.0.1:80/",
            post: this.getPost(),
        }
    },
    methods: {

        async getPost() {

            let post_name = this.$route.params.post;

            var options = {
                method: 'GET',
                url: this.urlBase + 'post/api/v1/post/' + post_name,
                headers: {
                    'Accept': '*/*',
                    'Authorization': 'token ' + cookies.get("token"),
                    'Content-Type': 'application/json'
                }
            };
            const response = await axios.request(options)
            return response.data
        },
    },
    async beforeMount() {
        this.post = await this.getPost()
        console.log(this.post)
    }
}

</script>