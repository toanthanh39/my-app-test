import {
  HomeFilled,
  MenuUnfoldOutlined,
  PlaySquareOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space, theme } from "antd";
import React from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import { Link, Outlet, useParams } from "react-router-dom";
import { Typography } from "antd";
import SwitchCustom from "./../components/switch/SwitchCustom";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

const BlogTest = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { dark } = useGlobalContext();
  const { toggleDark } = useGlobalContext();

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
          borderBottom: "1px solid #aaa",
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
            mode="inline"
            // defaultSelectedKeys={["1"]}
            style={{
              height: "auto",
              maxHeight: "50%",
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
                  <VideoCameraOutlined
                    style={{ fontSize: "20px", color: "Highlight" }}
                  />
                ),
                label: <Link to="/blogs/nBoards">Store</Link>,
              },
              {
                key: "3",
                icon: (
                  <PlaySquareOutlined
                    style={{ fontSize: "20px", color: "#ff6518" }}
                  />
                ),
                label: <Link to="/blogs/daily">Daily</Link>,
              },
            ]}
          />
          <Space
            style={{
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
            margin: "10px",
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
};

export default BlogTest;
