import axios from "axios";

export function request1(config) {
  // 创建axios 实力
  const httpRequestInstance = axios.create({
    baseURL: "http://localhost:8086",
    timeout: 6000,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  // 请求拦截
  httpRequestInstance.interceptors.request.use(
    (config) => {
      // 统一设置：如：需要认证token
      return config;
    },
    (err) => err
    /*
    err => err 等价于
    (err) => {
      return err;
    }
     */
  );
  // 响应拦截
  httpRequestInstance.interceptors.response.use(
    (config) => {
      return config.data;
    },
    (error) => {
      // 处理后台返回的错误信息，
      return error;
    }
  );
  return httpRequestInstance(config);
}
