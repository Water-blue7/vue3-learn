<template>
	<div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<button @click="person.age += 1">修改年龄</button>
		<hr>
		<h2>rawPerson</h2>
		<h2>姓名：{{ rawPerson.name }}</h2>
		<h2>年龄：{{ rawPerson.age }}</h2>
		<!-- 原始对象不是响应式 -->
		<button @click="rawPerson.age += 1">修改年龄</button>
		<hr>
		<h2>markRaw</h2>
		<h2>{{ car }}</h2>
		<button @click="car.price += 1">增加价格</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { reactive, toRaw, markRaw} from 'vue';
	import mockjs from 'mockjs'

	let person = reactive({
		name:'tony',
		age:20
	})

	// 获取响应式对象的原始对象
	let rawPerson = toRaw(person)
	console.log('响应式数据',person);
	console.log('原始数据',rawPerson);

	// markRaw:将对象定义成原始对象，并且永远不能修改
	let car = markRaw({
		brand:'BYD',
		price:20
	})
	// 不能顺利的将car转成响应式对象
	let car2 = reactive(car)

	console.log(car);
	console.log(car2);

	let mockjs1 = markRaw(mockjs)
	console.log(mockjs1);
	
	
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