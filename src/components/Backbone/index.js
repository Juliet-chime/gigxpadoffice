import React from "react";
import { Layout } from "antd";
import SideBar from "../SideBar";
import NavHeader from "../Header";
import Notification from "../notification/Notification";
const { Content } = Layout;

const DashBoardLayout = ({ children }) => {
  return (
    <div className="nav-area relative">
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
            <div>
              <div className="container mx-auto px-1 sm:px-4">{children}</div>
            </div>
          </Content>
        </Layout>
      </Layout>

      {true ? <Notification
        message={
          <div><p>Changes saved successfully</p></div>
        }
        type="success" showIcon
      /> : null}
    </div>
  );
};
export default DashBoardLayout;
