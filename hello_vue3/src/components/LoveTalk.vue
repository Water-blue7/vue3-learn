<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang='ts' name="LoveTalk">
import { useLoveTlakStore } from '@/store/loveTalk';
import { storeToRefs } from 'pinia';

const loveTalkStore = useLoveTlakStore()
// 使用storeToRefs：只对数据进行ref包裹
const { talkList } = storeToRefs(loveTalkStore)

/**
 * mutate：本次修改的信息
 * state：真正的数据
 * localStorage：用户本地浏览器存储，用户刷新不丢失数据
 * setItem(key: string, value: string): void;
 */
loveTalkStore.$subscribe((mutate, state) => {
  // 获取新的土味情话后控制台打印了这句话，有点像watch
  console.log('loveTalkStore里面保存的数据发生了变化',mutate, state);
  // 将数据存到浏览器的localStorage中，key-value形式
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

// 方法
async function getLoveTalk() {
  loveTalkStore.getATalk()
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
