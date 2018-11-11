<script src='./index.js'></script>
<style lang='less' scoped src='./index.less'></style>
<template>
    <div class="total-css">
        <div>
            <el-radio v-model="radio" label="1" @change="initChooseVal()">添加根菜单节点</el-radio>
            <el-radio v-model="radio" label="2" @change="initChooseVal()">添加子菜单节点</el-radio>
        </div>
        <div v-if="radio==1">
            <el-input placeholder="添加根菜单节点" v-model="addMenuText" class="input-with-select">
                <el-button slot="append" @click.native="addMenu">添加</el-button>
            </el-input>
        </div>
        <div v-if="radio==2">
            <el-input placeholder="添加子菜单" v-model="addMenuText" class="input-with-select">
                <el-select v-model="selectItem" slot="prepend" placeholder="请选择" class="select-css">
                    <el-option v-bind:key="item.id" v-for="item in menuList" :label="item.label" :value="item.value" v-if="item.children!=null">
                    </el-option>
                </el-select>
                <el-button slot="append" @click.native="addMenu">添加</el-button>
            </el-input>
        </div>
        
    </div>
</template>