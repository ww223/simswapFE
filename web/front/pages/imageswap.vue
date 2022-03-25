<template>
<div> 
  <v-container /><v-container />
     <v-card style="width: 100%" dark color="black" > 
    <v-subheader>Coming Soon ...</v-subheader>
    <v-container>
    <v-form>
     <img src="~/assets/comm.jpg"  class="com">
     
    </v-form>
     
    </v-container>
    </v-card>
 
</div>   
   
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default {
  }
</script>
<style>
  .com
  {
      margin-left: 80px;
      margin-right : 100px;  
      margin-bottom: 0px ;
      width: 700px;
      height:700px;
      opacity: 80%;
      align-items: center;
  }
</style>