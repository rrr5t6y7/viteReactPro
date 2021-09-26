// router/index.js
import Home from "@/container/Home";
import Data from "@/container/Data";
import User from "@/container/User";
import Detail from "@/container/Detail";
import Login from "@/container/Login";
import UserInfo from "@/container/UserInfo";
import Account from "@/container/Account";
import About from "@/container/About";

// const basePath = "/viteReact/source/dist/";
const MODE = import.meta.env.MODE; // 环境变量

const basePath = MODE === "development" ? "/" : "viteReact/source/dist/";

console.log(MODE);

const routes = [
  {
    path: `${basePath}`,
    component: Home,
  },
  {
    path: `${basePath}data`,
    component: Data,
  },
  {
    path: `${basePath}user`,
    component: User,
  },
  {
    path: `${basePath}detail`,
    component: Detail,
  },
  {
    path: `${basePath}login`,
    component: Login,
  },
  {
    path: `${basePath}userInfo`,
    component: UserInfo,
  },
  {
    path: `${basePath}account`,
    component: Account,
  },
  {
    path: `${basePath}about`,
    component: About,
  },
];

export default routes;
