import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

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

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        onClick={({ key }) => {
          navigate(key);
        }}
        items={items}
      />
    </Sider>
  );
}
