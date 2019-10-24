<template>
    <div>
        <list-header></list-header>
        <div>
            contents
        </div>
        <list-footer></list-footer>
    </div>
</template>

<script>
    import ListFooter from "./ListFooter"
    import ListHeader from "./ListHeader"
    export default {
        components:{
            ListFooter,
            ListHeader
        }
    }
</script>

<style scoped>

</style>