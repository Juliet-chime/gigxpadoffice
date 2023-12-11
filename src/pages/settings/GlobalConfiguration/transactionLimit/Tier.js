import { Col, Row } from 'antd'
import React from 'react'
import SectionHeader from '../../../../components/dashboardComponents/SectionHeader'
import { color } from '../../../../assets/color'
import { CustomFormikButton } from '../../../../components/fields/CustomButton'
import * as Yup from 'yup'
import { Formik } from 'formik'
import CustomFormikField from '../../../../components/fields/CustomFormikField'
import ErrorField from '../../../../components/fields/ErrorField'
import { Form } from 'formik-antd'
import { useDispatch, useSelector } from 'react-redux'
import {
    getLimitSelector,
    queryLimit,
} from '../../../../services/slices/settings/globalconfig/limit'
import Loader from '../../../../components/loader/Loader'

const Tier = ({ level }) => {
    const { limit, loading } = useSelector(getLimitSelector)

    const defaultVal = limit?.find((item) => item?.level === level)

    const initialValues = {
        min: defaultVal?.minimumAmount,
        max: defaultVal?.maximumAmount,
    }

    const dispatch = useDispatch()

    const limitSchema = Yup.object({
        min: Yup.string().required('Please enter a min value'),
        max: Yup.string().required('Please enter a max value'),
    })

    const onLimitUpdate = async (values) => {
        const data = {
            level: level,
            minimumAmount: values.min,
            maximumAmount: values.max,
        }
        try {
            await dispatch(queryLimit({ data })).unwrap()
        } catch (e) {}
    }

    return (
        <div>
            <SectionHeader header={'Withdrawal'} />
            <Formik
                initialValues={initialValues}
                onSubmit={onLimitUpdate}
                validationSchema={limitSchema}
            >
                {({
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    errors,
                    values,
                }) => {
                    const { min, max } = errors
                    return (
                        <Form onSubmit={handleSubmit}>
                            {loading ? (
                                <div className="h-[200px]">
                                    <Loader />
                                </div>
                            ) : (
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                                        <div>
                                            <div className="bg-fieldAsh rounded-md py-3 px-4">
                                                <p className="text-xs text-lighterAsh">
                                                    Min Amount ($)
                                                </p>
                                                <CustomFormikField
                                                    height="1rem"
                                                    name="min"
                                                    value={values.min}
                                                    padding="0px"
                                                    bordered={false}
                                                    type="number"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {!!min ? (
                                                <ErrorField error={min} />
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                                        <div>
                                            <div className="bg-fieldAsh rounded-md py-3 px-4">
                                                <p className="text-xs text-lighterAsh">
                                                    Max Amount ($)
                                                </p>
                                                <CustomFormikField
                                                    height="1rem"
                                                    name="max"
                                                    value={values.max}
                                                    padding="0px"
                                                    bordered={false}
                                                    type="number"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {!!max ? (
                                                <ErrorField error={max} />
                                            ) : null}
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                                        <div>
                                            <CustomFormikButton
                                                bg={color.secondaryColor}
                                                text="Apply Changes"
                                                type="submit"
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                        </Form>
                    )
                }}
            </Formik>
            <form></form>
        </div>
    )
}

export default Tier
