import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "Main",
    component: () =>
        import ("../views/Main.vue"),
    children: [{
        path: "/home",
        name: 'home',
        component: () =>
            import ('@/views/home.vue')
    }]
}]

// 创建router实例对象路由器
const router = new VueRouter({
    mode: "history",
    routes
})
export default router