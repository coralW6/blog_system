import Vue from "vue";
import VueRouter from "vue-router";


// 引入页面
import index from "../pages/index/index.vue";
import blogList from "../pages/blogList/index.vue";
import blogDetail from "../pages/blogDetail/index.vue";
import admin from "../pages/admin/index.vue"

Vue.use(VueRouter);

const childrenComponent = [
    {
        path:"/dirId/:id",
        name: "blogList",
        component: blogList,
    },
    {
        path:"/detail/:id",
        name: "blogDetail",
        component: blogDetail
    }
]

const routes = [
    {
        path:"/",
        redirect: {
            name: 'index'
        }
    },
    {
        path:"/index",
        name: "index",
        component: index,
        children: childrenComponent,
    },
    {
        path:"/admin",
        name: "admin",
        component: admin,
    },
]

var router =  new VueRouter({
    routes
})
export default router;