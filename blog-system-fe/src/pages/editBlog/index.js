import blogService from '../../utils/services';
import config from '../../utils/config';
export default {
    data: function() {
        return {
            title: "",
            content: "",
            isMenuChange: false,
            isContentChange: false,
            menuList: [],
            selectedOptions: [],
        }
    }, 
    updated() {//路径及按键操作时调用
        // this.initMenuList();
    },
  
    mounted() {//载入时调用，F5刷新会起效
        this.initMenuList();
    },

    methods: {
        initMenuList() {
            var me = this;
            blogService.sendRequest({
                url: config.PATHS.getMenuList,
                method: "POST",
                data: {},
                doneHandler: function(backendData) {
                    me.menuList = backendData.menuList;
                }
            });
        },
        menuChange() {
            this.isMenuChange = true;
        },
        contentChange() {
            this.isContentChange = true;
        },

        saveEdit() {
            var me = this;
            var isValid = false;
            console.log(me.isMenuChange, me.isContentChange);
            if(me.title == "") {
                isValid = false;
                alert("标题不能为空！！！")
            } else {
                isValid = true;
            }
            if(me.content == "") {
                isValid = isValid && false;
                alert("正文不能为空！！！")
            } else {
                isValid = isValid && true;
            }
            if(!me.selectedOptions[1]) {
                isValid = isValid && false;
                alert("请选择文章分类！！！")
            } else {
                isValid = isValid && true;
            }
            if(isValid) {
                blogService.sendRequest({
                    url: config.PATHS.saveBlog,
                    method: "POST",
                    data: {
                        title: me.title,
                        content: me.content,
                        menuId: me.selectedOptions[1],
                    },
                    doneHandler: function(backendData) {
                        me.isMenuChange = false;
                        me.isContentChange = false;
                        if(backendData.status == 1) {
                            alert("保存成功");
                        } else {
                            alert("保存失败");
                        }
                    }
                });
            }
        }
        
    }
}