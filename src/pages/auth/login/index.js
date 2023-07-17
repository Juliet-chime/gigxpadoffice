import React from "react";
import NonAuthLayout from "../../../components/layout/NonAuthLayout";
import CustomInputField from "../../../components/fields/CustomField";
import { InputHolder } from "./style";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import CheckField from "../../../components/fields/CheckField";
import { color } from "../../../assets/color";
import CustomButton from "../../../components/fields/CustomButton";

export default function Login() {
  return <div>
    <NonAuthLayout title={'Log in to the Admin Dashboard'} subText={'Sign in with your credentials to access the dashboard'}>
      <InputHolder>
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
        <CheckField label={'Remember this computer'}/> <br /><br />
        <CustomButton bg={color.secondaryColor} text='Log In'/>
        <CustomButton text='Unable to login?' width='auto' padding='0rem' color={color.secondaryColor}/>
      </InputHolder>
    </NonAuthLayout>
  </div>;
}
