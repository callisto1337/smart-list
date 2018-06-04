<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
	import Header from './components/Header';
	import Footer from './components/Footer';

	export default {
		name: 'App',
		components: {
			Header: Header,
            Footer: Footer
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