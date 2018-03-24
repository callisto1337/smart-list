var app = new Vue({
    el: '#app',
    data: {
        new_task: '',
        list: []
    },
    methods: {
        pushTask: function() {
            this.list.push({
                text: this.new_task
            });
            this.new_task = '';
        }
    }
})