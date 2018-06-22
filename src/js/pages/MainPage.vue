<template>
  <div>
    <List v-if="authStatus" :storage="storage"/>
    <Welcome v-else/>
  </div>
</template>

<script>
	import Welcome from '../components/Welcome';
	import List from '../components/List';

	export default {
		props: [`authStatus`, `storage`],
		components: {
			Welcome,
      List
		}
	}
</script>