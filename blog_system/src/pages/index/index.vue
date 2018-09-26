/*
    @brief: index
    @author: wanglei
    @date: 2018-09-19
*/

<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total">
        <el-container style="height: 800px; border: 1px solid #eee">
            <el-header class="header" width="300px" style="height: 80px">
                <div class="title">打杂流水账</div>
                <div class="index">首页</div>
            </el-header>
            <el-container class="main">
                <el-aside class="left-aside" width="300px">
                    <el-menu default-active="2" router="true" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item index="/">选项1</el-menu-item>
                            <el-menu-item index="/index">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            <el-submenu class="el-submenu" index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航二</span>
                            </template>
                            <el-menu-item class="el-menu-item" index="/">选项1</el-menu-item>
                            <el-menu-item index="/index">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main class="main-content">
                    <router-view></router-view>
                </el-main>
            </el-container>
            <el-footer class="footer">Copyright © 2018-2018 打杂流水账 coral66.com All Rights Reserved. | 京ICP备18001768号-1</el-footer>
        </el-container>
    </div>
</template>





