<template>
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue';

let person = ref({
    name: 'zhang-san',
    age: 18
})

function changeName() {
    person.value.name += '~'
}
function changeAge() {
    person.value.age += 1
}
function changePerson() {
    person.value = { name: 'li-si', age: 20 }
}

/*
监视对象类型数据，监听的其实是地址值，若想监视对象内部属性值的变化，需要手动开启深度监视
第一个参数：被监视对象
第二个参数：监视回调
第三个参数：配置对象（deep、immediate等等）
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