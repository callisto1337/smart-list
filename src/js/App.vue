<template>
  <div>
    <Header/>
    <h1 class="text-center mt-3">Smarty</h1>
    <router-view/>
  </div>
</template>

<script>
	import Header from './components/Header';

	export default {
		name: 'App',
		components: {
			Header: Header
		},
		beforeMount: function () {
			this.isAuthorized();
		},
		methods: {
			isAuthorized: function() {
				fetch('/auth').then(response => console.log(response.text()));
			}
    }
	}
</script>