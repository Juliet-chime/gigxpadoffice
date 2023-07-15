import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "/dashboard", <PieChartOutlined />),
  getItem("Transactions", "sub1", <UserOutlined />, [
    getItem("Fiat Transactions", "/transactions"),
    getItem("Crypto Transactions", "/crypto"),
    getItem("Bill Payments", "/bills"),
  ]),
  getItem("Wallets", "/wallets", <PieChartOutlined />),
  getItem("Virtual Cards", "/cards", <DesktopOutlined />),

  getItem("Customers", "/customers", <FileOutlined />),
  getItem("Settings", "/settings", <FileOutlined />),
];

const DashBoardLayout = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="nav-area">
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={[window.location.pathname]}
            mode="inline"
            onClick={({ key }) => {
                console.log(key)
              navigate(key);
            }}
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
              minHeight: "calc(100vh - 114px)",
              overflow: "auto",
            }}
          >
            <div
              style={{
                padding: 24,
              }}
            >
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default DashBoardLayout;
