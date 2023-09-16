import { createStore } from "vuex";

export default createStore({
    state: {
      tasks: []
    },
    mutations: {
      addTask(state, task) {
        state.tasks.push(task);
      },
      updateTask(state, updatedItem) {
        state.tasks = state.tasks.map((task) => {
          if (task.id == updatedItem.id) {
            return updatedItem;
          }
  
          return task;
        });
      },
      removeTask(state, item) {
        state.tasks = state.tasks.filter((task) => {
          return task.id != item.id;
        });
      }
    },
    getters: {
      getTasks: (state) => {
        
        return state.tasks;
      }
    }
  });