import Vue from 'vue/dist/vue.min';
import navbar from './components/Navbar';
import router from './router';

const app = new Vue({
	el: `#app`,
	router,
	template: `
    <div>
			<navbar/>
    	<h1 class="text-center mt-3">Smart List</h1>
			<router-view/>
		</div>`
});