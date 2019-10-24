<template>
	<div id="app">
		<list-page></list-page>
	</div>
</template>

<script>


	/*

       	- 템플릿 이름 지정시 단축형 방식, 두 내용은 동일
			<template v-slot:slotName>
			==
			<template #slotName>

     */



	import ListPage from "./components/ListPage";

	export default {
		data(){
			return {
			}
		},
		components: {
			ListPage
		}
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
