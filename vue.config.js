module.exports = {
  devServer: {
    proxy: {
      "/fisco": {
        target: "http://47.56.165.246:8545", // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/tests": "" //需要rewrite的,
        }
      }
    }
  }
};
