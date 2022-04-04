module.exports = {
  head: {
    title: "Face Swap DEMO",
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "@nuxtjs/proxy"],

  serverMiddleware: [],
  axios: {
    // axios 환경 설정
    baseURL:'",
    proxy: true,
  },
  proxy: {
    //  프록시 모듈 설정
    "/api/": {
      target:
        " ",
      changeOrigin: true,
      pathRewrite: { "^/api/": "" },
    },
  },
  server: {
    port: process.env.port,
  },
};
