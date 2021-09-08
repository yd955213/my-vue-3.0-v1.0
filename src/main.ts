import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker.ts";
// import router from "./router";
import router from "@/router/index.ts";
import store from "@/store/index.ts";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import qs from "qs";

const app = createApp(App);

// // axios.defaults.baseURL = "https://www.escook.cn";
// axios.defaults.baseURL = "http://localhost:8086";
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// // axios.defaults.headers = {"Content-Type": "application/json;charset=UTF-8"};
app.config.globalProperties.$http = axios;
app.config.globalProperties.$qs = qs;
// app.use(store);
// app.use(router);
// app.mount("#app");
app.use(store).use(router).mount("#app");
