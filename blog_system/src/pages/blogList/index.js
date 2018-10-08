
export default {
    data: function() {
        return {
            params: 0,
            blogList: [
                {
                    title: "Layout_百度百科",
                    createTime: "2018/09/01",
                    brief: "Layout，动画专用名称，根据导演（或者其他人）所画的分镜表画出来的“设计图”，原画要根据Layout来画。Layout集成了分镜头的六要素：空间关系、镜头运动、镜头时间、分解动作...",
                    commentCount: 10,
                },
                {
                    title: "Layout_百度百科",
                    createTime: "2018/09/01",
                    brief: "Layout，动画专用名称，根据导演（或者其他人）所画的分镜表画出来的“设计图”，原画要根据Layout来画。Layout集成了分镜头的六要素：空间关系、镜头运动、镜头时间、分解动作...",
                    commentCount: 10,
                },
                {
                    title: "Layout_百度百科",
                    createTime: "2018/09/01",
                    brief: "Layout，动画专用名称，根据导演（或者其他人）所画的分镜表画出来的“设计图”，原画要根据Layout来画。Layout集成了分镜头的六要素：空间关系、镜头运动、镜头时间、分解动作...",
                    commentCount: 10,
                },
                {
                    title: "Layout_百度百科",
                    createTime: "2018/09/01",
                    brief: "Layout，动画专用名称，根据导演（或者其他人）所画的分镜表画出来的“设计图”，原画要根据Layout来画。Layout集成了分镜头的六要素：空间关系、镜头运动、镜头时间、分解动作...",
                    commentCount: 10,
                },
                {
                    title: "Layout_百度百科",
                    createTime: "2018/09/01",
                    brief: "Layout，动画专用名称，根据导演（或者其他人）所画的分镜表画出来的“设计图”，原画要根据Layout来画。Layout集成了分镜头的六要素：空间关系、镜头运动、镜头时间、分解动作...",
                    commentCount: 10,
                },
                {
                    title: "Layout_百度百科",
                    createTime: "2018/09/01",
                    brief: "Layout，动画专用名称，根据导演（或者其他人）所画的分镜表画出来的“设计图”，原画要根据Layout来画。Layout集成了分镜头的六要素：空间关系、镜头运动、镜头时间、分解动作...",
                    commentCount: 10,
                },
                {
                    title: "Layout_百度百科",
                    createTime: "2018/09/01",
                    brief: "Layout，动画专用名称，根据导演（或者其他人）所画的分镜表画出来的“设计图”，原画要根据Layout来画。Layout集成了分镜头的六要素：空间关系、镜头运动、镜头时间、分解动作...",
                    commentCount: 10,
                },
                {
                    title: "Layout_百度百科",
                    createTime: "2018/09/01",
                    brief: "Layout，动画专用名称，根据导演（或者其他人）所画的分镜表画出来的“设计图”，原画要根据Layout来画。Layout集成了分镜头的六要素：空间关系、镜头运动、镜头时间、分解动作...",
                    commentCount: 10,
                }
            ]
        }
    }, 
    updated() {
        this.updateForcus();
        
    },
  
    mounted() {//载入时调用，F5刷新会起效
        this.updateForcus();
    },

    beforeRouteUpdate(to, from, next){
        next();
        this.updateForcus();
    },

    methods: {
        updateForcus() {
            // console.log(">>>>>>>>>>>>>>>>>", this.$route);
            var params = this.$route.params;
            console.log("params", params);
            this.params = params;
        }
    }
}