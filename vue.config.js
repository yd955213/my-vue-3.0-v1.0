const path = require("path");

module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  // 是否开启eslint保存检测
  lintOnSave: true,
  // 是否在构建生产包时生成sourceMap
  productionSourceMap: false,
  /*
  webpack 配置 https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  chainWebpack: (config) => {},
  configureWebpack: (config) => {
    /* 别名配置 */
    config.resolve = {
      extensions: [".js", ".json", ".vue"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@views": path.resolve(__dirname, "./src/views"),
        "@components": path.resolve(__dirname, "./src/components"),
      },
    };
  },
  /*
  CSS 相关配置
   */
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps，一般不建议开启
    sourceMap: false,
    // css预设器 配置项
    // loaderOptions: {
    //   sass: {
    //     // 设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
    //     data: '@import "@/styles/main.scss";',
    //   },
    // },
    // 启用 CSS modules
    modules: false,
  },
  /*
  webpack-dev-server 配置
   */
  devServer: {
    /* 本地ip地址 */
    // host: "localhost",
    host: "0.0.0.0", //局域网和本地访问
    port: "8080", //端口号
    hot: true,
    /* 是否编译完成后自动打开浏览器 */
    open: false,
    overlay: {
      warning: false,
      error: true,
    },
    /* 跨域代理 */
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://172.168.120.230:8086",
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
