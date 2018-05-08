<template>
  <div class="col-lg-6 col-md-8 m-auto">
    <h1 class="text-center mt-3">Smarty</h1>
    <form v-on:submit.prevent="pushTask" class="input-group mt-3">
      <input v-model.trim="newTask" class="form-control" type="text" maxlength="30" id="input" autocomplete="off">
      <div class="input-group-append">
        <input class="btn btn-outline-info" type="submit" value="+">
      </div>
    </form>
    <p class="mt-2 m-0">
      Активных задач:
      <span class="badge badge-info" v-cloak>{{ tasks.length }}</span>
      <span v-if="selectedTasks.length > 0" class="badge badge-primary" v-cloak>{{ selectedTasks.length }}</span>
      <span
          v-if="selectedTasks.length > 0"
          v-on:click="deleteTasks()"
          class="btn btn-danger float-right btn-sm"
          v-cloak>×</span>
    </p>
    <div class="mt-3 form-row">
      <span
        v-bind:class="selectedTasks.indexOf(item) > -1 ? 'badge-primary' : 'badge-info'"
        v-for="(item, key) in tasks" v-on:click="selectTask(item)"
        :key="key"
        class="badge badge-pill m-1 btn" v-cloak>
        {{ item }}</span>
      <span class="badge badge-pill m-1 btn badge-success" v-cloak>{{ newTask }}</span>
    </div>
  </div>
</template>

<script>
	export default {
		data: function () {
			return {
				newTask: ``,
				tasks: this.getTasks(),
				selectedTasks: []
			}
		},
		watch: {
			tasks: function () {
				this.setTasks(this.tasks);
			}
		},
		methods: {
			pushTask: function () {
				if (!this.newTask || this.tasks.indexOf(this.newTask) > -1) {
					return;
				}

				this.tasks.push(this.newTask);
				this.newTask = ``;
			},

			selectTask: function (item) {
				const selected = this.selectedTasks;

				if (selected.indexOf(item) === -1) {
					selected.push(item);
					return;
				}
				selected.splice(selected.indexOf(item), 1);
			},
			deleteTasks: function () {
				this.tasks = this.tasks.filter((item) => {
					return this.selectedTasks.indexOf(item) === -1
				});

				this.selectedTasks = [];
			},
			getTasks: function () {
				return JSON.parse(localStorage.getItem(`data`)) || [];
			},
			setTasks: function (items) {
				localStorage.setItem(`data`, JSON.stringify(items));
			}
    }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>