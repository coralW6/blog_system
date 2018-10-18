
/**
 * @file 获取目录列表
 * @author wanglei
 */

exports.route = {
    url: "/app/getBlogDirList",
    retData: {
        code: 0,
        msg: "",
        data: {
            dirList: [
                {
                    index: "/blogList/0",
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
    }
}
    

