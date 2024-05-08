<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Person", //组件名
    // 组合式API使用方法
    setup() {
        // console.log(this) // vue3中已经弱化this了

        // 数据
        let name = '张三' // 此时的name不是响应式的
        let age = 19 // 此时的age不是响应式的
        let tel = '13333333' // 此时的tel不是响应式的

        // 方法
        function changeName() {
            console.log('changeName')
            name = 'zhang-san' // 确实修改了name的值，但不是响应式的，页面没有变化
            console.log(name)
        }
        function changeAge() {
            age += 1
        }
        function showTel() {
            alert(tel)
        }

        // return { name: name, age: age }
        return { name, age, changeName, changeAge, showTel }
    }
};
</script>


<style scoped>
button {
    margin: 0 5px;
}
</style>