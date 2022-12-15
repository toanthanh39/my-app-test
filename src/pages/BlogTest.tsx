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
        className="bg-pink-500"
        style={{
          height: "10vh",
          width: "100vw",
          padding: "30px",
          minHeight: "70px",
          boxShadow: boxShadow,
          background: dark === "dark" ? "#001529" : "white",
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
            onClick={() => setCollapsed(!collapsed)}
          ></MenuUnfoldOutlined>
          <Title
            level={3}
            style={{ textAlign: "center", margin: "0", color: "red" }}
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
            // background: colorBgContainer,
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            theme={dark}
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%  " }}
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
                label: <Link to="/blogs/video">Video</Link>,
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
              {
                key: "4",
                icon: null,
                label: (
                  <SwitchCustom
                    handleChange={toggleDark}
                    isChecked={dark}
                  ></SwitchCustom>
                ),
              },
              {
                key: "5",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
              {
                key: "6",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
              {
                key: "7",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
              {
                key: "8",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
              {
                key: "9",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
              {
                key: "10",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
              {
                key: "11",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
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
