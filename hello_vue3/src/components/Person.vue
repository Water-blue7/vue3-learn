<template>
    <div class="person">
        <h2>{{ a }}</h2>
    </div>
</template>

<!-- <script lang="ts">
export default {
    name: "Person", //组件名
};
</script> -->

<script lang="ts" setup name="Person2">
let a = 12311;
</script>

<style scoped>
.person {
    background-color: #7a0505;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>