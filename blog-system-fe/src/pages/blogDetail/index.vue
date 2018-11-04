<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>

<template>
    <div class="total-css">
        <div class="title">{{ title }}</div>
        <div class="ext-info">
            <div class="create-time">{{ createTime }}</div>
            <div class="page-view">阅读数：{{ pageView }}</div>
        </div>
        <div class="split-css"></div>
        <div class="content" v-html="content"></div>
    </div>
</template>