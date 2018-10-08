<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total">
        <div class="blog-item" v-bind:key="item.id" v-for="item in blogList">
            {{ item }}
        </div>
    </div>
</template>
