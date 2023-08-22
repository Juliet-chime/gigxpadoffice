import React from 'react'
import NonAuthLayout from '../../../components/layout/NonAuthLayout'
import signBg from "../../../assets/images/signBg.png";
import PinInputField from '../../../components/fields/PinInputField';
import { Formik } from 'formik';
import { Form } from 'formik-antd';
import * as Yup from 'yup'
import { CustomFormikButton } from '../../../components/fields/CustomButton';
import { color } from '../../../assets/color';

const TwoFactorAuthentication = () => {
    const faValues = { pin: '' }

    const validationSchema = Yup.object({
        pin: Yup.string()
            .required()
            .matches(/^[0-9]+$/, 'Must be only digits')
            .min(6, 'Pin must be exactly 6 digits')
            .max(6, 'Pin must be exactly 6 digits'),
    })


    const onHandleSubmit = (values) => {
        console.log('fgh', values)
    }
    return (
        <div>
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
                <div className='mt-6'>
                    <Formik
                        initialValues={faValues}
                        onSubmit={onHandleSubmit}
                        validationSchema={validationSchema}
                        validateOnChange={false}
                        validateOnMount={false}
                    >
                        {({ handleSubmit, errors, isSubmitting }) => {
                            return (
                                <Form className="" onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <PinInputField
                                            length={6}
                                            type="numeric"
                                            name="pin"
                                        />
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