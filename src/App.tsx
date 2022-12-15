import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import HeaderMain from "./components/header/HeaderMain";
import { Layout } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const { Header, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header style={{ height: "auto", padding: "0" }}>
        <HeaderMain></HeaderMain>
      </Header>
      <Content>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
}

export default App;
