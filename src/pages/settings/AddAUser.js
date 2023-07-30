import React from 'react'
import CustomButton from '../../components/fields/CustomButton'
import { PiCaretLeft } from 'react-icons/pi'
import { color } from '../../assets/color'
import { Col, Row } from 'antd'
import { LayoutBgContainer, LayoutChildwrapper } from '../../components/layout/style'
import image from '../../assets/images/addUser-bg.png'
import { AddUserStyle } from './style'
import { InputHolder } from '../auth/login/style'
import CustomInputField from '../../components/fields/CustomField'
import CustomSelect from '../../components/fields/CustomSelect'

const AddAUser = ({setAddUser}) => {
const d = {background:'white',
"&:hover": {
    background: "white"
  }
}

    const options = [
        {
          value: 'administrator',
          label: 'Administrator',
        },
        {
          value: 'finance',
          label: 'Finance',
        },
        {
          value: 'developer',
          label: 'Developer',
        }
      ]
  return (
    <div>
    <CustomButton bg={color.white} radius='25px' color={color.coinColor} width='120px' border='1px solid #DBDBDB' text='Go Back' icon={<PiCaretLeft color={color.mainColor} fontSize={20} />} onClick={()=>setAddUser(false)} className='flex items-center'/>
    <AddUserStyle>
    <Row>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <div>
            <LayoutChildwrapper>
             <h1>Add new user</h1> 
            <p>Invite new users to your admin dashboard</p>
            <InputHolder>
            <CustomInputField
                type={"text"}
                placeholder="Full name"
                bg={color.fieldColor}
              />
              <br /> <br />
            <CustomInputField
                type={"email"}
                placeholder="Email Address"
                bg={color.fieldColor}
              />
              <br /> <br />
              <div className='add-user-select'>
              <CustomSelect 
               mode="multiple"
               placeholder="Please select user role"
               allowClear
               options={options}
               className='w-full'
               height='3.125rem'
            bg={color.fieldColor}
            dropdownStyle={d}
               />
              </div><br/> <br/>

              <CustomButton
                bg={color.secondaryColor}
                text="Invite User"
              />
            </InputHolder>
          </LayoutChildwrapper>
            </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            
        <div className='bgHolder'/>
       
        </Col>
    </Row>
    </AddUserStyle>
    </div>
  )
}

export default AddAUser