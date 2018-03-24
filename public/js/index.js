let storage = {
    data: JSON.parse(localStorage.getItem('data')),
    getData: function() {
        return this.data !== null ? this.data : [];
    },
    saveData: function(items) {
        localStorage.setItem('data', JSON.stringify(items));
    }
};

let app = new Vue({
    el: '#app',
    data: {
        new_task: '',
        list: storage.getData(),
        active_tasks: storage.getData().length
    },
    methods: {
        pushTask: function() {
            if (this.new_task) {
                this.list.push({
                    text: this.new_task
                });
                this.new_task = '';
                storage.saveData(this.list);
            }
        }
    }
})