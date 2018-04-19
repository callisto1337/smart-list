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
		}
	}
</script>