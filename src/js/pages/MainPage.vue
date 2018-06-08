<template>
  <div>
    <Header/>
    <<Welcome/>
    <Footer/>
  </div>
</template>

<script>
	import Header from '../components/Header';
	import Footer from '../components/Footer';
	import Welcome from '../components/Welcome';

	export default {
		name: 'App',
		components: {
			Header,
			Footer,
			Welcome
		},
		beforeMount: function () {
			this.isAuthorized();
		},
		methods: {
			isAuthorized: function() {
				// fetch('/auth').then(response => console.log(response.text()));
			}
		}
	}
</script>