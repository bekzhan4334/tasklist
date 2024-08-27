<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Tasks</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #333;
}

nav {
  padding: 10px;
  background-color: #e0e0e0;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

nav a {
  text-decoration: none;
  color: #007bff;
  margin: 0 10px;
}

nav a:hover {
  text-decoration: underline;
}

router-view {
  padding: 20px;
}
</style>

