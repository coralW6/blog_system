import blogService from '../../utils/services';
import config from '../../utils/config';
import { throws } from 'assert';

export default {
    data: function() {
        return {
            menuList: [],
            oldMenuText: "",
            editMenuText: "",
            selectItem: "",
            isShowInput: false,
        }
    },
  
    mounted() {//载入时调用，F5刷新会起效
        console.log("mounted");
        this.initMenuList();
    },

    methods: {
        initMenuList() {
            var me = this;
            me.oldMenuText = "";
            me.editMenuText = "";
            me.selectItem = "";
            me.isShowInput = false,
            blogService.sendRequest({
                url: config.PATHS.getMenuList,
                method: "POST",
                data: {},
                doneHandler: function(backendData) {
                    me.menuList = backendData.menuList;
                }
            });        
        },
        chooseVal(e) {
            var vlen = e.length;
            this.selectItem = vlen == 1 ? e[0] : e[1];
            for(var i=0; i<this.menuList.length; i++) {
                var item = this.menuList[i];
                var childMenuList = this.menuList[i].children;
                if(vlen == 1) {
                    if(item.value == this.selectItem) {
                        this.editMenuText = item.label;
                    }
                } else if(vlen == 2) {
                    for(var j=0; j<childMenuList.length; j++) {
                        var childItem = childMenuList[j];
                        if(childItem.value == this.selectItem) {
                            this.editMenuText = childItem.label;
                        }
                    }
                }
                
            }
            if(this.selectItem && this.editMenuText) {
                this.oldMenuText = this.editMenuText;
                this.isShowInput = true;
            } else {
                this.isShowInput = false;
            }
            // console.log(this.selectItem, this.editMenuText);
        },
        editMenu() {
            var me = this;
            var isValid = false;
            
            if(me.editMenuText == "") {
                alert("菜单节点不能修改为空");
                isValid = false;
            } else {
                isValid = true;
            }

            if(me.editMenuText == me.oldMenuText) {
                alert("请修改后再提交");
                isValid = isValid && false;
            } else {
                isValid = isValid && true;
            }

            if(isValid) {
                blogService.sendRequest({
                    url: config.PATHS.editMenu,
                    method: "POST",
                    data: {
                        id: me.selectItem,
                        menuName: me.editMenuText,
                    },
                    doneHandler: function(backendData) {
                        if(backendData.status == 1) {
                            alert("修改成功");
                            me.initMenuList();
                        }
                    }
                }); 
            }
        }
    }
}