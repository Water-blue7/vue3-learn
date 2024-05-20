<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <!-- 作用域插槽接受数据：v-slot="params" -->
        <template v-slot="params">
          <ul>
            <li v-for="y in params.youxi" :key="y.id">
              {{ y.name }}
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="params">
          <ol>
            <li v-for="item in params.youxi" :key="item.id">
              {{ item.name }}
            </li>
          </ol>
        </template>
      </Game>

      <Game>
        <!-- 每次都params.比较麻烦，也可以解构 -->
        <!-- 作用域插槽如果没有名字：v-slot="params"  或者  #default="{youxi}" 如果有名字v-slot:name="params"-->
        <template #default="{youxi}">
          <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>

    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue'
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
  img,video {
    width: 100%;
  }
</style>