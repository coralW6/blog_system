
export default {
    data: function() {
        return {
            showBlogList: true,
            dirId: 0,
            loginClickCount: 0,
            isLogin: false,
            isShowAdminMenu: true,
            isShowRoute: true,
        }
    },
  
    mounted() {//载入时调用，F5刷新会起效
        console.log("mounted");
        // this.initAdmin();
    },

    methods: {
        initAdmin() {
            var me = this;
            console.log("initAdmin: isShowAdminMenu ", me.isShowAdminMenu);
            me.isLogin = true;
            me.isShowAdminMenu = true;
            me.isShowRoute = false;
        },

        createBlog(id = 0) {
            this.isShowAdminMenu = false;
            this.isShowRoute = true;
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
            this.isShowRoute = true;
            this.$router.push({
                name: "addMenu",
            });
        },

        editMenu() {
            console.log("编辑目录");
            this.isShowRoute = true;
            this.$router.push({
                name: "editMenu",
            });
        },
        editBlog() {
            console.log("编辑博客");
        }
    }
}