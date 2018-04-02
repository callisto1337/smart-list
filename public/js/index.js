const storage = {
    data: JSON.parse(localStorage.getItem(`data`)),
    getData: function() {
        return this.data !== null ? this.data : [];
    },
    saveData: function(items) {
        localStorage.setItem(`data`, JSON.stringify(items));
    }
};

const app = new Vue({
    el: `#app`,
    data: {
        new_task: ``,
        list: storage.getData(),
        listSelected: []
    },
    methods: {
        pushTask: function() {
            if (!this.new_task || this.list.indexOf(this.new_task) > -1) {
                return;
            }

            this.list.push(this.new_task);
            this.new_task = ``;
            storage.saveData(this.list);
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
            this.list = this.list.filter(function(item) {
                if (this.listSelected.indexOf(item) === -1) {
                    return item;
                }
            }, this);

            storage.saveData(this.list);
            this.listSelected = [];
        }
    }
});