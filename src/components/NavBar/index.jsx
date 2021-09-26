import React, { useEffect, useState } from "react";
import Proptypes from "prop-types";
import { TabBar } from "zarm";
import { useHistory, useLocation } from "react-router-dom";
import CustomIcon from "../CustomIcon";
import s from "./style.module.less";

const Navbar = ({ showNav, pathname }) => {
  const [activeKey, setActiveKey] = useState("/");
  const history = useHistory();

  const changeTab = (path) => {
    setActiveKey(path);
    history.push(path);
  };

  useEffect(() => {
    setActiveKey(pathname);
  }, [pathname]);

  return (
    <TabBar
      visible={showNav}
      className={s.tab}
      activeKey={activeKey}
      onChange={changeTab}
    >
      <TabBar.Item
        itemKey="/"
        title="账单"
        icon={<CustomIcon type="icon-xingzhuang" />}
      />
      <TabBar.Item
        itemKey="/data"
        title="统计"
        icon={<CustomIcon type="icon-tongji" />}
      />
      <TabBar.Item
        itemKey="/user"
        title="我的"
        icon={<CustomIcon type="icon-wodedangxuan" />}
      />
    </TabBar>
  );
};

Navbar.propTypes = {
  showNav: Proptypes.bool,
};

export default Navbar;
