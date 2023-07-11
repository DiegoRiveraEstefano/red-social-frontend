<script setup>
import PostBase from '../../components/post/PostBase.vue'
import {getPostsApi} from '../../api/api.js'
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
    data(){
        return{
            posts: []
        }
    },
    methods: {
        async getPosts() {
            const response = await getPostsApi();
            console.log(response.data)
            for (var x in response.data){
                this.posts.push(response.data[x])
            }
            return response.data;
        },      
    },
    created(){
        this.posts = getPostsApi().then(response => {
            this.posts = response.data
        })
    }
}

</script>