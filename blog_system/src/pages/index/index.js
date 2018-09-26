import about from '@/pages/about/index.vue'
import leftguide from '@/pages/leftGuide/index.vue'
import topbar from '@/pages/topBar/index.vue'
export default {
    components: {
        about,
        leftguide,
        topbar
    },
    data: function() {
        return {
            data: "test"
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
            console.log(this.$route.path);
        }
    }
}