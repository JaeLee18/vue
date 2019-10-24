<template>
    <div class="child">
        Child 컴포넌트
        <div>
            <slot>기본값: content 정보가 없을때만 활성화</slot>
        </div>

    </div>
</template>

<script>

    export default {
        name: "child",
        data() {
            return {
            }
        },

        methods: {
        }
    }
</script>

<style scoped>
    .child {
        border:1px solid #000000;
        margin:10px;
    }
</style>