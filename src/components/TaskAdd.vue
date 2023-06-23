<template>
  <form @submit.prevent="addTask" class="mb-10 flex space-x-4">
    <div class="w-full">
      <input @input="handleChange" v-model="task" type="text" placeholder="Add something..." class="w-full bg-gray-100 rounded border border-gray-300
           outline-gray-300 py-1 px-3 h-11">
      <div v-if="store.errors.name">
        <p class="text-sm text-red-500">{{ store.errors.name[0] }}</p>
      </div>
    </div>

    <div>
      <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8
     hover:bg-indigo-600 rounded text-lg">Add
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTasks } from "@/stores/TaskStore";

const task = ref("");
const store = useTasks();

const handleChange = (e) => {
  if (e.data) {
    store.clearErrors()
  }
}

const addTask = () => {
  let newTask = {
    name: task.value,
    done: false
  }

  store.addTask(newTask);
  task.value = ""
};
</script>