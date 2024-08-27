<template>
    <div class="tasks">
      <TaskList />
    </div>
  </template>
  
  <script>
  import TaskList from '@/components/TaskList.vue';
  
  export default {
    components: {
      TaskList,
    },
  };
  </script>
  
<style scoped>
.tasks {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tasks > * {
  margin: 0;
  padding: 0;
}
</style>

  