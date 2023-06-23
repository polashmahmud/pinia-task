<template>
  <div class="max-h-screen bg-gray-200 h-screen flex items-center flex-col">

    <div class="max-w-xl w-full mt-60">
      <Header />
      <div v-if="store.loading" class="bg-white p-5 rounded shadow">
        Loading ...
      </div>
      <div v-else class="bg-white p-5 rounded shadow">
        <TaskAdd />
        <ListTasks />
        <TasksFilter />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import ListTasks from "@/components/ListTasks.vue";
import TasksFilter from "@/components/TasksFilter.vue";
import TaskAdd from "@/components/TaskAdd.vue";
import { useTasks } from "@/stores/TaskStore";

const store = useTasks()
store.getTasks()
</script>