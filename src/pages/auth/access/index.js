import React, { useState } from 'react'
import NonAuthLayout from '../../../components/layout/NonAuthLayout'
import accessBg from '../../../assets/images/accessBg.png'
import CustomButton from '../../../components/fields/CustomButton'
import { color } from '../../../assets/color'
import LoginLink from '../../../components/layout/LoginLink'
import { AccessBtnHolder } from './style'

const AccessPage = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <NonAuthLayout
                image={accessBg}
                maxwidth={'448px'}
                show={show}
                lock={show}
                spanWidth="340px"
                title={
                    show
                        ? 'Your access unlock request has been sent to the administrator'
                        : 'If you are unable to log into your account, you may want to contact your system administrator'
                }
                subText={
                    show
                        ? 'You should get a secure link in your registered email to grant you login access again'
                        : 'In order to regain access into your account, you may request for an unlock access link. This will enable you log back into your account'
                }
            >
                <>
                    {show ? (
                        <AccessBtnHolder>
                            <LoginLink
                                text="Back to Login"
                                underline="underline"
                                link="/accesslogin"
                            />
                        </AccessBtnHolder>
                    ) : (
                        <AccessBtnHolder>
                            <CustomButton
                                onClick={() => setShow(true)}
                                bg={color.fieldColor}
                                text="Request Access"
                                width="50%"
                                color={color.accessBtnColor}
                            />
                            <LoginLink
                                text="Back to Login"
                                underline="underline"
                                link="/accesslogin"
                            />
                        </AccessBtnHolder>
                    )}
                </>
            </NonAuthLayout>
        </div>
    )
}

export default AccessPage
