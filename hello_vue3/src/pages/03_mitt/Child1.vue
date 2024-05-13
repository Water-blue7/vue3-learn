<template>
	<div class="child1">
		<h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4 v-show="computer">弟弟的电脑：{{ computer }}</h4>
		<button @click="emitter.emit('send-toy', toy)">玩具给弟弟</button>
	</div>
</template>

<script setup lang="ts" name="Child1">
import { ref, onUnmounted } from 'vue'
import emitter from '@/utils/emitter';

// 数据
let toy = ref('奥特曼')
let computer = ref('')

// 给emitter绑定send-toy事件
emitter.on('send-computer', (value: any) => {
	computer.value = value
})
// 在组件卸载时解绑send-toy事件
onUnmounted(() => {
	emitter.off('send-computer')
})



</script>

<style scoped>
.child1 {
	margin-top: 50px;
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}

.child1 button {
	margin-right: 10px;
}
</style>