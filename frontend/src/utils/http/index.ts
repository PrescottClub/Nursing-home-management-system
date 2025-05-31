import store from "@/store";
import baseAxios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export const baseUrl = "http://127.0.0.1:9001/";

const axios = baseAxios.create({
  baseURL: "",
  timeout: 5000,
  headers: {}
});

// 请求拦截器
axios.interceptors.request.use((config: any) => {
  try {
    const stateData = localStorage.getItem("stateData");
    if (stateData) {
      const token = JSON.parse(stateData)?.app?.token;
      if (token) {
        config.headers.token = token;
      }
    }
  } catch (error) {
    console.warn("Failed to parse token from localStorage:", error);
  }
  return config;
});

// 响应拦截器
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data.code === 500 && res.data.msg === "令牌无效") {
      store.dispatch("app/logout");
      ElMessage.error({ message: "登录过期，请重新登录" });
    }
    if (res.data.err === 1) {
      return Promise.reject(res.data);
    }
    return res.data;
  },
  err => Promise.reject(err) // 响应出问题
);

export default axios;
