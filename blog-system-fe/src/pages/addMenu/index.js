import blogService from '../../utils/services';
import config from '../../utils/config';

export default {
    data: function() {
        return {
            menuList: [],
            addMenuText: "",
            selectItem: "",
            radio: "2",
        }
    },
  
    mounted() {//载入时调用，F5刷新会起效
        console.log("mounted");
        this.initMenuList();
    },

    methods: {
        initMenuList() {
            var me = this;
            me.addMenuText = "";
            me.selectItem = "";
            me.radio = "2";
            blogService.sendRequest({
                url: config.PATHS.getMenuList,
                method: "POST",
                data: {},
                doneHandler: function(backendData) {
                    me.menuList = backendData.menuList;
                }
            });        
        },
        initChooseVal() {
            this.selectItem = "";
        },
        addMenu() {
            var me = this;
            var isValid = false;
            if(me.selectItem == "") {
                if(me.radio == "1") {
                    isValid = true;
                    me.selectItem = "0";
                } else if(me.radio == "2"){
                    alert("父菜单不能为空！");
                    isValid = false;
                }
            } else {
                isValid = true;
            }
            if(me.addMenuText == "") {
                alert("新增菜单节点不能为空");
                isValid = isValid && false;
            } else {
                isValid = isValid && true;
            }
            if(isValid) {
                blogService.sendRequest({
                    url: config.PATHS.addMenu,
                    method: "POST",
                    data: {
                        parentId: me.selectItem,
                        menuName: me.addMenuText,
                    },
                    doneHandler: function(backendData) {
                        if(backendData.status == 1) {
                            alert("添加成功");
                            me.initMenuList();
                        }
                    }
                }); 
            }
        }
    }
}