export default {
    data: function() {
        return {
            title: title,
            dirId: dirId,
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
            console.log(">>>>>", this.$route.path);
            // console.log(title, dirId);
        }
    }
}