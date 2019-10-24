<template>
    <div class="layout">
        <header>
            <slot ??>header 영역</slot>
        </header>

        <div>
            <slot></slot>
        </div>

        <footer>
            <slot ??>footer 영역</slot>
        </footer>
    </div>
</template>

<script>

    export default {

        data() {
            return {
            }
        },

        methods: {
        }
    }
</script>

<style scoped>
    .layout {
        border:1px solid #000000;
        margin:10px;
    }
</style>