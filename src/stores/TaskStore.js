import {defineStore} from "pinia";
import axios from "axios";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();

export const useTasks = defineStore('tasks', {
    state: () => {
        return {
            tasks: [],
            sortable: "all",
            loading: false,
            errors: []
        }
    },

    getters: {
        filteredTasks() {
            return this.sortable === 'completed' ? this.doneTasks :
                this.sortable === 'pending' ? this.notDoneTasks : this.allTasks;
        },
        allTasks() {
            return this.tasks
        },

        doneTasks() {
            return this.tasks.filter(task => task.done)
        },

        notDoneTasks() {
            return this.tasks.filter(task => !task.done)
        },

        countAllTasks() {
            return this.tasks.length
        },

        countDoneTasks() {
            return this.tasks.filter(task => task.done).length
        },

        countNotDoneTasks() {
            return this.tasks.filter(task => !task.done).length
        }
    },

    actions: {
        clearErrors() {
            this.errors = []
        },

        async getTasks() {
            try {
                this.loading = true;
                // await axios.get('/sanctum/csrf-cookie');
                let response = await axios.get('/api/tasks')
                this.tasks = response.data
                this.loading = false;
            } catch (e) {
                // erros
            }
        },

        async addTask(task) {
            try {
                let respones = await axios.post('/api/tasks', task)
                this.tasks.push(respones.data)
                $toast.success('Successfully added!')
            } catch (e) {
                if (e.response.status === 422) {
                    this.errors = e.response.data.errors
                    $toast.error('Please fill in all fields!')
                }
            }
        },

        async deleteTask(id) {
            try {
                await axios.delete(`/api/tasks/${id}`)
                this.tasks = this.tasks.filter(task => task.id !== id)
                $toast.success('Successfully deleted!')
            } catch (e) {
                // show errors
            }
        },

        async handleToggle(id) {

            try {
                await axios.patch(`/api/tasks/${id}`)
                const task = this.tasks.find(task => task.id === id)
                task.done = !task.done
                $toast.success('Successfully updated!')
            } catch (e) {
                // erros show
            }
        }
    }
});