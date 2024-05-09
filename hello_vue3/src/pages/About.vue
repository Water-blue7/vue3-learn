<template>
    <div class="about">
        <h2>欢迎大家来到About</h2>
    </div>
</template>

<script lang="ts" setup name="About">
import { onMounted,onUnmounted } from 'vue';
onMounted(()=>{
    console.log('About被挂载了');
})
onUnmounted(()=>{
    console.log('About被卸载了');
})
</script>

<style scoped>
.about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>