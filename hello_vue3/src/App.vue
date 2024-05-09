<template>
  <Person v-if="isShow" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { ref, onMounted } from "vue";

let isShow = ref(true)

// 子在父之前挂载完毕
// App组件永远最后挂载，因为main.js最后一行才是挂载App
onMounted(() => {
  console.log('父---挂载完毕');
})

</script>


<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>