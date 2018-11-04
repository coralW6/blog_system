<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total">
        <div class="opt-css">
            <label class="label-css">类目：</label>
            <el-cascader expand-trigger="hover" :options="menuList" v-model="selectedOptions" @change="menuChange">
            </el-cascader>
            <div class="save" v-on:click="saveEdit()">保存</div>
            <div class="back" v-on:click="back()">返回</div>
        </div>
        <div class="title">
            <label class="title-label">标题：</label>
            <el-input class="title-input" v-model="title" placeholder="请输入标题"></el-input>
        </div>
        <div class="markdown">
             <mavon-editor v-model="content" @change="contentChange"></mavon-editor>
        </div>
    </div>
</template>