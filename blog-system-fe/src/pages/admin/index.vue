<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total-css">
        <el-container style="height: 640px; border: 1px solid #eee">
            <el-header class="header" width="300px" style="height: 80px">
                <div class="title">打杂流水账</div>
                <div class="index">管理中心</div>
                <div v-if="isLogin" v-on:click="createBlog()">写文章</div>
                <div class="login" v-on:click="login()"></div>
            </el-header>
            <el-container v-if="isLogin" class="main">
                <el-aside class="left-aside" width="300px">
                    <el-menu :router="true" class="el-menu-vertical">
                        <el-submenu v-bind:key="item.id" v-for="item in dirList" :index="item.index">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>{{ item.name }}</span>
                            </template>
                            <el-menu-item v-if="item.childrenList != null" v-bind:key="childrenItem.id" v-for="childrenItem in item.childrenList" :index="childrenItem.index">
                                {{ childrenItem.name }}
                            </el-menu-item>
                            <el-submenu v-if="item.childrenDir != null" class="el-submenu" :index="item.childrenDir.index">
                                <template slot="title">{{ item.childrenDir.name }}</template>
                                <el-menu-item v-bind:key="grandsonItem.id" v-for="grandsonItem in item.childrenDir.childrenList" :index="grandsonItem.index">
                                    {{ grandsonItem.name }}
                                </el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main class="main-content">
                    <router-view></router-view>
                </el-main>
            </el-container>
            <div v-else>没有权限</div>
        </el-container>
        
    </div>
</template>
    