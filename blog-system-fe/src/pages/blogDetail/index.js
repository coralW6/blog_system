import blogService from '../../utils/services';
import config from '../../utils/config';
import marked from 'marked';

export default {
    data: function() {
        return {
            title: "",
            content: "",
        }
    }, 
  
    mounted() {//载入时调用，F5刷新会起效
        this.initBlogDetail();
    },

    // created(){
    //     console.log(">>>>created")
    //     this.initBlogDetail();
    // },

    methods: {
        initBlogDetail() {
            var me = this;
            var params = this.$route.params;
            var blogId = params.id;
            console.log(">>>>>", blogId);
            blogService.sendRequest({
                url: config.PATHS.getBlogDetail,
                method: "POST",
                data: {
                    blogId: blogId
                },
                doneHandler: function(backendData) {
                    me.title = backendData.title;
                    me.content = marked(backendData.content);
                }
            });
        }
        
    }
}