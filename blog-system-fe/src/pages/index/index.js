
import blogService from '../../utils/services';
import config from '../../utils/config';
export default {
    data: function() {
        return {
            showBlogList: true,
            dirId: 0,
            dirList: [],
        }
    }, 
    updated() {//数据更改导致的虚拟DOM重新渲染和打补丁时调用
        //this.initDIrList();
    },
  
    mounted() {//载入时调用，F5刷新会起效
        this.initDIrList();
    },

    methods: {
        initDIrList() {
            var me = this;
            blogService.sendRequest({
                url: config.PATHS.getBlogDirList,
                method: "POST",
                data: {},
                doneHandler: function(backendData) {
                    me.dirList = backendData.dirList;
                }
            });
        }
         
    }
}