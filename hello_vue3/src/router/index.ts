// 创建一个路由器并暴露出去

// 1、引入createRouter
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// 引入要呈现的组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";

// 2、创建路由器
const router = createRouter({
    // 路由器的工作模式
    // createWebHashHistory:路径有#，后端不用处理路径，推荐
    // createWebHistory:路径无#
    history: createWebHashHistory(),
    routes: [
        // 一个个的路由规则
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
})

// 暴露出去router
export default router