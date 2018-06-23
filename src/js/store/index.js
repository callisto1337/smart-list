import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import config from '../config/config';
import * as firebaseui from 'firebaseui';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: true,
        userData: null,
        authStatus: false
    },
    mutations: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
        toggleAuthStatus: (state) => {
            state.authStatus = !state.authStatus;
        },
        setUserData: (state, data) => {
            state.userData = data;
        }
    },
    actions: {
        initStore: (context) => {
            firebase.initializeApp(config);
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    context.commit(`setUserData`, user);
                    context.commit(`toggleAuthStatus`);
                }
                context.commit(`toggleLoading`);
            });
        },
        logOut: (context) => {
            firebase.auth().signOut();
            context.commit(`toggleAuthStatus`);
            context.commit(`setUserData`, null);
            context.commit(`toggleLoading`);
        },
        logIn: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    }
});