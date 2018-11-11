<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total-css">
        <div>
            <el-cascader :options="menuList" clearable change-on-select @change="chooseVal"></el-cascader>
        </div>
        <el-input v-if="isShowInput" placeholder="修改该节点的值" v-model="editMenuText" class="input-with-select">
            <el-button slot="append" @click.native="editMenu">修改</el-button>
        </el-input>
    </div>
</template>