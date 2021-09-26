import React from "react";
import Proptypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Navbar, Icon } from "zarm";

import s from "./style.module.less";

const Header = ({ title = "" }) => {
  const history = useHistory();
  return (
    <div className={s.headerWarp}>
      <div className={s.block}>
        <Navbar
          className={s.header}
          left={
            <Icon
              type="arrow-left"
              theme="primary"
              onClick={() => history.goBack()}
            />
          }
          title={title}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  title: Proptypes.string, // 标题
};

export default Header;
