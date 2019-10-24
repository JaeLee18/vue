<template>
      <div>
            <div><button @click="addMessage()">데이터 변경</button></div>
            <div>
                  {{message}}
            </div>
      </div>
</template>

<script>
export default {      
      data(){
            return {
                 count:7,
			message:"1,2,3,4,5,6,7"
            }
      },
    ??,
      methods:{
             addMessage(){
                  this.count++;
                  this.message+=","+this.count;
            }
	}
}
</script>

<style>

</style>