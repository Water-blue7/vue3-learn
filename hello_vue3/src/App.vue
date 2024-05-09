<template>
  <Person a="哈哈" :list="personList" ref="test" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { reactive, ref } from 'vue'
import { type Persons } from '@/types'

// 这里拿到的是从Person中传过来的实例对象
let test = ref()
// console.log(test);


// 泛型reactive<Persons>([])
let personList = reactive<Persons>([
  { id: 'asdgasgbioadg01', name: 'zhang-san', age: 18 },
  { id: 'asdgasgbioadg02', name: 'li-si', age: 19, tel: '188888' },
  { id: 'asdgasgbioadg03', name: 'wang-wu', age: 28, tel: '1333333' }
])
</script>


<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>