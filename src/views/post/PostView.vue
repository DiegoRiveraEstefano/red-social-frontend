<script setup>
import axios from 'axios'
//import router from '../../router/index.js'
import PostBase from '../../components/post/PostBase.vue'
</script>

<template>
    <div class="box">
        <ul>
            <PostBase v-for="post in posts"
            :postuuid="post.uuid"
            :postauthorname="post.user"
            :posttitle="post.title"
            :postimageurl="post.image_url"
            :key="post.uuid"/>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
      return {
        urlBase: "http://127.0.0.1:80/",
        posts: this.getPosts()
      }
    },
    methods: {

        async getPosts() {

            var options = {
                method: 'GET',
                url: this.urlBase + 'post/api/v1/post/',
                headers: {
                    'Accept': '*/*',
                    //'Authorization': 'token ' + cookies.get("token"),
                    'Content-Type': 'application/json'
                }
            };
            const response = await axios.request(options)
            return response.data
        },      
    },
    async beforeMount(){
        this.posts = await this.getPosts()
        console.log(this.posts)
    }
}

</script>