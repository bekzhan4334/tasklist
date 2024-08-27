import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Tasks from '@/pages/Tasks.vue';
import TaskForm from '@/components/TaskForm.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/tasks', 
    name: 'Tasks', 
    component: Tasks 
  },
  { 
    path: '/add-task', 
    name: 'AddTask', 
    component: TaskForm 
  },
  { 
    path: '/edit-task/:id', 
    name: 'EditTask', 
    omponent: TaskForm 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
