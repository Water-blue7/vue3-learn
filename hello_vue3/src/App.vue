<template>
	<div class="app">
		<h2>立即修改</h2>
		<h2>{{ msg1 }}</h2>
		<input type="text" v-model="msg1">
		<hr>
		<h2>延迟修改</h2>
		<h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
</template>

<script setup lang="ts" name="App">
	import { ref } from 'vue';
	import useMsgRef from './useMsgRef'

	// 使用vue默认提供的ref定义响应式数据
	// 响应式对象：数据变化页面就会跟着变
	let msg1 = ref('hello')

	// 使用useMsgRef来定义一个响应式数据并且有延迟效果
	let { msg } = useMsgRef('useMsgRef', 1000)

</script>

<style scoped>
	.app {
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
	button {
		margin:0 5px;
	}
</style>