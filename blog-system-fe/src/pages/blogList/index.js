import blogService from '../../utils/services';
import config from '../../utils/config';

export default {
    data: function() {
        return {
            params: 0,
            blogList: [],
        }
    }, 
    // updated() {
    //     this.updateForcus();
    // },
  
    mounted() {//载入时调用，F5刷新会起效
        this.initBlogList();
    },

    beforeRouteUpdate(to, from, next){
        next();
        this.initBlogList();
    },

    methods: {
        initBlogList() {
            var me = this;
            // console.log(">>>>>>>>>>>>>>>>>", this.$route);
            var params = this.$route.params;
            var menuId = params.id;
            console.log(menuId);
            blogService.sendRequest({
                url: config.PATHS.getBlogList,
                method: "POST",
                data: {
                    menuId: menuId
                },
                doneHandler: function(backendData) {
                    me.blogList = backendData.blogList;
                }
            });
        },

        showDetail(id) {
            this.$router.push({
                name: "blogDetail",
                params: { id },
            });
            console.log("showDetail", id);
        }
    }
}