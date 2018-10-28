
/**
 * @file 管理中心获取目录结构
 * @author wanglei
 */

exports.route = {
    url: "/app/getMenuList",
    retData: {
        code: 0,
        msg: "",
        data: {
            menuList: [
                {
                    value: '1',
                    label: '指南',
                    children: [
                        {
                            value: '2',
                            label: '一致'
                        }, {
                            value: '3',
                            label: '反馈'
                        }, {
                            value: '4',
                            label: '效率'
                        }, {
                            value: '5',
                            label: '可控'
                        },
                    ],
                },
            ]
        }
    }
}
    

