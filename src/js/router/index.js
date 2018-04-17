import Vue from 'vue/dist/vue.min';
import Router from 'vue-router/dist/vue-router.min';
import List from '../components/List';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Main',
			component: List,
		}
	]
});
