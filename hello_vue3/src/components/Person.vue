<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
// toRefs:把reactive定义的对象中的每一组k:y转成ref
import { reactive, toRefs } from 'vue'

let person = reactive({
    name: '张三',
    age: 15
})

// 解构赋值
// toRefs将对象中每一组的ky转成ref
let { name, age } = toRefs(person)

function changeName() {
    name.value += '~'
    console.log(person.name, name.value);
}
function changeAge() {
    age.value += 1
    console.log(person.age, age.value);
}
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