<template>
    <div id="app">
        <h1>Slot 테스트</h1>
        <parent-component></parent-component>
    </div>
</template>

<script>

    /*
       slot
          사용 : 부모에서 보내는 콘텐츠 정보를 자식에서 사용하고자 할때 사용

     */


    import ParentComponent from "./components/ParentComponent";

    export default {
        data() {
            return {}
        },
        components: {
            ParentComponent
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
