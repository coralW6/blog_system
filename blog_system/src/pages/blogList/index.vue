<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total">
        <div class="blog-list" v-bind:key="item.id" v-for="item in blogList">
            <div class="blog-item">
                <div class="title">{{ item.title }}</div>
                <div class="brief">{{ item.brief }}</div>
                <div class="create-time">{{ item.createTime }}</div>
            </div>
        </div>
    </div>
</template>
