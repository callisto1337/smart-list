<template>
    <div class="col-lg-6 col-md-8 m-auto pt-3">
        <div class="mt-2 m-0">
            <span class="h5 mr-2">Основное:</span>
            <span class="badge badge-info" v-cloak>{{ tasks.length }}</span>
            <span v-if="selectedTasks.length > 0" class="badge badge-danger" v-cloak>{{ selectedTasks.length }}</span>
        </div>
        <div class="mt-3">
            <div class="form-row">
            <span v-bind:class="selectedTasks.indexOf(item) > -1 ? 'badge-danger' : 'badge-info'"
                  v-for="(item, key) in tasks" v-on:click="selectTask(item)" :key="key"
                  class="badge badge-pill m-1 btn" v-cloak>{{ item }}</span>
                <span class="badge badge-pill m-1 btn badge-success" v-cloak>{{ newTask }}</span>
            </div>
            <form
                v-on:submit.prevent="pushTask">
                <div>
                    <input
                        v-if="showInput"
                        v-bind:class="{ 'is-invalid': textError }"
                        v-model.trim="newTask" class="form-control mt-3"
                        type="text" maxlength="30" autocomplete="off">
                    <div class="invalid-feedback">
                        {{ textError }}
                    </div>
                </div>
                <div class="mt-3 text-right">
                    <input
                        v-if="showInput"
                        v-on:click="toggleInput()"
                        class="btn btn-primary btn-sm"
                        type="button" value="Закрыть">
                    <input
                        v-if="selectedTasks.length === 0"
                        class="btn btn-success btn-sm ml-1"
                        type="button"
                        v-on:click="showInput ? pushTask() : toggleInput()"
                        v-bind:value="showInput ? `Сохранить` : `Добавить`">
                    <input
                        type="button"
                        v-if="selectedTasks.length"
                        v-on:click="deleteTasks()"
                        class="btn btn-danger btn-sm ml-1"
                        v-cloak value="Удалить">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                newTask: ``,
                selectedTasks: [],
                textError: ``,
                showInput: false
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
            toggleInput: function() {
                this.showInput = !this.showInput;
                this.textError = ``;
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