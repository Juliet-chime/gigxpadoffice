import React from "react";
import { Dropdown, Layout, Menu, theme } from "antd";
import { BiBell } from 'react-icons/bi'
import { GoPersonFill } from 'react-icons/go'
import { HeaderWrapper } from "./style";
import { RxPerson } from 'react-icons/rx'
import { PiSignOut } from 'react-icons/pi'
import HeaderDropDonComponent from "./HeaderDropDonComponent";
import { getItem } from "../SideBar";

const { Header } = Layout;

export default function NavHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const [display, setDisplay] = useState(false)

  const menuItems = [
    getItem('Navigation One', 'sub1', null, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
  ];

  const items = [
    {
      label: <a href="https://www.antgroup.com">
        <HeaderDropDonComponent icon={RxPerson} label={'My Profile'} />
      </a>,
      key: '0',
    },
    {
      label: <a href='/'>
        <Menu
          // onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          // mode="inline"
          items={menuItems}
        />
      </a>,
      key: '1'

    },
    // {key
    //   label: <a href='https://google.com'>
    //     <HeaderDropDonComponent icon={PiCurrencyDollarSimple} label={'Currency'} />
    //   </a>,
    //   key: '1',
    // },
    {
      type: 'divider',
    },
    {
      label: <a href="https://www.aliyun.com">
        <HeaderDropDonComponent icon={PiSignOut} label={'SignOut'} margin='0px' />
      </a>,
      key: '2',
    },
  ];

  // const items1 = [
  //   {
  //     label: <a href="https://www.antgroup.com">1st menu item</a>,
  //     key: '0',
  //   },
  //   {
  //     label: <a href="https://www.aliyun.com">2nd menu item</a>,
  //     key: '1',
  //   },
  //   {
  //     label: '3rd menu item',
  //     key: '2',
  //   },
  // ];

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
            // dropdownRender={(menus)=>{
            //   console.log(menus)
            //   return <div>dfg</div>
            // }}
            menu={{ items }}
            placement="bottomRight"
            trigger={['click']}
          >
            <div className="bell-holder">
              <BiBell className="bell" />
              <div className="small-cirle" />
            </div>
          </Dropdown>
        </div>

        <div className="linethrough" />

        <div className="user-wrapper">
          <Dropdown
            // dropdownRender={(menus)=>{
            //   console.log(menus)
            //   return <div>mm</div>
            // }}
            // overlay={(
            //   <Menu>
            //     <Menu.Item key="0">
            //       Menu Item One
            //     </Menu.Item>
            //     <Menu.Item key="1">
            //       ittt
            //     <Menu>
            //     <Menu.Item  key="1">  Menu Item One</Menu.Item>
            //     </Menu>

            //     </Menu.Item>
            //     <Menu.Item key="1">
            //     Menu Item Three
            //     </Menu.Item>
            //   </Menu>
            // )}
            menu={{
              items
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
                <GoPersonFill className="person" />
              </div>
            </div>
          </Dropdown>
        </div>
      </HeaderWrapper>
    </Header>
  );
}
