<template>
  <div>
    <v-container /><v-container />
    <v-card style="width: 0%" dark color="black">
      <v-container /> <v-container /> <v-container /> <v-container />

      <v-container>
        <v-form>
          <video controls width="800">
            <source src="~/assets/test01.mp4" class="com" type="video/mp4" />
          </video>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {};
</script>
<style>
.com {
  align-items: center;
}
</style>
