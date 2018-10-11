
import blogService from '../../utils/services';
export default {
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
                            {name: "选项一", index: "/blogList/1"},
                            {name: "选项二", index: "/blogList/2"},
                        ],
                    childrenDir: {
                        name: "选项三", 
                        index: "/blogList/3", 
                        childrenList: [
                            {name: "选项666", index: "/blogList/10"},
                            {name: "选项777", index: "/blogList/11"},
                        ]
                    },
                },
                {
                    index: "/blogList/1100",
                    name: "导航二",
                    childrenList: [
                        {name: "选项1", index: "/blogList/4"},
                        {name: "选项2", index: "/blogList/5"},
                        {name: "选项3", index: "/blogList/6"},
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
            blogService.sendRequest({
                url: "/test",
                method: "POST",
                data: {
                    "a": 1,
                    "b": 2,
                },
                doneHandler: function(backendData) {
                    console.log(backendData);
                }
            });
            
        },
         
    }
}