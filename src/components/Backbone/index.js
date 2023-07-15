import React from "react";
import { Layout } from "antd";
import SideBar from "../SideBar";
import NavHeader from "../Header";
const { Content } = Layout;

const DashBoardLayout = ({ children }) => {
  return (
    <div className="nav-area">
      <Layout style={{ height: "100vh" }}>
        <SideBar />
        <Layout>
          <NavHeader />
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
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default DashBoardLayout;
