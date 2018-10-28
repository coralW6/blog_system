
export default {
    data: function() {
        return {
            showBlogList: true,
            dirId: 0,
            loginClickCount: 0,
            isLogin: true,
            isShow: true,
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
        createBlog(id = 0) {
            this.isShow = false;
            this.$router.push({
                name: "editBlog",
                params: { id },
            });
        },
        login() {
            if (this.loginClickCount > 10) {
                this.isLogin = true;
            }
            else {
                this.loginClickCount += 1;
            }
        }
    }
}