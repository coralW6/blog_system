import Vue from "vue";
import VueRouter from "vue-router";


// 引入组件
import index from "../pages/index/index.vue";
import about from "../pages/about/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        name: "index",
        component: index
    },
    {
        path:"/index",
        name: "index",
        component: index
    },
    {
        path: "/about",
        name: "about",
        component: about
    }
]

var router =  new VueRouter({
    routes
})
export default router;