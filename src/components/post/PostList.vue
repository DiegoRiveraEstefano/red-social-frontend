<script setup>
import axios from 'axios'
import cookies from 'vue-cookies'
import router from '../../router/index.js' 
</script>

<template>
    <div class="box">
        <div v-for="post in data">
            <div>
                {{ post }}
            </div>
        </div>
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

        async getPosts() {

            var options = {
                method: 'GET',
                url: this.urlBase + 'post/api/v1/post/',
                headers: {
                    'Accept': '*/*',
                    'Authorization': 'token ' + cookies.get("token"),
                    'Content-Type': 'application/json'
                }
            };
            const response = await axios.request(options)
            const data = response.data;
        },
    }
}
</script>