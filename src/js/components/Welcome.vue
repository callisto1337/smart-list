<template>
    <div class="col-lg-6 col-md-8 m-auto">
        <h1 class="text-center mt-5">Добро пожаловать в Smarty!</h1>
        <h2 class="h4 text-center mt-2">Простой и удобный список заметок</h2>
        <div class="mt-5 text-center">
            <button class="btn btn-primary mr-1" style="background: #db4437" @click="logIn">Войти с Google</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            logIn: function (e) {
                e.preventDefault();
                this.$store.dispatch(`logIn`);
            }
        }
    }
</script>