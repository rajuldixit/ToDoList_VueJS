<script setup lang="ts">
  import AddNewTaskButton from './AddNewTaskButton.vue'
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="overflow-x-auto">
      <div class="flex justify-between py-3 pl-2">
          <h1 class="text-lg ...">
            Hi, Looks like there is no task, why don't you create one ?
          </h1>
      </div>
      <AddNewTaskButton />  
    </div>  
  </div>
</template>