<template>
  <div id='app'>
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <!-- <router-link to="/index">index</router-link>
      <router-link to="/about">About</router-link> -->
    </header>
    <router-view></router-view>
    <div class="footer">Copyright © 2018-2018 打杂流水账 coral66.com All Rights Reserved. | 京ICP备18001768号-1</div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang='less' scoped>
    .footer {
        width: 100%;
        text-align: center;
        color: #999;
        padding-top: 20px;
    }
</style>
