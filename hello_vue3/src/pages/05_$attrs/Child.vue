<template>
	<div class="child">
		<h3>子组件</h3>
		<!-- 使用v-bind将父亲传过来的数据给儿子 -->
		<!-- 如果不使用defineProps接受数据，数据就会自动保存在attrs中，使用$attrs可以看到数据 -->
		<h4>{{ $attrs }}</h4>
		<GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>