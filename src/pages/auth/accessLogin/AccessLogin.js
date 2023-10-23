import React from 'react'
import NonAuthLayout from '../../../components/layout/NonAuthLayout'
import accessBg from '../../../assets/images/accessBg.png'
import CustomInputField from '../../../components/fields/CustomField'
import { color } from '../../../assets/color'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import CheckField from '../../../components/fields/CheckField'
import CustomButton from '../../../components/fields/CustomButton'
import LoginLink from '../../../components/layout/LoginLink'
import { InputHolder } from '../login/style'

const AccessLogin = () => {
    return (
        <div>
            <NonAuthLayout
                image={accessBg}
                spanWidth="370px"
                lock={true}
                title={'Log in to the Admin Dashboard'}
                subText={
                    'Sign in with your credentials to access the dashboard'
                }
            >
                <InputHolder>
                    <CustomInputField
                        type={'email'}
                        placeholder="Email Address"
                        bg={color.fieldColor}
                    />
                    <br />
                    <br />
                    <CustomInputField
                        type={'password'}
                        placeholder="input password"
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        className="inputstyle"
                    />
                    <br />
                    <br />
                    <CheckField label={'Remember this computer'} /> <br />
                    <br />
                    <CustomButton
                        bg={color.fieldColor}
                        text="Log In"
                        color={color.lightAsh}
                    />
                    <br />
                    <br />
                    <LoginLink
                        text="Unable to login?"
                        underline="underline"
                        link="/access"
                    />
                </InputHolder>
            </NonAuthLayout>
        </div>
    )
}

export default AccessLogin
