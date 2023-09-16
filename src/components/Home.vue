<script setup lang="ts">
  import TodoTable from './TodoTable.vue'
  import Search from './Search.vue'
  import Filter from './Filter.vue'
  import NoTaskView from './NoTaskView.vue'
  import AddNewTaskButton from './AddNewTaskButton.vue'

  import {useStore} from "vuex";
  import {computed} from 'vue';

  const store = useStore();
  let tasks = computed(function () {
      return store.state.tasks
  });

</script>
<template>
  <div class="grid h-screen place-items-center" v-if="tasks.length == 0">
    <NoTaskView />
  </div>
  <div class="grid w-100" v-if="tasks.length > 0">
    <div class="flex flex-col items-end my-4">
      <AddNewTaskButton />  
    </div>
    <div class="flex flex-col w-full">
      <Search />
      <Filter />
    </div>
    <div class="flex flex-col items-center w-full">
      <TodoTable />
    </div>
  </div>
 
</template>