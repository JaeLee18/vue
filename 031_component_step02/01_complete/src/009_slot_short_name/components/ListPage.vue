<template>
    <page-layout>
        <template #header>
            list 페이지
        </template>
        <ul>
            <li>memo1</li>
            <li>memo2</li>
        </ul>

        <template #footer>
            list 푸터
        </template>
    </page-layout>
</template>

<script>
    import PageLayout from "./PageLayout";

    export default {
        data() {
            return {}
        },
        components: {
            PageLayout
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