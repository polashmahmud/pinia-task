<template>
  <div class="flex justify-end text-gray-500">
    <div class="flex space-x-2">
      <label class="inline-flex items-center">
        <input v-model="sortable" value="all" type="radio" class="form-radio h-4 w-4 text-blue-500" name="sortable">
        <span class="ml-2 text-sm">All ({{ countAllTasks }})</span>
      </label>
      <label class="inline-flex items-center">
        <input v-model="sortable" value="completed" type="radio" class="form-radio h-4 w-4 text-blue-500" name="sortable">
        <span class="ml-2 text-sm">Completed ({{ countDoneTasks }})</span>
      </label>
      <label class="inline-flex items-center">
        <input v-model="sortable" value="pending" type="radio" class="form-radio h-4 w-4 text-blue-500" name="sortable">
        <span class="ml-2 text-sm">Pending ({{ countNotDoneTasks }})</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { useTasks } from "@/stores/TaskStore";
import { storeToRefs } from "pinia";

const store = useTasks()
const { sortable, countAllTasks, countDoneTasks, countNotDoneTasks } = storeToRefs(store)
</script>