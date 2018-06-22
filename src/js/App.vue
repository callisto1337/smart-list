<template>
    <div v-if="loading" class="text-center mt-5 pt-5">
        <h3>Loading...</h3>
    </div>
    <div v-else>
        <Header :authStatus="authStatus"/>
        <MainPage :authStatus="authStatus" :storage="storage"/>
        <Footer/>
    </div>
</template>

<script>
    import MainPage from './pages/MainPage';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import firebase from 'firebase/app';
    import 'firebase/database';
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
                loading: true,
                storage: null
            }
        },
        beforeCreate() {
            firebase.initializeApp(config);

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
		                console.log(user);
		                this.userData = user;
                    this.authStatus = true;
                    const storage = firebase.database().ref("users");

		                storage.on("value", (snapshot) => {
				                this.storage = snapshot.val();
				                this.loading = false;
		                });

		                return;
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