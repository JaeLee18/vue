<template>
	<div id="app">
		<list-page></list-page>
	</div>
</template>

<script>


	/*
       <slot name> 과 v-slot
          - 특정 영역에 외부 데이터를 삽입하고 싶은 경우

       - 템플릿에서는
       		<slot name="test1">

		- 템플릿 밖에서 즉, 외부에서 내부로 데이터를 보내고 싶은 경우
			<template v-slot:slotName>

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
