import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [
      { id: 1, title: 'Task 1', description: 'Description of Task 1' },
      { id: 2, title: 'Task 2', description: 'Description of Task 2' },
    ],
  },
  mutations: {
    ADD_TASK(state, task) {
      task.id = Date.now();
      state.tasks.push(task);
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id == updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
    DELETE_TASK(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  modules: {},
});
