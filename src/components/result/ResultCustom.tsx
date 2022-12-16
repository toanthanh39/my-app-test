import { Button, Result, Space } from "antd";
import React from "react";
type Props = {
  title?: string | any;
  status: "warning" | "403" | "404" | "500";
  refresh?: () => void;
  label?: string;
};
const ResultCustom = ({
  title = "There are some problems with your operation.",
  status = "warning",
  refresh = () => console.log("ok"),
  label = "reload",
}: Props) => {
  return (
    <Space
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Result
        status={status}
        title={title}
        extra={
          <Button type="primary" key="console" onClick={() => refresh()}>
            {label}
          </Button>
        }
      />
    </Space>
  );
};

export default ResultCustom;
