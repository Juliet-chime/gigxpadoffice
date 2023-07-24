import React, { useState } from "react";
import { Button, Dropdown, Layout, Menu, Space, theme } from "antd";
import { BiBell } from 'react-icons/bi'
import {GoPersonFill} from 'react-icons/go'
import { HeaderWrapper } from "./style";
import { getItem } from "../SideBar";
import { MailOutlined} from '@ant-design/icons';

const { Header } = Layout;

export default function NavHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  const menuItems = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  ];

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      label: <div>
        <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      // inlineCollapsed={collapsed}
      items={menuItems}
    />
      </div>,
      key: '2',
    },
  ];

  const items1 = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      label: '3rd menu item',
      key: '2',
    },
  ];

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <HeaderWrapper>
        <div className="notification-holder">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            trigger={['click']}
          >
            <div className="bell-holder">
              <BiBell className="bell" />
              <div className="small-cirle"/>
            </div>
          </Dropdown>
        </div>

        <div className="linethrough"/>
        
        <div className="user-wrapper">
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <div className="user-section">
            <div>
              <p className="user-info">
                <span className="user-name">Anselm Mba</span>
                {/* <span>Administrator</span> */}
              </p>
              
            </div>
            <div className="person-wrapper">
              <GoPersonFill className="person"/>
            </div>
            </div>
          </Dropdown>
        </div>
      </HeaderWrapper>
    </Header>
  );
}
