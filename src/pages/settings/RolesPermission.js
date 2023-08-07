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
import CustomModal from '../../components/modal/CustomModal'
import CustomButton from '../../components/fields/CustomButton'

const RolesPermission = () => {
  const [open, setOpen] = useState(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openDeveloper, setOpenDeveloper] = useState(false);
  const [openFinance, setOpenFinance] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = (e) => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      <Row gutter={[16, 16]}>
        {roles.map((items, index) => {
          return <>
            <Col xs={12} sm={12} md={6} lg={5} xl={4}>
              <BlockStyle height='165px' padding='0px' display='flex' col='column' align='center' justify='center' gap='10px' radius='8px' onClick={items.role === 'Super Admin' ? showDrawer : items.role === 'Administrator' ? showAdmin : items.role === 'Developer' ? showDeveloper : items.role === 'Finance' ? showFinance : null} className='cursor-pointer'>
                <PersonWrapper width='60px' height='60px' personSize='55px'>
                  <GoPersonFill className="person" />
                </PersonWrapper>
                <div>
                  <h3 className='text-lg font-medium text-mainColor'>{items.role}</h3>
                  <p className='text-xs text-lighterAsh'>{items.user} {items.user > 1 ? 'Active Users' : 'Active User'}</p>
                </div>

              </BlockStyle>
            </Col>
            {items.role === 'Super Admin' ? <CustomDrawer placement="right" onClose={onClose} open={open}>
              <SuperAdminDetails />
            </CustomDrawer> : null}
            {items.role === 'Administrator' ? <CustomDrawer placement="right" onClose={onCloseAdmin} open={openAdmin}>
              <AdministratorDetails />
            </CustomDrawer> : null}
            {items.role === 'Developer' ? <CustomDrawer placement="right" onClose={onCloseDeveloper} open={openDeveloper}>
              <DeveloperDetails />
            </CustomDrawer> : null}
            {items.role === 'Finance' ? <CustomDrawer placement="right" onClose={onCloseFinance} open={openFinance}>
              <div>finance</div>
            </CustomDrawer> : null}
          </>
        })}
        <Col xs={12} sm={12} md={6} lg={5} xl={4}>
          <BlockStyle height='165px' padding='0px' display='flex' col='column' align='center' justify='center' gap='20px' bg='#F8F8F8' border='2px dashed #E3E3E3' radius='8px' className='cursor-pointer' onClick={showModal}>

            <BiPlusCircle fontSize={26} color={color.mainColor} />
            <p className='text-sm text-mainColor'>Add New Role</p>
          </BlockStyle>
        </Col>
      </Row>

      <CustomModal open={isModalOpen} width={530} onOk={handleOk} onCancel={handleCancel} footer={null} wrapClassName='invite'>
        <div>
          <div className='h-40  bg-green-50 rounded-t-14'></div>
          <div className='flex flex-col items-center justify-center gap-6 pt-16 pb-8 px-6'>

            <h2 className='text-xl font-bold font-cabinetgrotesk'>Users Invited Successfully</h2>
            <p className="text-lighterAsh text-lg text-center">Users you have invited will get a link in their email address to sign in and activate their account on XPAD.</p>
            <CustomButton text={'Dismiss'} bg={color.fieldColor} color={color.accessBtnColor} width='250px' weight='700' height='3.75rem' />
          </div>
        </div>
      </CustomModal>

    </div>
  )
}

export default RolesPermission