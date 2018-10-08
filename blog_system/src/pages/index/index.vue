/*
    @brief: index
    @author: wanglei
    @date: 2018-09-19
*/

<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total">
        <el-container style="height: 700px; border: 1px solid #eee">
            <el-header class="header" width="300px" style="height: 80px">
                <div class="title">打杂流水账</div>
                <div class="index">首页</div>
                <!-- <div v-on:click="showDetail()">详情页</div> -->
            </el-header>
            <el-container class="main">
                <el-aside class="left-aside" width="300px">
                    <!-- default-active="2" router="false"  @open="handleOpen" @close="handleClose" -->
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
            <el-footer class="footer">Copyright © 2018-2018 打杂流水账 coral66.com All Rights Reserved. | 京ICP备18001768号-1</el-footer>
        </el-container>
    </div>
</template>





