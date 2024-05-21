<template>
	<div class="outer">
        <h2>我是app组件</h2>
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
		<hr>
		<Modal/>
	</div>
</template>

<script setup lang="ts" name="App">
import Modal from './Modal.vue'

</script>

<style scoped>
	.outer {
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 5px;
		width: 400px;
		height: 400px;
		/* 使用滤镜：会导致Modal组件本来是参考视口定位的变成参考app组件定位 */
		filter: saturate(0%);
	}
	img {
		width: 180px;
	}
</style>