import storage from './modules/storage';

const app = new Vue({
    el: `#app`,
    data: {
        new_task: ``,
        list: storage.data,
        listSelected: []
    },
    methods: {
        pushTask: function() {
            if (!this.new_task || this.list.indexOf(this.new_task) > -1) {
                return;
            }

            this.list.push(this.new_task);
            this.new_task = ``;
            storage.data = this.list;
        },
        selectTask: function(item) {
            const selected = this.listSelected;

            if (selected.indexOf(item) === -1) {
                selected.push(item);
                return;
            }
            selected.splice(selected.indexOf(item), 1);
        },
        deleteTasks: function() {
            this.list = this.list.filter((item) => {
              return this.listSelected.indexOf(item) === -1
            });

            storage.data = this.list;
            this.listSelected = [];
        }
    }
});