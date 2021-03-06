import Vue from 'vue'
import Router  from 'vue-router'
import Home from '../views/Home.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import tester from '../components/tester.vue';


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue') 
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../views/Library.vue') 
  },
  {
    path: '/Bookpage/:id',
    name: 'Bookpage',
    component: () => import('../components/Bookpage.vue') 
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: () => import('../components/Signup.vue') 
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue') 
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/tester',
    name: 'tester',
    component: tester
  },
]
});
export default router;
