import React from "react";
import { message } from "antd";
const MessageCustom = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi
      .open({
        type: "warning",
        content: "Action in progress..",
        duration: 1,
      })
      .then(() => message.success("Loading finished", 1));
  };
  return <React.Fragment>{contextHolder}</React.Fragment>;
};

export default MessageCustom;
