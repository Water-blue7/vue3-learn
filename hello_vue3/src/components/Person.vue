<template>
    <div class="person">
        <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue';

// reactive定义的对象不可整体修改
let person = reactive({
    name: 'zhang-san',
    age: 18
})

function changeName() {
    person.name += '~'
}
function changeAge() {
    person.age += 1
}
function changePerson() {
    Object.assign(person, { name: 'li-si', age: 20 })
}

/*
监视：情况三：监视【reactive】定义的【对象类型】数据
深度监视：默认开启
*/
const stopWatch = watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
}, {
    deep: true
})
</script>

<style scoped>
.person {
    background-color: #d34343;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

ul {
    font-size: 20px;
}
</style>