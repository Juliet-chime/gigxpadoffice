import React from "react";
import { Button, Dropdown, Layout, Space, theme } from "antd";
import { BiBell } from 'react-icons/bi'
import {GoPersonFill} from 'react-icons/go'
import { HeaderWrapper } from "./style";

const { Header } = Layout;

export default function NavHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
      label: '3rd menu item',
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
      {/* <HeaderWrapper>
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
                <span>Administrator</span>
              </p>
              
            </div>
            <div className="person-wrapper">
              <GoPersonFill className="person"/>
            </div>
            </div>
          </Dropdown>
        </div>
      </HeaderWrapper> */}
    </Header>
  );
}
