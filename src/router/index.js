import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "Main",
    redirect: "/home",
    component: () =>
        import ("../views/Main.vue"),
    children: [{
            path: "/home",
            name: 'home',
            component: () =>
                import ('@/views/Home.vue')
        },
        {
            path: "/user",
            name: 'user',
            component: () =>
                import ('@/views/User.vue')
        },
        {
            path: "/singer",
            name: 'singer',
            component: () =>
                import ('@/views/Singer.vue')
        },
        {
            path: "/songlist",
            name: 'songlist',
            component: () =>
                import ('@/views/SongList.vue')
        },
    ]
}]

// 创建router实例对象路由器
const router = new VueRouter({
    mode: "history",
    routes
})
export default router