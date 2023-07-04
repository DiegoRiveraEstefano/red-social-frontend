<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">

            </p>
        </header>

        <main class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                </div>
            </div>

        </main>

    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                PostId: Number,
            }
        }
    },
    methods: {
        async getAuthor() {

        },
        async getComments() {

        },
        async getPostData() {

        }
    }
}
</script>