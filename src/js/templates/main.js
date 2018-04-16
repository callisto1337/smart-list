export default {
	template: `
		<form v-on:submit.prevent="pushTask" action="post" class="input-group mt-3">
			<input v-model.trim="new_task" class="form-control" type="text" maxlength="30" id="input" autocomplete="off">
			<div class="input-group-append">
				<input class="btn btn-outline-info" type="submit" value="+">
			</div>
		</form>
		<p class="mt-2 m-0">
			Активных задач: 
			<span class="badge badge-info" v-cloak>{{ list.length }}</span>
			<span v-if="listSelected.length > 0" class="badge badge-primary" v-cloak>{{ listSelected.length }}</span>
			<span v-if="listSelected.length > 0" v-on:click="deleteTasks()" class="btn btn-danger float-right btn-sm" v-cloak>×</span>
		</p>
		<div class="mt-3 form-row">
			<span
				v-bind:class="listSelected.indexOf(item) > -1 ? 'badge-primary' : 'badge-info'" 
				v-for="(item, key) in list" v-on:click="selectTask(item)" 
				:key="key" 
				class="badge badge-pill m-1 btn" v-cloak>
				{{ item }}
			</span>
			<span class="badge badge-pill m-1 btn badge-success" v-cloak>{{ new_task }}</span>
		</div>`
};