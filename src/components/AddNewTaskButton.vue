<script setup lang="ts">
  import { ref } from 'vue'
  import AddTask from './Modals/AddTask.vue'  
  import {useStore} from "vuex";
  import {computed} from 'vue';

  const store = useStore();
  const openAddTaskModal = ref(false);
  
  function closeDialogEvent (event) {
    this.openAddTaskModal = event
  }
</script>
<template>
   <div class="flex flex-col items-center">
        <button @click="openAddTaskModal = true" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Task</button>
    </div>
    <div  v-if="openAddTaskModal">
        <AddTask @closeDialog="closeDialogEvent($event)" />
    </div>
</template>