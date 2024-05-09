<template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }} --> {{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
import { defineProps, ref, defineExpose, withDefaults } from 'vue'
import { type Persons } from '@/types'


let a = ref(0)
let b = ref(1)
let c = ref(2)
// 选择暴露哪些数据
defineExpose({ a, b, c })

// 接受App传过来的数据，有返回值
// let x = defineProps(['a', 'list'])

// 接收list+限制类型
// defineProps<{ list: Persons }>()

// 接收list+限制类型+限制必要性
// defineProps<{ list?: Persons }>()

// 最终形态
// 接收list+限制类型+限制必要性+默认值
withDefaults(defineProps<{ list?: Persons }>(), {
    // 不能直接写，需要用函数返回一个结果
    // 设置默认值
    list: () => [{ id: 'id01', name: 'name01', age: 20 }]
})


// console.log(x.list);

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