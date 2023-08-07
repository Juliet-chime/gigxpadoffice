import React, { useState } from "react";
import { Dropdown, Layout } from "antd";
import { BiBell } from 'react-icons/bi'
import { GoPersonFill } from 'react-icons/go'
import { HeaderWrapper } from "./style";
import { RxPerson } from 'react-icons/rx'
import { PiCaretDown, PiCaretUp, PiCurrencyDollarSimple, PiSignOut } from 'react-icons/pi'
import { GrFormCheckmark } from 'react-icons/gr'
import { color } from "../../assets/color";
import { FaCircle } from "react-icons/fa";
import HeaderDropDownComponent from "./HeaderDropDonComponent";

const { Header } = Layout;

const SubItems = ({ text, icon, active }) => {
  const Icon = icon
  return <div className="flex items-center justify-between pl-8 pr-2 mb-2">
    <p className={`text-sm ${active ? 'text-mainColor' : 'text-lighterAsh'} ${active ? 'font-medium' : 'font-normal'}`}>{text}</p>
    {Icon ? <Icon color={color.secondaryColor} fontSize={18} /> : null}
  </div>
}

const NotificationItem = ({ text, icon, title }) => {
  return <div className="flex items-center justify-between p-2">
    <div>
      <h5 className={`text-sm text-mainColor font-medium`}>{title}</h5>
      <p className={`text-sm text-lighterAsh`}>{text}</p>
    </div>
    {icon ? <FaCircle fontSize={8} color={color.secondaryColor} /> : null}
  </div>
}

export default function NavHeader() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Header className="bg-white p-2">
      <HeaderWrapper>
        <div className="notification-holder">
          <Dropdown
            dropdownRender={(menus) => {
              console.log(menus)
              return <div className="shadow-lg rounded-md px-2 py-2 w-48 z-50 bg-white">
                <NotificationItem title={'User invite accepted'} text={'56 minutes ago'} icon />
                <NotificationItem title={'New Request Received'} text={'3 days ago'} />
                <NotificationItem title={'User invite accepted'} text={'3 days ago'} />
              </div>
            }}
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
            dropdownRender={(menus) => {
              console.log(menus)
              return <div className="shadow-lg rounded-md px-1 py-2 bg-white">
                <HeaderDropDownComponent icon={RxPerson} label={'My Profile'} />
                <HeaderDropDownComponent icon={PiCurrencyDollarSimple} label={'Currency'} className='cursor-pointer' radius='4px' bg={openMenu ? '#ECF6F7' : ''} onClick={() => setOpenMenu(!openMenu)} closeIcon={openMenu ? PiCaretUp : PiCaretDown}>
                  {openMenu && <div>
                    <SubItems text={'Dollar'} />
                    <SubItems text={'Naira'} icon={GrFormCheckmark} active={true} />
                  </div>}
                </HeaderDropDownComponent>
                <HeaderDropDownComponent icon={PiSignOut} label={'SignOut'} margin='0px' />
              </div>
            }}
            trigger={['click']}
          >
            <div className="user-section">
              <div>
                <p className="user-info">
                  <span className="user-name">Anselm Mba</span>
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
