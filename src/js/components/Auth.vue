<template>
  <div class="col-lg-6 col-md-8 m-auto">
    <h1 class="text-center mt-3">Войти</h1>
    <div class="mt-3">
      <button v-on:click="authGoogle()" type="button" class="btn btn-primary mr-1" style="background: #db4437">Google</button>
    </div>
  </div>
</template>

<script>
	export default {
		methods: {
			authGoogle: function() {
				console.log(`googleAuth`);
			}
    }
	}
</script>