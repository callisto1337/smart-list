import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config/config';
import * as firebaseui from 'firebaseui';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: true,
        tasks: null,
        authStatus: false,
        userName: ``
    },
    mutations: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
        toggleAuthStatus: (state, status) => {
            state.authStatus = status;
        },
        setTasks: (state, tasks) => {
            state.tasks = tasks;
        },
        setUserName: (state, string) => {
            state.userName = string;
        }
    },
    actions: {
        initStore: (context) => {
            firebase.initializeApp(config);
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    firebase.database().ref(`users`).once('value').then((snapshot) => {
                        const userName = user.email.substr(0, user.email.search(`@`));
                        context.commit(`setUserName`, userName);

                        const tasks = snapshot.val() === null ? [] : snapshot.val()[context.state.userName];

                        context.commit(`setTasks`, tasks);
                        context.commit(`toggleAuthStatus`, true);
                        context.commit(`toggleLoading`);
                    });
                    return;
                }
                context.commit(`toggleLoading`);
            });
        },
        logOut: (context) => {
            firebase.auth().signOut();
            context.commit(`toggleLoading`);
            context.commit(`toggleAuthStatus`, false);
        },
        logIn: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        },
        saveTasks: (context) => {
            firebase.database().ref(`users/${context.state.userName}`).set(context.state.tasks);
        }
    }
});