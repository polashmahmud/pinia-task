<template>
  <form @submit.prevent="addTask" class="mb-10 flex space-x-4">
    <input v-model="task" type="text" placeholder="Add something..." class="w-full bg-gray-100 rounded border border-gray-300 
           outline-gray-300 py-1 px-3">
    <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8
     hover:bg-indigo-600 rounded text-lg">Add
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTasks } from "@/stores/TaskStore";

const task = ref("");
const tasks = useTasks();

const addTask = () => {
  let newTask = {
    id: Date.now(),
    name: task.value,
    done: false
  }

  tasks.addTask(newTask);
  task.value = ""

};
</script>