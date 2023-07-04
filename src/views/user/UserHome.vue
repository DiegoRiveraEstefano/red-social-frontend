<script setup>
import axios from 'axios';
import cookies from 'vue-cookies';
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{ user.username }}</p>
                        <p class="subtitle is-6"> {{ user.email }} </p>
                    </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    data() {
        return {
            "user": {}
        }
    },
    methods: {
        async getUserInfo() {
            var options = {
                method: 'GET',
                url: 'http://127.0.0.1:8000/user/api/v1/user/' + this.$route.params.user,
                headers: {
                    'Accept': '*/*',
                    'Authorization': 'token ' + cookies.get("token"),
                    'Content-Type': 'application/json'
                },
            };
            const response = await axios.request(options)
            this.user = response.data;
        }
    },
    created() {
        this.getUserInfo()
    }
}

</script>