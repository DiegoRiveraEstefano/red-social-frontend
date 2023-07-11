<script setup>
    import router from '../../router/index.js';
    const props = defineProps(['posttitle', 'postimageurl', 'postauthorname', 'postuuid']);    
</script>

<template>
    <div class="card box" v-on:click="toPost(props.postuuid)">
        <div class="card-image">
            <figure class="image is-4by3">
                <img v-bind:src="props.postimageurl" alt="Post-image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ props.posttitle }}</p>
                </div>
            </div>

            <div class="content">
                {{ props.postauthorname }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toPost(uuid){
                router.push({ name: 'post-detailed', params: { post: uuid } });
            }

        }
    }
</script>
