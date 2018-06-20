<template>
	<nav class="navbar navbar-expand navbar-light bg-light">
		<div class="col-lg-6 col-md-8 m-auto">
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a href="/" class="nav-link">Smarty</a>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto" v-if="authStatus">
					<li class="nav-item">
						<a href="#" class="nav-link" @click="logOut">Выход</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	import App from '../App';

	export default {
		props: ['authStatus'],
		methods: {
			logOut: function() {
				App.methods.logOut();
			}
		}
	}
</script>