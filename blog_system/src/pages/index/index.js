import router from "../../router";

// import blogList from '@/pages/blogList/index.vue'

export default {
    // components: {
    //     blogList
    // },
    data: function() {
        return {
            showBlogList: true,
            dirId: 0,
            dirList: [
                {
                    index: "0",
                    name: "导航一",
                    childrenList: 
                        [
                            {name: "选项一", index: "/dirId/1"},
                            {name: "选项二", index: "/dirId/2"},
                        ],
                    childrenDir: {
                        name: "选项三", 
                        index: "/dirId/3", 
                        childrenList: [
                            {name: "选项666", index: "/dirId/10"},
                            {name: "选项777", index: "/dirId/11"},
                        ]
                    },
                },
                {
                    index: "/dirId/1100",
                    name: "导航二",
                    childrenList: [
                        {name: "选项1", index: "/dirId/4"},
                        {name: "选项2", index: "/dirId/5"},
                        {name: "选项3", index: "/dirId/6"},
                    ]
                },
            ],
        }
    }, 
    updated() {//路径及按键操作时调用
        this.updateForcus();
    },
  
    mounted() {//载入时调用，F5刷新会起效
        this.updateForcus();
    },

    methods: {
        updateForcus() {
        },
        
        showDetail() {
            this.$router.push({
                name: "blogDetail",
            });
            console.log("showDetail");
        }
    }
}