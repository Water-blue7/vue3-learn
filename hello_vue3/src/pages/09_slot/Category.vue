<template>
  <div class="category">
    <h2>{{title}}</h2>
    <!-- 将父组件中双标签中的内容显示出来，如果双标签中没有任何东西就显示默认内容 -->
    <slot>默认内容</slot>
  </div>
</template>

<script setup lang="ts" name="Category">
  defineProps(['title'])
</script>

<style scoped>
  .category {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>