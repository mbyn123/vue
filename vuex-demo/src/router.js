import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
    mode:"history",
    base:'/',
    routes:[
        {
            path:"/login",
            name:'login',
            component:()=> import('./page/login.vue')
        },
        {
            path:"/",
            name:"home",
            component:()=> import ('./page/home.vue')
        }
    ]
})

export default router