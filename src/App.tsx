import React from "react";
import "./App.css";
import "./Antd.scss";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Space, theme } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  HomeFilled,
  MenuUnfoldOutlined,
  PlaySquareOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";

import SwitchCustom from "./components/switch/SwitchCustom";
import { useGlobalContext } from "./contexts/GlobalContext";
const { Title } = Typography;

const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const { dark, toggleDark } = useGlobalContext();
  const {
    token: { colorBgContainer, boxShadow },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Header
        style={{
          height: "10vh",
          width: "100vw",
          padding: "30px",
          minHeight: "70px",
          boxShadow: boxShadow,
          background: dark === "dark" ? "#595959" : "white",
          borderBottom: "1px solid #D9D9D9",
        }}
      >
        <Space
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <MenuUnfoldOutlined
            style={{ fontSize: "20pt" }}
            onClick={() => setCollapsed(!collapsed)}
          ></MenuUnfoldOutlined>
          <Title
            level={3}
            style={{
              textAlign: "center",
              margin: "0",
              color: dark === "dark" ? "yellow" : "red",
            }}
          >
            NAMPERFUME TV
          </Title>
        </Space>
      </Header>
      <Layout style={{ minHeight: "90vh", margin: " 0 0" }}>
        <Sider
          style={{
            height: "100%",
            minWidth: "100px",
            overflowY: "hidden",
            background: dark === "dark" ? "#262626" : "white",
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            theme={dark}
            mode="vertical"
            defaultSelectedKeys={["2"]}
            style={{
              height: "100%",

              background: dark === "dark" ? "#262626" : "white",

              overflowY: "scroll",
            }}
            items={[
              {
                key: "1",
                icon: <HomeFilled style={{ fontSize: "20px", color: "red" }} />,
                label: <Link to="/">Home</Link>,
              },
              {
                key: "2",
                icon: (
                  <ShopOutlined style={{ fontSize: "20px", color: "red" }} />
                ),
                label: <Link to="/">Stores</Link>,
              },
              {
                key: "3",
                icon: (
                  <PlaySquareOutlined
                    style={{ fontSize: "20px", color: "#ff6518" }}
                  />
                ),
                label: <Link to="/nBoards/camera">Camera</Link>,
              },
            ]}
          />
          <Space
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              margin: "1rem",
            }}
          >
            <SwitchCustom
              handleChange={toggleDark}
              isChecked={dark}
            ></SwitchCustom>
          </Space>
        </Sider>
        <Content
          style={{
            padding: "16px",
            height: "100%",
            position: "relative",
            overflowY: "scroll",
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
