<template>
    <div class="parent">
        <!-- content 내용이 없기 때문에 기본 slot값이 사용됨 -->
        <child-component></child-component>
        <child-component> <div style="color:#ff0000">부모값:slot대신 이 내용이 출력됩니다.</div></child-component>
    </div>
</template>

<script>
    import ChildComponent from "./ChildComponent";

    export default {
        data() {
            return {}
        },
        components: {
            ChildComponent
        },
        methods: {}

    }
</script>

<style scoped>
    .parent {
        border: 1px solid #000000;
        margin: 10px;
    }
</style>