<template>

  <div
      v-for="task in filteredTasks"
      :key="task.id"
      class="flex border-t border-gray-200 py-2"
  >
    <Task :task="task"/>
  </div>

</template>

<script setup>
import {storeToRefs} from "pinia";
import {useTasks} from "@/stores/TaskStore";
import Task from "@/components/Task.vue";

const store = useTasks()
const {filteredTasks} = storeToRefs(store)
</script>