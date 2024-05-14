<template>
  <div class="talk">
    <button class="btn1" @click="getLoveTalk">获取一句土味情话</button>
    <button class="btn2" @click="clearLocalStorage">清空</button>
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
  console.log('loveTalkStore里面保存的数据发生了变化', mutate, state);
  // 将数据存到浏览器的localStorage中，key-value形式
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

// 方法
async function getLoveTalk() {
  loveTalkStore.getATalk()
}

function clearLocalStorage() {
  localStorage.clear();
  talkList.value = [];
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  font-size: 20px;
  text-align: center;
  /* 将容器内的内容水平居中 */
}

.btn1 {
  /* 设置按钮的左右外边距为自动，使其水平居中 */
  margin: 0 auto;
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
}

.btn1:hover {
  background-color: #2980b9;
}

.btn2 {
  /* 设置按钮的左右外边距为自动，使其水平居中 */
  margin: 0 auto;
  display: inline-block;
  padding: 10px 20px;
  background-color: #c62424;
  color: #fff;
  border: none;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
  margin-left: 30px;
}

.btn2:hover {
  background-color: #a30404;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: box-shadow 0.3s;
}

li:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>