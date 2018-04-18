import Vue from 'vue/dist/vue.min';
import storage from '../modules/storage';


export default Vue.component(`list`, {
  data: function() {
    return {
      newTask: ``,
      tasks: storage.data,
      selectedTasks: []
    }
  },
  watch: {
    tasks: function() {
      storage.data = this.tasks;
    }
  },
  template: `
    <div class="col-lg-6 col-md-8 m-auto">
      <form v-on:submit.prevent="pushTask" action="post" class="input-group mt-3">
        <input v-model.trim="newTask" class="form-control" type="text" maxlength="30" id="input" autocomplete="off">
        <div class="input-group-append">
          <input class="btn btn-outline-info" type="submit" value="+">
        </div>
      </form>
      <p class="mt-2 m-0">
        Активных задач: 
        <span class="badge badge-info" v-cloak>{{ tasks.length }}</span>
        <span v-if="selectedTasks.length > 0" class="badge badge-primary" v-cloak>{{ selectedTasks.length }}</span>
        <span v-if="selectedTasks.length > 0" v-on:click="deleteTasks()" class="btn btn-danger float-right btn-sm" v-cloak>×</span>
      </p>
      <div class="mt-3 form-row">
        <span
          v-bind:class="selectedTasks.indexOf(item) > -1 ? 'badge-primary' : 'badge-info'" 
          v-for="(item, key) in tasks" v-on:click="selectTask(item)" 
          :key="key" 
          class="badge badge-pill m-1 btn" v-cloak>
          {{ item }}
        </span>
        <span class="badge badge-pill m-1 btn badge-success" v-cloak>{{ newTask }}</span>
      </div>
    </div>`,
  methods: {
    pushTask: function() {
      if (!this.newTask || this.tasks.indexOf(this.newTask) > -1) {
        return;
      }

      this.tasks.push(this.newTask);
      this.newTask = ``;
    },

    selectTask: function(item) {
      const selected = this.selectedTasks;

      if (selected.indexOf(item) === -1) {
        selected.push(item);
        return;
      }
      selected.splice(selected.indexOf(item), 1);
    },
    deleteTasks: function() {
      this.tasks = this.tasks.filter((item) => {
        return this.selectedTasks.indexOf(item) === -1
      });

      this.selectedTasks = [];
    }
  }
});