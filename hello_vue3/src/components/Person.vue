<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车价格</button>
        <button @click="changeCar">修改汽车</button>
        <br>
    </div>
</template>

<script lang="ts" setup name="Person">
// 用ref实现响应式对象类型数据，底层用的是reactive
import { ref, reactive } from 'vue';

// 数据
let car = reactive({
    brand: '奔驰',
    price: 100
})

// 方法
function changePrice() {
    car.price += 10
}
function changeCar() {
    // 用赋值的方式，页面无任何变化
    // 使用Object的assign方法
    Object.assign(car, { brand: '宝马', price: 200 })
}
// 不用写return了
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