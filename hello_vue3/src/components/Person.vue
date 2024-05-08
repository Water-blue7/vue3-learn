<template>
    <div class="person">
        <h1>情况五：监视多个数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改所有车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from 'vue';

// reactive定义的对象不可整体修改
let person = reactive({
    name: 'zhang-san',
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})
function changeName() {
    person.name += '~'
}
function changeAge() {
    person.age += 1
}
function changeC1() {
    person.car.c1 = 'BYD'
}
function changeC2() {
    person.car.c2 = '法拉利'
}
function changeCar() {
    person.car = {
        c1: 'qq',
        c2: '五菱'
    }
}

// 监视多个数据：名字和车
// 也可以单独监视第一台车() => person.car.c1
watch([() => person.name, () => person.car], (newValue, oldValue) => {
    console.log("person.name或者person.car发生变化", newValue, oldValue);
}, { deep: true })
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