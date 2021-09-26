import React, { useCallback, useRef, useState, useEffect } from "react";
import { Cell, Input, Button, Checkbox, Toast } from "zarm";
// import CustomIcon from "@/components/CustomIcon";
import Captcha from "react-captcha-code";
import { useHistory, useLocation } from "react-router-dom";
import s from "./style.module.less";
import cx from "classnames";
import { post } from "@/utils";

const Login = () => {
  // const captchaRef = useRef();
  const [username, setUsername] = useState(""); // 账号
  const [password, setPassword] = useState(""); // 密码
  const [verify, setVerify] = useState(""); // 验证码
  const [captcha, setCaptcha] = useState(""); // 验证码变化后存储值
  const [type, setType] = useState("login"); // 登录注册类型
  const [headHei, setHeadHei] = useState(0); // 登录注册类型
  const history = useHistory();

  //  验证码变化，回调方法
  const handleChange = useCallback((captcha) => {
    console.log("captcha", captcha);
    setCaptcha(captcha);
  }, []);

  // async & await 请求接口方法,需要用try catch方式来捕获异步处理过程中的错误
  const onSubmit = async () => {
    if (!username) {
      Toast.show("请输入账号");
      return;
    }
    if (!password) {
      Toast.show("请输入密码");
      return;
    }
    try {
      console.log(type);
      // 判断是否是登录状态
      if (type == "login") {
        // 执行登录接口，获取 token
        const { data } = await post("/user/login", {
          username,
          password,
        });
        // 将 token 写入 localStorage
        localStorage.setItem("token", data.token);
        // history.push("/");
        // 这里用 window.location.href 的原因是，utils/axios.js 内部需要再次被执行，才能通过 localStorage.getItem 拿到最新的 token。如果只是用 history.push 跳转页面的话，页面是不会被刷新，那么 axios.js 的 token 就无法设置。
        window.location.href = "/";
      } else {
        if (!verify) {
          Toast.show("请输入验证码");
          return;
        }
        if (verify != captcha) {
          Toast.show("验证码错误");
          return;
        }
        const { data } = await post("/user/register", {
          username,
          password,
        });
        Toast.show("注册成功");
        // 注册成功，自动将 tab 切换到 login 状态
        setType("login");
      }
    } catch (error) {
      console.log(error);
      Toast.show("系统错误");
    }
  };

  // 使用promise请求接口方法
  // const onSubmit = async () => {
  // // verify...
  // ...
  //   post("/api/user/register", {
  //     username,
  //     password,
  //   }).then((res) => {
  //     // do something
  //   });
  // };

  useEffect(() => {
    document.title = type == "login" ? "登录" : "注册";
  }, [type]);

  useEffect(() => {
    // setHeadHei(160);
  }, []);

  return (
    <div className={s.auth}>
      <div className={s.head} />
      <div
        className={s.contentBox}
        style={{ height: type === "login" ? 350 : 440 }}
      >
        <div className={s.tab}>
          <span
            className={cx({ [s.avtive]: type == "login" })}
            onClick={() => setType("login")}
          >
            登录
          </span>
          <span
            className={cx({ [s.avtive]: type == "register" })}
            onClick={() => setType("register")}
          >
            注册
          </span>
        </div>
        <div className={s.form}>
          <Cell
          // icon={
          //   <CustomIcon type="icon-user" className={s.iconSty} size="sm" />
          // }
          >
            <Input
              clearable
              type="text"
              placeholder="请输入账号"
              onChange={(value) => setUsername(value)}
            />
          </Cell>
          <Cell
          // icon={
          //   <CustomIcon
          //     type="icon-password"
          //     className={s.iconSty}
          //     size="sm"
          //   />
          // }
          >
            <Input
              clearable
              type="password"
              placeholder="请输入密码"
              onChange={(value) => setPassword(value)}
            />
          </Cell>
          {type == "register" ? (
            <Cell
            // icon={
            //   <CustomIcon
            //     type="icon-yanzhengma-"
            //     className={s.iconSty}
            //     size="sm"
            //   />
            // }
            >
              <Input
                clearable
                type="text"
                placeholder="请输入验证码"
                onChange={(value) => setVerify(value)}
              />
              <Captcha
                // ref={captchaRef}
                charNum={4}
                onChange={handleChange}
                className={s.captchaSty}
                bgColor="#fff"
              />
            </Cell>
          ) : null}
        </div>
        <div className={s.operation}>
          {type == "register" ? (
            <div className={s.agree}>
              <Checkbox />
              <label className="text-light">
                阅读并同意<a>《大耳狗手札条款》</a>
              </label>
            </div>
          ) : null}
          <Button onClick={onSubmit} block theme="primary">
            {type == "login" ? "登录" : "注册"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
