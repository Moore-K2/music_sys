import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "Main",
    component: () =>
        import ("../views/Main.vue"),
    children: []
}]

// 创建router实例对象路由器
const router = new VueRouter({
    mode: "history",
    routes
})
export default router