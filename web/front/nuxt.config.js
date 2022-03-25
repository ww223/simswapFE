module.exports = {
  head: {
    title: "Face Swap DEMO",
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "@nuxtjs/proxy"],

  serverMiddleware: [],
  axios: {
    // axios 환경 설정
    baseURL:
      "https://pulse9-test2.s3.ap-northeast-2.amazonaws.com/simswap/contents/multi_people_1080p.mp4 ",
    proxy: true,
  },
  proxy: {
    //  프록시 모듈 설정
    "/api/": {
      target:
        "https://pulse9-test2.s3.ap-northeast-2.amazonaws.com/simswap/contents/multi_people_1080p.mp4 ",
      changeOrigin: true,
      pathRewrite: { "^/api/": "" },
    },
  },
  server: {
    port: process.env.port,
  },
};
