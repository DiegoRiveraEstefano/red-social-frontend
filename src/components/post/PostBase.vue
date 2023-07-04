<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img v-bind:src="post.PostimageUrl" alt="Post-image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ post.PostAuthorName }}</p>
                </div>
            </div>

            <div class="content">
                {{ post.PostTitle }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                PostTitle: String,
                PostimageUrl: String,
                PostAuthorName: String
            }
        }
    }
}
</script>