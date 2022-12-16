import { Space, Spin } from "antd";
import React from "react";

const SpinProgress = () => {
  return (
    <Space
      size="middle"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </Space>
  );
};

export default SpinProgress;
