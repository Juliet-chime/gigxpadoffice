import React from 'react'
import CustomButton, { CustomFormikButton } from '../../components/fields/CustomButton'
import { PiCaretLeft } from 'react-icons/pi'
import { color } from '../../assets/color'
import { Col, Row } from 'antd'
import { LayoutChildwrapper } from '../../components/layout/style'
import { AddUserStyle } from './style'
import { InputHolder } from '../auth/login/style'
import CustomInputField from '../../components/fields/CustomField'
import CustomSelect from '../../components/fields/CustomSelect'
import { Formik } from 'formik'
import { Form, Select} from 'formik-antd'
import * as Yup from 'yup'
import CustomFormikField from '../../components/fields/CustomFormikField'
import CustomFormikSelect from '../../components/fields/CustomFormikSelect'

const AddAUser = ({ setAddUser }) => {

  const d = {
    background: 'white',
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

  const initialValues = { firstName: '', lastName: '', role:'', email:'' }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    role: Yup.string().required('Please select a role'),
    email: Yup.string().email('Please enter a valid email').required('Please enter your email').matches(/^[A-Za-z0-9._%+-]+@gigxpad\.com$/, 'Invalid email address'),
  })

  const onHandleSubmit = (values) => {
    const data = {
      firstName: "harry",
      lastName: "maguire",
      roleId: "1",
      email: "harry@gigxpad.com"
  }

  console.log(values)
  }
  return (
    <div>
      <CustomButton bg={color.white} radius='25px' color={color.coinColor} width='120px' border='1px solid #DBDBDB' text='Go Back' icon={<PiCaretLeft color={color.mainColor} fontSize={20} />} onClick={() => setAddUser(false)} className='flex items-center' />
      <AddUserStyle>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <div>
              <LayoutChildwrapper>
                <h1>Add new user</h1>
                <p>Invite new users to your admin dashboard</p>
                <InputHolder>
                <Formik
                initialValues={initialValues}
                onSubmit={onHandleSubmit}
                // validationSchema={validationSchema}
                >
                  {({handleChange, handleSubmit, isSubmitting, errors, values})=>{
                    console.log(errors)
                    return <Form onSubmit={handleSubmit}>
                       <CustomFormikField
                        value={values.firstName}
                        type={"text"}
                        placeholder="First name"
                        name='firstName'
                        bg={color.fieldColor}
                        onChange={handleChange}
                      />
                      <br /> <br />
                      <CustomFormikField
                        value={values.lastName}
                        type={"text"}
                        placeholder="Last name"
                        name='lastName'
                        bg={color.fieldColor}
                        onChange={handleChange}
                      />
                        <br /> <br />
                      <CustomFormikField
                        type={"email"}
                        name='email'
                        placeholder="Email Address"
                        bg={color.fieldColor}
                        value={values.email}
                        onChange={handleChange}
                      />
                       <br /> <br />
                      <CustomFormikSelect
                      placeholder="Please select user role"
                      options={options}
                      className='w-full border border-b-green-950'
                      name='role'
                      onChange={handleChange}
                      height='3.125rem'
                      bg={color.fieldColor}
                      dropdownStyle={d}
                      />
                      <br /> <br />
                      <CustomFormikButton
                        bg={color.secondaryColor}
                        text="Invite User"
                        type='submit'
                        disabled={isSubmitting}
                      />
                    </Form>
                  }}
                </Formik>
                  {/* <CustomInputField
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
                  </div><br /> <br />

                  <CustomButton
                    bg={color.secondaryColor}
                    text="Invite User"
                  /> */}
                </InputHolder>
              </LayoutChildwrapper>
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={8} xl={8}>

            <div className='bgHolder' />

          </Col>
        </Row>
      </AddUserStyle>
    </div>
  )
}

export default AddAUser