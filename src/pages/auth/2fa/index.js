import React from 'react'
import NonAuthLayout from '../../../components/layout/NonAuthLayout'
import signBg from "../../../assets/images/signBg.png";
import PinInputField from '../../../components/fields/PinInputField';
import { Formik } from 'formik';
import { Form } from 'formik-antd';
import * as Yup from 'yup'
import { CustomFormikButton } from '../../../components/fields/CustomButton';
import { color } from '../../../assets/color';
import ErrorField from '../../../components/fields/ErrorField';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { query2FA } from '../../../services/slices/auth/2fa';
import { useErrorTimeout } from '../../../hooks/useTimeout';
import Notification from '../../../components/notification/Notification';

const TwoFactorAuthentication = () => {
    const faValues = { pin: '' }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [message, setMessage, status, setStatus] = useErrorTimeout()

    const validationSchema = Yup.object({
        pin: Yup.string()
            .required()
            .matches(/^[0-9]+$/, 'Must be only digits')
            .min(6, 'Pin must be exactly 6 digits')
            .max(6, 'Pin must be exactly 6 digits'),
    })


    const onHandleSubmit = async (values) => {
        const data = {
            email: location?.state?.email,
            code: values?.pin
        }

        try {
            const res = await dispatch(query2FA(data)).unwrap()

            if (res?.status === "success") {
                localStorage.setItem('authToken', res?.data?.accessToken)
                navigate('/dashboard')
            }
        } catch (e) {
            if (e?.success === false) {
                setStatus('error')
                setMessage(e?.errorMessage)
            }
        }
    }
    return (
        <div>
            {!!message ?
                <Notification
                    message={message}
                    type={status}
                /> : null}
            <NonAuthLayout
                maxwidth='350px'
                image={signBg}
                title={
                    "Two factor Authentication"
                }
                subText={
                    "Please enter authentication code."
                }
            >
                <div className='mt-10'>
                    <Formik
                        initialValues={faValues}
                        onSubmit={onHandleSubmit}
                        validationSchema={validationSchema}
                        validateOnChange={false}
                        validateOnMount={false}
                    >
                        {({ handleSubmit, errors, isSubmitting }) => {

                            const { pin } = errors
                            return (
                                <Form className="" onSubmit={handleSubmit}>
                                    <div className="mb-10">
                                        <PinInputField
                                            length={6}
                                            type="numeric"
                                            name="pin"
                                        />
                                        {pin ? <ErrorField error={pin} /> : null}
                                    </div>

                                    <CustomFormikButton
                                        bg={color.secondaryColor}
                                        text="Verify"
                                        type='submit'
                                        disabled={isSubmitting}
                                        width="100%"
                                    />
                                </Form>
                            )
                        }}
                    </Formik>

                </div>
            </NonAuthLayout>
        </div>
    )
}

export default TwoFactorAuthentication