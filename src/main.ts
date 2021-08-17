import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);
app.use(store);
app.use(router);

axios.defaults.baseURL = "https://www.escook.cn";
app.config.globalProperties.$http = axios;

app.mount("#app");
