<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}</h2>
        <h2>学校：{{ school }}，地址：{{ address }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang='ts' name="Count">
import { ref, toRefs } from "vue";
import { storeToRefs } from "pinia";
// 引入useCountStore
import { useCountStore } from "@/store/count";

const countStore = useCountStore()
// 解构赋值、但是会失去响应式，所以使用storeToRefs
const { sum, school, address } = storeToRefs(countStore)

// 但是不推荐toRefs(countStore)，因为countStore中所有的数据都会被转成ref类型
// console.log('==toRefs==',toRefs(countStore));
// storeToRefs只会关注store中数据，不会对方法进行ref包裹
// console.log('==storeToRefs==',storeToRefs(countStore));


// 数据
let n = ref(1) // 用户选择的数字

function add() {
    if (countStore.sum < 10) {
        countStore.sum += n.value
    }
}

function minus() {
    countStore.$patch({
        sum: countStore.sum -= n.value
    })
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>
