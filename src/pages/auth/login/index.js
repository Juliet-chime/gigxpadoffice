import React, { useState } from "react";
import NonAuthLayout from "../../../components/layout/NonAuthLayout";
import CustomInputField from "../../../components/fields/CustomField";
import { InputHolder } from "./style";
import { CheckCircleFilled, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import CheckField from "../../../components/fields/CheckField";
import { color } from "../../../assets/color";
import CustomButton from "../../../components/fields/CustomButton";
import signBg from '../../../assets/images/signBg.png'
import signBg1 from '../../../assets/images/signBg1.png'
import PasswordChecklist from "react-password-checklist"
import LoginLink from "../../../components/layout/LoginLink";

export default function Login() {

  const [show, setShow] = useState(false)
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypepassword] = useState('')
  return <div>
    <NonAuthLayout
      image={show ? signBg1 : signBg}
      title={show ? 'Change your account password' : 'Log in to the Admin Dashboard'}
      subText={show ? 'Set a new password for your XPAD account' : 'Sign in with your credentials to access the dashboard'}
    >
      <InputHolder>
        {show ? <div>
          <CustomInputField
            value={password}
            type={'password'}
            placeholder="New Password"
            className='inputstyle'
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <CustomInputField
            type={'password'}
            value={retypePassword}
            placeholder="Retype Password"
            className='inputstyle'
            onChange={(e) => setRetypepassword(e.target.value)}
          />
          <PasswordChecklist
            rules={["capital", "specialChar", "number", "minLength"]}
            minLength={8}
            value={password}
            valueAgain={retypePassword}
            onChange={(isValid) => { }}
            style={{ marginTop: '15px' }}
            iconComponents={{ ValidIcon: <CheckCircleFilled style={{ color: '#46E082' }} />, InvalidIcon: <CheckCircleFilled style={{ color: '#A7B8BF' }} /> }}
            messages={{
              minLength: "Must Be at least 8 characters in length",
              specialChar: "Must Contain Special Character (@$%*&^!)",
              number: "Must Contain a number",
              capital: "Must Contain One Capital Letter",
            }}
          /><br /><br />
          <CustomButton bg={color.secondaryColor} text='Log In' />
        </div> : <div>
          <CustomInputField
            type={'email'}
            placeholder="Email Address"
            bg={color.fieldColor}
          /><br /><br />
          <CustomInputField
            type={'password'}
            placeholder="input password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className='inputstyle'
          /><br /><br />
          <CheckField label={'Remember this computer'} /> <br /><br />
          <CustomButton bg={color.secondaryColor} text='Log In' onClick={() => setShow(true)} /><br /><br />
          <LoginLink text='Unable to login?' underline='underline' />
        </div>}
      </InputHolder>
    </NonAuthLayout>
  </div>;
}
