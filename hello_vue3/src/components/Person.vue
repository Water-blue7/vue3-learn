<template>
    <div class="person">
        <h1>情况四：监视【reactive】或者【ref】定义的【对象类型】数据中的【某个属性】</h1>
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

// 监视响应式对象的某个属性，可以监听函数，所以将要监听的属性值作为一个函数的返回值来监听
/**
 * 若该属性不是对象类型，需要写成函数类型
 * 若该属性是对象类型，可以直接对象名.属性，不过建议写成函数
 */
// () => { return person.name }
watch(() => person.name, (newValue, oldValue) => {
    console.log("person.name属性发生变化", newValue, oldValue);
})
// 监视响应式对象的某个属性，并且该属性是个对象类型的，建议写成函数式，如果直接写person.car，不能监视到整个车改变
watch(() => person.car, (newValue, oldValue) => {
    console.log("person.car属性发生变化", newValue, oldValue);
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