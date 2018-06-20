<template>
  <div v-if="loading" class="text-center mt-5">
    <h1>Loading...</h1>
  </div>
  <div v-else>
    <Header :authStatus="authStatus" />
    <MainPage :authStatus="authStatus" />
    <Footer/>
  </div>
</template>

<script>
  import MainPage from './pages/MainPage';
	import Header from './components/Header';
	import Footer from './components/Footer';
	import firebase from 'firebase/app';
	import config from './config/config';
	import * as firebaseui from 'firebaseui';

	export default {
		components: {
			MainPage,
			Header,
			Footer
		},
    data() {
			return {
				userData: null,
        authStatus: false,
        loading: true
      }
    },
		beforeCreate() {
			firebase.initializeApp(config);

			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					this.userData = user;
					this.authStatus = true;
        }
				this.loading = false;
			})
		},
    methods: {
			logIn() {
				const provider = new firebase.auth.GoogleAuthProvider();
				firebase.auth().signInWithRedirect(provider);
			},
			logOut() {
				firebase.auth().signOut();
				window.location.reload();
			}
    }
	}
</script>