<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <!-- 这里写双标签，就可以 -->
      <Category title="热门游戏列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食城市">
        <img :src="imgUrl" alt="">
      </Category>
      <Category title="今日影视推荐">
        <!-- video要加上controls，显示控制按钮 -->
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import { ref,reactive } from "vue";

  let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
  let imgUrl = ref('https://lh3.googleusercontent.com/a/ACg8ocJAK9rlS0BJk-MSuuvPRZerTLTGxwhy2Maxe-YOxbq_p2t49uDA')
  let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  /* 并集选择器 */
  img,video {
    width: 100%;
  }
</style>