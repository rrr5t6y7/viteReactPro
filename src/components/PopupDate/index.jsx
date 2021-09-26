import React, { forwardRef, useEffect, useState } from "react";
import Proptypes from "prop-types";
import { Popup, DatePicker } from "zarm";
import dayjs from "dayjs";

const Popupdate = forwardRef(({ onSelect, mode = "date" }, ref) => {
  const [show, setShow] = useState(false);
  const [now, setNow] = useState(new Date());

  const choseMonth = (item) => {
    setNow(item);
    setShow(false);
    if (mode == "month") {
      onSelect(dayjs(item).format("YYYY-MM"));
    } else if (mode == "date") {
      onSelect(dayjs(item).format("YYYY-MM-DD"));
    }
  };

  if (ref) {
    ref.current = {
      show: () => {
        setShow(true);
      },
      close: () => {
        setShow(false);
      },
    };
  }
  return (
    <Popup
      visible={show}
      direction="bottom"
      onMaskClick={() => setShow(false)}
      destroy={false}
      mountContainer={() => document.body}
    >
      <div>
        <DatePicker
          visible={show}
          value={now}
          mode={mode}
          onOk={choseMonth}
          onCancel={() => setShow(false)}
        />
      </div>
    </Popup>
  );
});

Popupdate.propTypes = {
  mode: Proptypes.string, // 日期模式
  onSelect: Proptypes.func, // 选择后的回调
};

export default Popupdate;
