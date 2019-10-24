<template>
      <div>
            <list-header></list-header>
          //??
            <ListFooter></ListFooter>
      </div>
</template>

<script>
import ListHeader from "./ListFooter";
import ListFooter from "./ListFooter";
export default {
      components:{ 
            ListHeader,
            ListFooter
      },
      data(){
            return{
                list:["l1","l2", "l3"]
            }
      }
}
</script>

<style>

</style>