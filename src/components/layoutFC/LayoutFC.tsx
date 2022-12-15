import { ConfigProvider } from "antd";
import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { darkMode } from "../../utils/OptionConfigAnt";
import { lightMode } from "./../../utils/OptionConfigAnt";

const LayoutFC = (props: React.PropsWithChildren) => {
  const { dark } = useGlobalContext();
  console.log("🚀 ~ file: LayoutFC.tsx:9 ~ LayoutFC ~ dark", dark);

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

            List: {
              colorPrimary: "white",
              colorBgContainer: "blue",
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
