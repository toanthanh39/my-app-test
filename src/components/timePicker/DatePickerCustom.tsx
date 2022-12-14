import React from "react";
import View from "../swapComponents/View";
import { DatePicker, Space } from "antd";
import type { DatePickerProps, TimePickerProps } from "antd";

type Option = {
  type: "week" | "date" | "month";
  onChange: DatePickerProps["onChange"];
};
const DatePickerCustom = ({ type = "date", onChange }: Option) => {
  return (
    <View>
      <Space direction="vertical">
        <DatePicker picker={type} onChange={onChange} />
      </Space>
    </View>
  );
};

export default DatePickerCustom;
