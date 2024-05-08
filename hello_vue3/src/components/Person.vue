<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup name="Person">
// 响应式
import { ref } from 'vue'

// 数据
let name = ref('张三')
let age = ref(19)
let tel = '13333333'

// 方法
function changeName() {
    console.log('changeName')
    name.value = 'zhang-san' // 确实修改了name的值，但不是响应式的，页面没有变化
    console.log(name.value)
}
function changeAge() {
    age.value += 1
}
function showTel() {
    alert(tel)
}

// 不用写return了
</script>

<style scoped>
.person {
    background-color: #7a0505;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>