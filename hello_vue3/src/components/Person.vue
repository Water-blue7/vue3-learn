<template>
    <div class="person">
        <h2>水温达到60℃或水位达到80cm时向服务器发送请求</h2>
        <h2>当前水温：{{ temp }}℃</h2>
        <h2>当前水位：{{ height }}cm</h2>
        <button @click="changeTemp">点我水温+10℃</button>
        <button @click="changeHeight">点我水位+10cm</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch, watchEffect } from 'vue';

let temp = ref(10)
let height = ref(0)
function changeTemp() {
    temp.value += 10
}
function changeHeight() {
    height.value += 10
}

// 监视
// watch([temp, height], (value) => {
//     let [newTemp, newHeight] = value
//     console.log(newTemp, newHeight);
//     if (newTemp >= 60 || newHeight >= 80) {
//         console.log('向服务器发起一个请求');
//     }
// })

// watchEffect：不用告诉它要监视什么属性
watchEffect(() => {
    if (temp.value >= 60 || height.value >= 80) {
        console.log('向服务器发起一个请求');
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