<template>
    <div class="navbar-end">
        <div class="navbar-item">
            <div v-show="isLog()">
                <div v-on:click="logOut()">
                    <a class="button is-light">
                        <strong>Log Out</strong>
                    </a>
                </div>
            </div>
            <div v-on:compositionstart="this.$forceUpdate()" v-show="!isLog()" class="buttons">
                <RouterLink to="/user/register">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                </RouterLink>
                <RouterLink to="/user/login">
                    <a class="button is-light">
                        <strong>Log in</strong>
                    </a>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>

import router from '../../router/index.js' 

export default {
    methods: {
        isLog() {
			return (this.$cookies.get("username") != null)
		},
		logOut() {
			this.$cookies.remove("username")
			this.$cookies.remove("token")
			router.push({ name: "home" })
            this.$forceUpdate()
		}
    },
}

</script>