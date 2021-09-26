import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "@/components/Navbar";
import { ConfigProvider } from "zarm";
import routes from "@/router";
const MODE = import.meta.env.MODE; // 环境变量

const baseUrl = MODE === "development" ? "/wpps/viteReact/source/dist/" : "/";

function App() {
  const location = useLocation(); // 拿到 location 实例
  const { pathname } = location; // 获取当前路径
  const needNav = [`${baseUrl}`, `${baseUrl}data`, `${baseUrl}user`]; // 需要底部导航栏的路径
  const [showNav, setShowNav] = useState(false); // 是否展示 Nav

  useEffect(() => {
    console.log(pathname);
    setShowNav(needNav.includes(pathname));
  }, [pathname]); // [] 内的参数若是变化，便会执行上述回调函数=

  console.log(routes);

  console.log("222", showNav);

  return (
    <>
      <ConfigProvider primaryColor={"#fcbacc"}>
        <Switch>
          {routes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </ConfigProvider>
      <Navbar showNav={showNav} pathname={pathname} />
    </>
  );
}

export default App;
