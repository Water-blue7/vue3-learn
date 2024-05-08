<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前值：{{ sum }}</h2>
        <button @click="changeSum">当前值+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue';

let sum = ref(0)

function changeSum() {
    sum.value += 1
}

// 监视，当值变化时执行回调函数
const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log('sum的值变化了', newValue, oldValue)
    // 当newValue≥10时解除监视
    if (newValue >= 10) {
        stopWatch()
    }
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