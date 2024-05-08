<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <h3>朝阳区</h3>
        <button @click="showLog">点我输出h2这个元素</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'

// 为了防止其他页面也有名为title2的id
let title2 = ref()

function showLog() {
    console.log(title2.value);
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