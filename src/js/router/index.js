import Vue from 'vue';
import Router from 'vue-router';
import List from '../components/List';
import Auth from '../components/Auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
	routes: [
		{
			path: '/',
			name: 'List',
			component: List,
		},
		{
			path: '/auth',
			name: 'Auth',
			component: Auth,
		},
	]
});
