<template>
    <div class="col-lg-6 col-md-8 m-auto">
        <h1 class="text-center mt-5">Smarty</h1>
        <form v-on:submit.prevent="pushTask" class="row mt-3">
            <div class="col">
                <div>
                    <input
                        v-bind:class="{ 'is-invalid': textError }"
                        v-model.trim="newTask" class="form-control"
                        type="text" maxlength="30" autocomplete="off">
                    <div class="invalid-feedback">
                        {{ textError }}
                    </div>
                </div>
            </div>
            <div class="pr-3">
                <input class="btn btn-info" type="submit" value="+">
            </div>
        </form>
        <p class="mt-2 m-0">
            Основное:
            <span class="badge badge-info" v-cloak>{{ tasks.length }}</span>
            <span v-if="selectedTasks.length > 0" class="badge badge-primary" v-cloak>{{ selectedTasks.length }}</span>
            <span
                v-if="selectedTasks.length > 0"
                v-on:click="deleteTasks()"
                class="btn btn-danger float-right btn-sm"
                v-cloak>×</span>
        </p>
        <div class="mt-3 form-row">
            <span v-bind:class="selectedTasks.indexOf(item) > -1 ? 'badge-primary' : 'badge-info'"
                v-for="(item, key) in tasks" v-on:click="selectTask(item)" :key="key"
                class="badge badge-pill m-1 btn" v-cloak>{{ item }}</span>
            <span class="badge badge-pill m-1 btn badge-success" v-cloak>{{ newTask }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                newTask: ``,
                selectedTasks: [],
                textError: ``
            }
        },
        computed: {
            tasks: function() {
                return this.$store.state.tasks;
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
                    this.textError = !this.newTask ? `Введите текст заметки!` : `Такая заметка уже существует!`;
                    return;
                }

                this.$store.state.tasks.push(this.newTask);
                this.newTask = ``;
                this.textError = ``;
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
                const tasks = this.tasks.filter((item) => {
                    return this.selectedTasks.indexOf(item) === -1
                });

                this.$store.commit(`setTasks`, tasks);
                this.selectedTasks = [];
            },
            setTasks: function (tasks) {
                this.$store.commit(`setTasks`, tasks);
                this.$store.dispatch(`saveTasks`);
            }
        }
    }
</script>

<style>
    [v-cloak] {
        display: none;
    }
</style>