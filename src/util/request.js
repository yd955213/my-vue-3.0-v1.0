import axios from "axios";

const internal = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// 对请求的错误响应进行处理
const err = (error) => {
  if (error.response) {
    console.log(error.response.data);
  }
};

internal.interceptors.request.use((config) => config, err);
internal.interceptors.response.use((response) => response.data, err);

export { internal as axios };
