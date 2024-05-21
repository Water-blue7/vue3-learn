<template>
	<div class="app">
		<h2>当前SUM1为{{ sum1 }}</h2>
		<h2>当前SUM2(readonly)为{{ sum2 }}</h2>
		<button @:click="changeSum1">SUM+1</button>
		<button @:click="changeSum2">SUM2+1</button>
		<hr>
		<h2>car1:{{ car1 }}</h2>
		<button @click="changeBrand1">修改品牌(car1)</button>
		<button @click="changeColor1">修改颜色(car1)</button>
		<button @click="changePrice1">修改价格(car1)</button>
		<br>
		<h2>car2(readonly):{{ car2 }}</h2>
		<button @click="changeBrand2">修改品牌(car2)</button>
		<button @click="changeColor2">修改颜色(car2)</button>
		<button @click="changePrice2">修改价格(car2)</button>
		<br>
		<h2>car3(shallowReadonly):{{ car3 }}</h2>
		<button @click="changeBrand3">修改品牌(car3)</button>
		<button @click="changeColor3">修改颜色(car3)</button>
		<button @click="changePrice3">修改价格(car3)</button>
	</div>
</template>

<script setup lang="ts" name="App">
	import { ref, reactive, readonly, shallowReadonly } from 'vue';

	let sum1 = ref(0)
	// readonly：只读，不能修改，但是当sum被修改后sum2也会跟着被修改
	let sum2 = readonly(sum1)
	let car1 = reactive({
		brand:'奔驰',
		options:{
			color:'red',
			price:100
		}
	})
	let car2 = readonly(car1)
	// 只有第一层才是read only，第二层的数据是可以修改的
	let car3 = shallowReadonly(car1)

	function changeSum1(){
		sum1.value += 1
	}
	function changeSum2(){
		sum2.value += 1
	}
	
	function changeBrand1(){
		car1.brand = 'BYD'
	}
	function changeColor1(){
		car1.options.color = 'blue'
	}
	function changePrice1(){
		car1.options.price = 30
	}

	function changeBrand2(){
		car2.brand = 'BYD'
	}
	function changeColor2(){
		car2.options.color = 'blue'
	}
	function changePrice2(){
		car2.options.price = 30
	}

	function changeBrand3(){
		car3.brand = 'BYD'
	}
	function changeColor3(){
		car3.options.color = 'blue'
	}
	function changePrice3(){
		car3.options.price = 30
	}
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