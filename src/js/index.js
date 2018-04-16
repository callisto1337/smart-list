import storage from './modules/storage';

const app = new Vue({
    el: `#app`,
    data: {
        newTask: ``,
        tasks: storage.data,
        selectedTasks: []
    },
    watch: {
		tasks: function() {
			storage.data = this.tasks;
		}
    },
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