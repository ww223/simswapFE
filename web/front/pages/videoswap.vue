<template>
  <div>
    <v-container />
    <v-card style="width: 100%" dark color="gold">
      <v-container>
        <v-subheader>VIDEO SWAP</v-subheader>
      </v-container>
      <v-container>
        <v-form>
          <div class="submit">
            <input class="submit" ref="imageInput" type="file" />
            <v-container />
            <input class="submit" ref="videoInput" type="file" />
          </div>
          <v-container />
          <v-container />
          <v-btn
            dark
            color="purple"
            @click="VideoSwap"
            type="button"
            class="submit2"
            >FACE SWAP</v-btn
          >
        </v-form>
      </v-container>
    </v-card>
    <v-container />

    <v-container />
    <v-btn @click="refresh" style="align-items=right; margin-left: 750px;"
      >refresh</v-btn
    >
    <div style="align-items: center; margin-bottom: 100px">
      <v-header>RESULT</v-header><v-container />

      <v-card dark color="gold">
        <v-container>
          <video
            controls
            muted
            autoplay
            ref="Result"
            type="video/mp4"
            width="500"
            style="
              z-index: 999;
              align-items: center;
              margin-left: 150px;
              margin-top: 40px;
            "
          ></video>

          <v-container />

          <v-spacer></v-spacer>
        </v-container>
      </v-card>
    </div>

    <v-container /> <v-container />
  </div>
</template>
<script>
import axios from "axios"; // axios call 사용을 위해 import

export default {
  data() { // 변수 선언
    return {
      input: {
        image: "",
        video: "",
      },
    };
  },

  methods: {
    selfresh() {
      var timer = setInterval(() => {
        this.$axios
          .get("", {
            /*  서버에 response 요청  */
            headers: {
              Accept: "video/mp4;charset=UTF-8",
            },
          })
          .then((res) => {
            /*  res가 있을때, */
            console.log(res.data);
            const link = res.data; /* link 변수에 res.data 를 넣어준다. */
            // console.log(link);
            if (res.data !== 200) {
              this.$refs.Result.src =
                res.data; /* 작업이 진행중일 경우 response로 "200"만 넘어오기 때문에, 200이 아닌 경우 url이 넘어온것 => video 태그의 src에  url을 넣어준다. */
              clearInterval(timer); /* 작업 완료로 인한, 타이머 초기화 */
            }
          })
          .catch(function (err) {
            console.log("Error: " + err.message);
          });
      }, 10000); /*  몇초에 한번 response를 받아올지 설정 */
    },

    VideoSwap() {
      /*  서버에 작업 요청하는 함수 */
      const formdata = new FormData();

      formdata.append(
        "image",
        this.$refs.imageInput.files[0]
      ); /* 사용자의 input을 각각 form data 형식으로 넣어준다. */
      formdata.append("video", this.$refs.videoInput.files[0]);

      for (let key of formdata.keys()) {
        /* key 확인하기 */
        console.log(key);
      }

      for (let value of formdata.values()) {
        /* value 확인하기 */
        console.log(value);
      }

      this.$axios
        .post("http://211.110.19.228:5740/videoSwapProc", formdata, {
          /*  axios call로 서버에 작업 요청을 보낸다. */
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.selfresh(); /* 정상적으로 작업 요청이 수행되면, selfresh() 실행  */
        })
        .catch(function (err) {
          console.log("Error: " + err.message);
        });
    },

    refresh() {
      this.$axios
        .get("", {
          /*  주기적으로 response를 받아오지만, 사용자가 원하는 경우 즉시 get 요청을 보내 refresh 해준다.  */
          headers: {
            Accept: "video/mp4;charset=UTF-8",
          },
        })
        .then((res) => {
          /* 그 외, selfresh() 와 동일 기능 */

          const link = res.data;
          console.log(link);
          this.$refs.Result.src = link;

          console.log(this.$refs.Result.src);
          console.log(this.$refs.Result);
        })
        .catch(function (err) {
          console.log("Error: " + err.message);
        });
    },
  },
};
</script>
<style scoped>
.image {
  margin-left: 60px;
  margin-right: 30px;
  width: 300px;
  height: 200px;
}
.submit {
  color: #0000ff;
  flex: 20px;
  margin-left: 120px;
  margin-right: 200px;
  margin-bottom: 0px;

  align-items: center;
}
.submit2 {
  flex: 20px;
  margin-left: 350px;
  margin-right: 100px;
  margin-bottom: 59px;

  align-items: right;
}
.result {
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 0px;
  width: 500px;
  height: 400px;

  align-items: center;
}
.table {
  margin-left: 50px;
  margin-right: 50px;
  border-collapse: separate;
  border-spacing: 10 20rem;

  content: "";
  display: table-row;
  height: 40px;
}
</style>
