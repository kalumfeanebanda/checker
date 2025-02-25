import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';

import Registration from "@/views/Registration.vue";

import ListCategory from "@/views/ListCategory.vue";
import CategoryForm from "@/views/CategoryForm.vue";



const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/registration', name: 'Registration', component: Registration},
    {path:'/profile',name:'Profile',component: Profile},// Ensure this route is correct


{ path: '/listCategory', name: 'ListCategory', component: ListCategory },
{ path: '/add-category', name: 'AddCategory', component: CategoryForm },
{ path: '/edit-category/:id', name: 'EditCategory', component: CategoryForm, props: true },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


