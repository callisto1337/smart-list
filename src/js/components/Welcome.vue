<template>
    <div class="col-lg-6 col-md-8 m-auto">
        <h1 class="text-center mt-3">Добро пожаловать в Smarty!</h1>
        <h3 class="text-center mt-3">Простой и удобный список заметок</h3>
        <div class="mt-5 text-center">
            <button class="btn btn-primary mr-1" style="background: #db4437" @click="logIn">Войти с Google</button>
        </div>
    </div>
</template>

<script>
	import App from '../App';

	export default {
		methods: {
			logIn: function() {
				App.methods.logIn();
			}
    }
	}
</script>