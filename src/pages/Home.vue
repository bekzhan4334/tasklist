<template>
    <div class="home">
      <h1>Welcome to the Task Manager App</h1>
      <router-link to="/tasks">Go to Task Management</router-link>
    </div>
  </template>
  
<style scoped>
.home {
  text-align: center;
  padding: 50px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

router-link {
  text-decoration: none;
  color: #007bff;
  font-size: 18px;
}

router-link:hover {
  text-decoration: underline;
}
</style>
