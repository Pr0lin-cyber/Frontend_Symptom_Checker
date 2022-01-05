import Vue from 'vue'
import VueRouter from 'vue-router'
import homescreen from "@/Pages/homescreen";
import erklärung from "@/Pages/erklärung";
import chatbot from "@/Pages/chatbot";

Vue.use(VueRouter) //Important to use the Vue-Router

//the basic routing for the pwa
const routes = [
    {
        path: '/',
        component: homescreen,
    },
    {
        path: '/Chatbot',
        component: chatbot,
    },
    {
        path: '/Erklärung',
        component : erklärung,
    },
]

//initalizing the const Router as new Router
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
//export of the routing to the main.js
export default router
