
export default {
    data: function() {
        return {
            showBlogList: true,
            dirId: 0,
            loginClickCount: 0,
            isLogin: false,
            isShow: true,
        }
    },
  
    mounted() {//载入时调用，F5刷新会起效
        console.log("mounted");
        // this.initAdmin();
    },

    methods: {
        initAdmin() {
            var me = this;
            console.log("initAdmin: isShow ", me.isShow);
            me.isLogin = true;
            me.isShow = true;
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
        },
        addMenu() {
            console.log("添加目录");
        },
        editMenu() {
            console.log("编辑目录");
        },
        editBlog() {
            console.log("编辑博客");
        }
    }
}