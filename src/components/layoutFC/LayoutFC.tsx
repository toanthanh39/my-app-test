import { ConfigProvider } from "antd";
import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { darkMode } from "../../utils/OptionConfigAnt";
import { lightMode } from "./../../utils/OptionConfigAnt";

const LayoutFC = (props: React.PropsWithChildren) => {
  const { dark } = useGlobalContext();

  return (
    <>
      <ConfigProvider
        theme={{
          token: dark === "dark" ? darkMode.token : lightMode.token,
          components: {
            Button: dark === "dark" ? darkMode.Button : lightMode.Button,
            Layout: dark === "dark" ? darkMode.layout : lightMode.layout,
            Radio: dark === "dark" ? darkMode.Radio : lightMode.Radio,
            Checkbox: dark === "dark" ? darkMode.Checkbox : lightMode.Checkbox,
            Menu: dark === "dark" ? darkMode.Menu : lightMode.Menu,
            Modal: dark === "dark" ? darkMode.Modal : lightMode.Modal,

            List: {
              colorPrimary: "white",
              colorBgContainer: "blue",
            },
            Card: {
              colorPrimary: "red",
              colorBorder: "red",
              colorBgElevated: "red",
              colorBorderBg: "red",
              colorBgMask: "red",
              colorTextSecondary: "green",
              colorBgBase: "red",
              colorBorderSecondary: "#aaa",
              boxShadow: " 0 0 5px red",
            },
            Input: {
              colorIcon: "green",
              colorPrimary: "red",
            },
            Switch: {
              colorPrimary: "black  ",
            },
          },
        }}
      >
        {props.children}
      </ConfigProvider>
    </>
  );
};

export default LayoutFC;
