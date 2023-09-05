import React, { useState } from "react";
import { Dropdown, Layout } from "antd";
import { BiBell } from 'react-icons/bi'
import { GoPersonFill } from 'react-icons/go'
import { HeaderWrapper } from "./style";
import { RxPerson } from 'react-icons/rx'
import { PiCaretDown, PiCaretUp, PiCurrencyDollarSimple, PiSignOut } from 'react-icons/pi'
import { GrFormCheckmark } from 'react-icons/gr'
import { color } from "../../assets/color";
import HeaderDropDownComponent from "./HeaderDropDonComponent";
import { useSelector } from "react-redux";
import { get2FaSelector } from "../../services/slices/auth/2fa";

const { Header } = Layout;

const SubItems = ({ text, icon, active }) => {
  const Icon = icon
  return <div className="flex items-center justify-between pl-8 pr-2 mb-2">
    <p className={`text-sm ${active ? 'text-mainColor' : 'text-lighterAsh'} ${active ? 'font-medium' : 'font-normal'}`}>{text}</p>
    {Icon ? <Icon color={color.secondaryColor} fontSize={18} /> : null}
  </div>
}

export default function NavHeader({ dropdownRender }) {

  const [openMenu, setOpenMenu] = useState(false);

  const user = useSelector(get2FaSelector)

  const firstname = user?.user?.firstName
  const lastName = user?.user?.lastName

  return (
    <Header className="bg-white p-2">
      <HeaderWrapper>
        <div className="notification-holder">
          <Dropdown
            dropdownRender={dropdownRender}
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
                  <span className="user-name">{firstname} {' '} {lastName}</span>
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
