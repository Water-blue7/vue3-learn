<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">点我输出h2这个元素</button>
  <Person />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { ref } from 'vue'

// 为了防止其他页面也有名为title2的id
let title2 = ref()

function showLog() {
  console.log(title2.value);
}
</script>


<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>