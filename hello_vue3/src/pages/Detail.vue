<template>
  <ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router';
import { toRefs } from 'vue';

let route = useRoute()
// console.log(route);{{ route.query.id }}
// 从一个响应式对象身上直接解构属性，属性会丢失响应式
const { query } = toRefs(route)

</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>