import axios from "./axios";

export const get = axios.get;

export const post = axios.post;

export const typeMap = {
  1: {
    icon: "icon-canyin",
  },
  2: {
    icon: "icon-clothes",
  },
  3: {
    icon: "icon-traffic",
  },
  4: {
    icon: "icon-richanglianxi",
  },
  5: {
    icon: "icon-gouwu",
  },
  6: {
    icon: "icon-xuexi",
  },
  7: {
    icon: "icon-yiliao",
  },
  8: {
    icon: "icon-lvhang",
  },
  9: {
    icon: "icon-jiaojiyingchou",
  },
  10: {
    icon: "icon-qita",
  },
  11: {
    icon: "icon-gongzi",
  },
  12: {
    icon: "icon-bonus",
  },
  13: {
    icon: "icon-zhuanzhang",
  },
  14: {
    icon: "icon-huabanfuben",
  },
  15: {
    icon: "icon-tuikuan",
  },
  16: {
    icon: "icon-qita1",
  },
  17: {
    icon: "icon-qita1",
  },
  18: {
    icon: "icon-qita1",
  },
  19: {
    icon: "icon-qita1",
  },
  20: {
    icon: "icon-qita1",
  },
  21: {
    icon: "icon-qita1",
  },
  22: {
    icon: "icon-qita1",
  },
  23: {
    icon: "icon-qita1",
  },
  24: {
    icon: "icon-qita1",
  },
  25: {
    icon: "icon-qita1",
  },
  26: {
    icon: "icon-qita1",
  },
  27: {
    icon: "icon-qita1",
  },
  28: {
    icon: "icon-qita1",
  },
  29: {
    icon: "icon-qita1",
  },
  30: {
    icon: "icon-qita1",
  },
  31: {
    icon: "icon-qita1",
  },
  32: {
    icon: "icon-qita1",
  },
  33: {
    icon: "icon-qita1",
  },
};

// utils/index.js
export const REFRESH_STATE = {
  normal: 0, // 普通
  pull: 1, // 下拉刷新（未满足刷新条件）
  drop: 2, // 释放立即刷新（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

export const LOAD_STATE = {
  normal: 0, // 普通
  abort: 1, // 中止
  loading: 2, // 加载中
  success: 3, // 加载成功
  failure: 4, // 加载失败
  complete: 5, // 加载完成（无新数据）
};

const MODE = import.meta.env.MODE; // 环境变量
import { baseUrl } from "@/config"; // 由于直接使用 axios 进行请求，统一封装了请求 baseUrl

export const imgUrlTrans = (url) => {
  if (url && url.startsWith("http")) {
    return url;
  } else {
    url = `${MODE == "development" ? "" : "http://api.chennick.wang"}${url}`;
    return url;
  }
};
