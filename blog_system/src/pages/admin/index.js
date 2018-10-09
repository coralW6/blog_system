export default {
    data: function() {
        return {
            
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
        createBlog() {
            this.$router.push({
                path: "editBlog/0",
            });
        }
    }
}