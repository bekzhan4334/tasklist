<template>
    <div class="task-form">
      <h2>{{ isEdit ? 'Edit Task' : 'Add New Task' }}</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Task Title:</label>
          <input type="text" v-model="task.title" required />
        </div>
        <div>
          <label for="description">Task Description:</label>
          <textarea v-model="task.description" required></textarea>
        </div>
        <button type="submit">{{ isEdit ? 'Update Task' : 'Add Task' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: {
          id: null,
          title: '',
          description: '',
        },
      };
    },
    computed: {
      isEdit() {
        return this.$route.name === 'EditTask';
      },
    },
    created() {
      if (this.isEdit) {
        const taskId = this.$route.params.id;
        const task = this.$store.state.tasks.find((t) => t.id == taskId);
        if (task) {
          this.task = { ...task };
        }
      }
    },
    methods: {
      submitForm() {
        if (this.isEdit) {
          this.$store.commit('UPDATE_TASK', this.task);
        } else {
          this.$store.commit('ADD_TASK', this.task);
        }
        this.$router.push('/');
      },
    },
  };
  </script>
  
<style scoped>
.task-form {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  color: #555;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>

  