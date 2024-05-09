<template>
    <div class="person">
        <h2>当前sum：{{ sum }}</h2>
        <button @click="add">sum+1</button>
    </div>
</template>

<script lang="ts">
export default {
    /* eslint-disable */
    // 上一行作用是关闭语法检查
    name: 'Person',
    data() {
        return {
            sum: 1
        }
    },
    // 方法
    methods: {
        add() {
            this.sum += 1
        }
    },
    beforeCreate() {
        console.log('组件创建前');
    },
    created() {
        console.log('组件创建完毕');
    },
    beforeMount() {
        console.log('挂载前');
    },
    mounted() {
        console.log('挂载完毕');
    },
    beforeUpdate() {
        console.log('更新前');
    },
    updated() {
        console.log('更新完毕');
    },
    beforeDestroy() {
        console.log('销毁前');
    },
    destroyed() {
        console.log('销毁完毕');
    },
}
</script>

<style scoped>
.person {
    background-color: #931313;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>