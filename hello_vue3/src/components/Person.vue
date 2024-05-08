<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车价格</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstName">修改第一个游戏名称</button>
    </div>
</template>

<script lang="ts" setup name="Person">
// 响应式对象类型数据
import { reactive } from 'vue';

// 数据
let car = reactive({
    brand: '奔驰',
    price: 100
})
let games = reactive([
    { id: 'askdlgha01', name: '王者荣耀' },
    { id: 'askdlgha02', name: '英雄联盟' },
    { id: 'askdlgha03', name: 'PUBG' }
])

// 方法
function changePrice() {
    car.price += 10
}
function changeFirstName() {
    games[0].name = '王者农药'
    console.log(games[0].name);

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