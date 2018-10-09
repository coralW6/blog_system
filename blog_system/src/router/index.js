import Vue from "vue";
import VueRouter from "vue-router";


// 引入页面
import index from "../pages/index/index.vue";
import blogList from "../pages/blogList/index.vue";
import blogDetail from "../pages/blogDetail/index.vue";
import admin from "../pages/admin/index.vue";
import editBlog from "../pages/editBlog/index.vue";

Vue.use(VueRouter);

const childrenComponent = [
    {
        path:"/blogList/:id",
        name: "blogList",
        component: blogList,
    },
    {
        path:"/blogDetail/:id",
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
    {
        path:"/editBlog/:id",
        name: "editBlog",
        component: editBlog,
    },
    
]

var router =  new VueRouter({
    routes
})
export default router;