import {
    type RouteRecordRaw,
    createRouter,
    createWebHashHistory,
} from "vue-router";



const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: '/login'
    },
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            hidden: true,
            index: 1,
        },
    },
    {
        path: "/index",
        component: () => import("@/views/index/index.vue"),
        meta: {
            hidden: false,
            index: 1,
        },
    },
    {
        path: "/contacts",
        component: () => import("@/views/contacts/index.vue"),
        meta: {
            hidden: false,
            index: 2,
        },
    },
    {
        path: "/find",
        component: () => import("@/views/find/index.vue"),
        meta: {
            hidden: false,
            index: 3,
        },
    },
    {
        path: "/me",
        component: () => import("@/views/me/index.vue"),
        meta: {
            hidden: false,
            index: 4,
        },
    },
    {
        path: "/chat",
        component: () => import("@/views/chat/chatFriend.vue"),
        meta: {
            hidden: true,
        },
    },
    {
        path: "/addFriend",
        component: () => import("@/views/addFriend/index.vue"),
        meta: {
            hidden: true,
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router