<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">显示新闻</button>
        <RouterLink :to="{
          // params：不能用path，只能用name
          // path: '/news/detail',
          name: 'xiang',
          query: {
            id: news.id,
            title: news.title,
            // index.ts中 :content? 说明content不是必须的参数
            content: news.content
          }
        }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { useRouter } from 'vue-router';
import { NewsInter } from '@/types';

const newsList = reactive([
  { id: 'asfdtrfay01', title: '很好的抗癌食物', content: '西蓝花' },
  { id: 'asfdtrfay02', title: '如何一夜暴富', content: '学IT' },
  { id: 'asfdtrfay03', title: '震惊，万万没想到', content: '明天是周一' },
  { id: 'asfdtrfay04', title: '好消息！好消息！', content: '快过年了' }
])

const router = useRouter()

/**
 * 编程式路由导航
 * 使用场景：1、只有符合某些条件才跳转。2、鼠标滑过一个东西就跳转，RouterLink需要点击。
 * @param news 
 */
function showNewsDetail(news: NewsInter) {
  // to咋写这里的push就咋写，可以直接写字符串，也可以写对象
  // 这里也可以用replace
  router.push({
    name: 'xiang',
    query: {
      id: news.id,
      title: news.title,
      // index.ts中 :content? 说明content不是必须的参数
      content: news.content
    }
  })
}
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}

.news li::marker {
  color: #64967E;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>