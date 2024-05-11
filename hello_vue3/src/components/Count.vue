<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
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
import { ref } from "vue";
// 引入useCountStore
import { useCountStore } from "@/store/count";

const countStore = useCountStore()
// 以下两种方式都能从store中拿到数据
// console.log('!!!!!!', countStore.sum);
// console.log('!!!!!!', countStore.$state.sum);


// 数据
let n = ref(1) // 用户选择的数字

function add() {
    // 第一种修改方式
    // countStore.sum += n.value

    // 第二种修改方式，可以批量变更（如果有其它数据）
    // countStore.$patch({
    //     sum: countStore.sum += n.value
    // })

    // 还可以加上判断语句
    if (countStore.sum < 10) {
        // 第一种
        countStore.sum += n.value
        // 第二种
        // countStore.$patch({
        //     sum: countStore.sum += n.value
        // })
    }


    // 第三种，actions，有点麻烦，不用这个
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
