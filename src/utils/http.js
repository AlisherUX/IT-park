import axios from "axios";
import { getLocalStorage } from "./helpers";

export const $authHost = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

$authHost.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["x-auth-token"] = token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// const accessTokenExpireTime = getLocalStorage("accessTokenExpiresAt");
$authHost.interceptors.response.use(
  async (response) => {
    // 5554324523153152
    // console.log(response);
    // if (Date.now() >= +accessTokenExpireTime) {
    //     window.localStorage.clear();
    //     window.location.pathname = "/logout";
    //     window.location.reload();
    // }

    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);
