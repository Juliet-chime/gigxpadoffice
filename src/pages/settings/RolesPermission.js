import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { roles } from '../../utils/constants'
import { BlockStyle } from '../../components/dashboardComponents/style'
import { PersonWrapper } from '../../components/Header/style'
import { GoPersonFill } from 'react-icons/go'
import { BiPlusCircle } from 'react-icons/bi'
import { color } from '../../assets/color'
import CustomDrawer from '../../components/fields/CustomDrawer'
import SuperAdminDetails from './RolesDetails/SuperAdminDetails'
import AdministratorDetails from './RolesDetails/AdministratorDetails'
import DeveloperDetails from './RolesDetails/DeveloperDetails'

const RolesPermission = () => {
    const [open, setOpen] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);
    const [openDeveloper, setOpenDeveloper] = useState(false);
    const [openFinance, setOpenFinance] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const showAdmin = () => {
    setOpenAdmin(true);
  };

  const onCloseAdmin = () => {
    setOpenAdmin(false);
  };

  const showDeveloper = () => {
    setOpenDeveloper(true);
  };

  const onCloseDeveloper = () => {
    setOpenDeveloper(false);
  };

  const showFinance = () => {
    setOpenFinance(true);
  };

  const onCloseFinance = () => {
    setOpenFinance(false);
  };

  return (
    <div className='mt-8'>
        <Row gutter={[16,16]}>
            {roles.map((items,index)=>{
                return <>
                <Col xs={12} sm={12} md={6} lg={5} xl={4}>
                    <BlockStyle height='165px' padding='0px' display='flex' col='column' align='center' justify='center' gap='10px' radius='8px' onClick={items.role === 'Super Admin' ? showDrawer : items.role === 'Administrator'? showAdmin : items.role === 'Developer' ? showDeveloper: items.role === 'Finance'?showFinance:null} className='cursor-pointer'>
                    <PersonWrapper width='60px' height='60px' personSize='55px'>
                      <GoPersonFill className="person" />
                      </PersonWrapper>
                      <div>
                      <h3 className='text-lg font-medium text-mainColor'>{items.role}</h3>
                      <p className='text-xs text-lighterAsh'>{items.user} {items.user > 1?'Active Users':'Active User'}</p>
                      </div>

                    </BlockStyle>
                </Col>
                {items.role === 'Super Admin'?  <CustomDrawer placement="right" onClose={onClose} open={open}>
                    <SuperAdminDetails/>
                </CustomDrawer>:null}
                {items.role === 'Administrator'?  <CustomDrawer placement="right" onClose={onCloseAdmin} open={openAdmin}>
                    <AdministratorDetails/>
                </CustomDrawer>:null}
                {items.role === 'Developer'?  <CustomDrawer placement="right" onClose={onCloseDeveloper} open={openDeveloper}>
                    <DeveloperDetails/>
                </CustomDrawer>:null}
                {items.role === 'Finance'?  <CustomDrawer placement="right" onClose={onCloseFinance} open={openFinance}>
                    <div>finance</div>
                </CustomDrawer>:null}
                </>
            })}
            <Col xs={12} sm={12} md={6} lg={5} xl={4}>
                    <BlockStyle height='165px' padding='0px' display='flex' col='column' align='center' justify='center' gap='20px' bg='#F8F8F8' border='2px dashed #E3E3E3' radius='8px'>
                        
                            <BiPlusCircle fontSize={26} color={color.mainColor}/>
                            <p className='text-sm text-mainColor'>Add New Role</p>
                    </BlockStyle>
                </Col>
        </Row>
    </div>
  )
}

export default RolesPermission