<template>
    <div class="person">
        <h2>当前sum：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
        <br>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index"><br>
        <button @click="getDog">再来一只</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue'
import axios from 'axios'


let sum = ref(0)
let dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_6869.jpg',
    'https://images.dog.ceo/breeds/pembroke/n02113023_3601.jpg',
    'https://images.dog.ceo/breeds/pembroke/n02113023_4312.jpg'
])


function add() {
    sum.value += 1
}

// axios：Ajax
async function getDog() {
    try {
        let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        // console.log(result.data.message);
        dogList.push(result.data.message)
    } catch (error) {
        alert(error);
    }
}

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