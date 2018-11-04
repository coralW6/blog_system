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
                    <el-aside v-if="isShow" class="left-aside" width="300px">
                        <el-menu :router="false" class="el-menu-vertical">
                            <el-submenu index="0">
                                <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span>目录管理</span>
                                </template>
                                <el-menu-item index="1" v-on:click="addMenu()">
                                    <i class="el-icon-tickets"></i>
                                    添加目录
                                </el-menu-item>
                                <el-menu-item index="2" v-on:click="editMenu()">
                                    <i class="el-icon-tickets"></i>
                                    修改目录
                                </el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span>博客管理</span>
                                </template>
                                <el-menu-item index="4" v-on:click="createBlog()">
                                    <i class="el-icon-tickets"></i>
                                    写博客
                                </el-menu-item>
                                <el-menu-item index="5" v-on:click="editBlog()">
                                    <i class="el-icon-tickets"></i>
                                    修改博客
                                </el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-aside>
                    <router-view v-else v-on:refreshAdmin="initAdmin"></router-view>
                </div>
                <div v-else>没有权限</div>
            </el-main>
        </el-container>
    </div>
</template>
    