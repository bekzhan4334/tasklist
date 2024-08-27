<template>
    <div class="task-list">
      <h2>Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <!-- Replace or remove the router-link pointing to 'TaskDetails' -->
          <span>{{ task.title }}</span>
          <button @click="editTask(task)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
      <router-link to="/add-task">Add New Task</router-link>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      tasks() {
        return this.$store.state.tasks;
      },
    },
    methods: {
      editTask(task) {
        this.$router.push({ name: 'EditTask', params: { id: task.id } });
      },
      deleteTask(id) {
        this.$store.commit('DELETE_TASK', id);
      },
    },
  };
  </script>
  
<style scoped>
  .task-list {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: auto;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  
  span {
    color: #555;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    font-size: 14px;
    margin-left: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  router-link {
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    color: #007bff;
    font-size: 16px;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
</style>
  
  