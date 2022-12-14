import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import HeaderMain from "./components/header/HeaderMain";
import { Layout } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ConfigProvider, Button } from "antd";
import { GlobalProvider, useGlobalContext } from "./contexts/GlobalContext";
import { lightMode, darkMode } from "./utils/OptionConfigAnt";
const { Header, Content } = Layout;
function App() {
  const { dark } = useGlobalContext();

  return (
    <ConfigProvider
      theme={{
        token: dark === "dark" ? darkMode.token : lightMode.token,
        components: {
          Button: dark === "dark" ? darkMode.Button : lightMode.Button,
          Layout: dark === "dark" ? darkMode.layout : lightMode.layout,
          Radio: dark === "dark" ? darkMode.Radio : lightMode.Radio,
          Checkbox: dark === "dark" ? darkMode.Checkbox : lightMode.Checkbox,
          // Checkbox: {
          //   colorLinkHover: "yellow",
          //   colorFill: "red",
          //   colorPrimary: "red",
          // },
          // Button: {
          //   colorFillContent: "blue",
          //   colorTextSecondary: "blue",
          //   colorFill: "blue",
          //   colorPrimaryHover: "green",
          // },
        },
      }}
    >
      <Layout>
        <Header style={{ height: "auto", padding: "0" }}>
          <HeaderMain></HeaderMain>
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
