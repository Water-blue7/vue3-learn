<template>
    <div class="person">
        <h2>当前sum：{{ sum }}--->放大十倍后{{ bigSum }}</h2>
        <button @click="add">点我sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index"><br>
        <button @click="getDog">再来一只</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import useDog from '@/hooks/useDog';
import useSum from '@/hooks/useSum';

const { dogList, getDog } = useDog()
const { sum, add, bigSum } = useSum()


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

img {
    height: 100px;
    margin-right: 10px;
}
</style>