<template>
  <div>
    <v-container /><v-container />
    <v-card style="width: 90%" dark color="gold">
      <v-subheader>회원가입</v-subheader>
      <v-container>
        <v-form>
          <v-text-field label="ID" type="id" required />
          <v-container />
          <v-text-field label="PASSWORD" type="pw" required />
          <v-container />
          <v-text-field label="E-MAIL" type="email" required />
          <v-container />
          <v-btn dark color="gold" type="submit">가입하기</v-btn><v-container />
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {};
</script>
<style></style>
