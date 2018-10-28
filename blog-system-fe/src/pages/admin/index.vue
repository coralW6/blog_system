<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total-css">
        <el-container style="height: 640px; border: 1px solid #eee">
            <el-header class="header" width="300px" style="height: 80px">
                <div class="title">打杂流水账</div>
                <div class="index">管理中心</div>
                <div class="login" v-on:click="login()"></div>
            </el-header>
            <el-main class="main-content">
                <div v-if="isLogin">
                    <div v-if="isShow" v-on:click="createBlog()">写文章</div>
                    <router-view v-else></router-view>
                </div>
                <div v-else>没有权限</div>
            </el-main>
        </el-container>
    </div>
</template>
    