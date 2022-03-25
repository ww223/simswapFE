<!--  
    default.vue 에서, 페이지의 전체적인 레이아웃 및  css를 적용
 -->

<template>
  <v-app>
    <div class="background-image">
      <!-- default.vue 의 template 전체에 css를 적용한 div태그를 통해 전체 배경 이미지 설정 -->
      <v-toolbar class="form" dark>
        <v-toolbar-title>
          <v-btn nuxt to="/"> Face Swap </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <!-- 상단 툴바 nuxt to="" 를 통해 다른 페이지로 넘겨준다. -->
          <v-btn nuxt to="/imageswap"><div>Image Swap</div></v-btn>
          <v-btn nuxt to="/videoswap"><div>Video Swap</div></v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-row>
        <!-- row,columm 설정 , 페이지의 비율을 설정해준다. -->
        <v-col cols="12" md="3"> </v-col>

        <v-col cols="12" md="6">
          <nuxt class="form" />
        </v-col>
        <v-col cols="12" md="3"> </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import loginform from "../components/loginform.vue";

export default {
  components: { loginform },
  data() {
    return;
    {
    }
  },
};
</script>
<style scoped>
.background-image {
  background-image: url("~/assets/bgimg.jpg");
  width: 1750px;
  height: 1600px;
  background-size: cover;
}
.form {
  opacity: 0.9;
  align-items: center;
}
</style>
