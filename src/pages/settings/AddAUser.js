import React from 'react'
import CustomButton, {
    CustomFormikButton,
} from '../../components/fields/CustomButton'
import { PiCaretLeft } from 'react-icons/pi'
import { color } from '../../assets/color'
import { Col, Row } from 'antd'
import { FormHeading, FormParagraph } from '../../components/layout/style'
import { AddUserStyle, BgHolder } from './style'
import { InputHolder } from '../auth/login/style'
import { Formik } from 'formik'
import { Form } from 'formik-antd'
import * as Yup from 'yup'
import CustomFormikField from '../../components/fields/CustomFormikField'
import CustomFormikSelect from '../../components/fields/CustomFormikSelect'
import { useDispatch, useSelector } from 'react-redux'
import { getRolesSelector } from '../../services/slices/roles/fetchRoles'
import { capitalizeFLetter } from '../../utils/func'
import ErrorField from '../../components/fields/ErrorField'
import { queryInviteAdmin } from '../../services/slices/invite/inviteadmin'

const AddAUser = ({ setAddUser, setMessage, setStatus }) => {
    const roles = useSelector(getRolesSelector)

    const dispatch = useDispatch()

    const options = roles?.role?.data?.map((option) => {
        return {
            value: option?.name?.toLowerCase(),
            label: capitalizeFLetter(option?.name),
        }
    })

    const initialValues = { firstName: '', lastName: '', role: '', email: '' }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Please enter your first name'),
        lastName: Yup.string().required('Please enter your last name'),
        role: Yup.array().required('Please select a role'),
        email: Yup.string()
            .email('Please enter a valid email')
            .min(15)
            .required('Please enter your email')
            .matches(
                /^[A-Za-z0-9._%+-]+@gigxpad\.com$/,
                'Invalid email address'
            ),
    })

    const onHandleSubmit = async (values, { resetForm }) => {
        const roleId = values.role.map(v => roles?.role?.data.find(f => f.name.toLowerCase() === v.toLowerCase()).id)

        let data = {
            firstName: values?.firstName,
            lastName: values?.lastName,
            email: values?.email,
            roleIds: roleId
        }
        try {
            const res = await dispatch(queryInviteAdmin(data)).unwrap()
            setStatus('success')
            setMessage(res?.message)
            resetForm()

        } catch (err) {
            setStatus('error')
            setMessage(err?.errorMessage)
            resetForm()
        }
    }

    return (
        <div>
            <div>
                <CustomButton
                    bg={color.white}
                    radius="25px"
                    color={color.coinColor}
                    width="120px"
                    border="1px solid #DBDBDB"
                    text="Go Back"
                    icon={<PiCaretLeft color={color.mainColor} fontSize={20} />}
                    onClick={() => setAddUser(false)}
                    className="flex items-center"
                />
                <AddUserStyle>
                    <Row className="mt-6">
                        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                            <div className="p-0 md:pt-0 md:p-10">
                                <div>
                                    <div className="w-full xl:w-[500px]  m-auto">
                                        <FormHeading>Add new user</FormHeading>
                                        <FormParagraph>
                                            Invite new users to your admin
                                            dashboard
                                        </FormParagraph>
                                        <InputHolder>
                                            <Formik
                                                initialValues={initialValues}
                                                onSubmit={onHandleSubmit}
                                                validationSchema={
                                                    validationSchema
                                                }
                                                validateOnChange={false}
                                                validateOnBlur={false}
                                            >
                                                {({
                                                    handleChange,
                                                    handleSubmit,
                                                    isSubmitting,
                                                    handleBlur,
                                                    errors,
                                                    values,
                                                    setFieldValue,
                                                }) => {
                                                    const {
                                                        firstName,
                                                        lastName,
                                                        email,
                                                        role,
                                                    } = errors
                                                    return (
                                                        <Form
                                                            onSubmit={
                                                                handleSubmit
                                                            }
                                                        >
                                                            <CustomFormikField
                                                                value={
                                                                    values.firstName
                                                                }
                                                                onBlur={
                                                                    handleBlur
                                                                }
                                                                type={'text'}
                                                                placeholder="First name"
                                                                name="firstName"
                                                                bg={
                                                                    color.fieldColor
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                            {firstName ? (
                                                                <ErrorField
                                                                    error={
                                                                        firstName
                                                                    }
                                                                />
                                                            ) : null}
                                                            <br /> <br />
                                                            <CustomFormikField
                                                                value={
                                                                    values.lastName
                                                                }
                                                                onBlur={
                                                                    handleBlur
                                                                }
                                                                type={'text'}
                                                                placeholder="Last name"
                                                                name="lastName"
                                                                bg={
                                                                    color.fieldColor
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                            {lastName ? (
                                                                <ErrorField
                                                                    error={
                                                                        lastName
                                                                    }
                                                                />
                                                            ) : null}
                                                            <br /> <br />
                                                            <CustomFormikField
                                                                type={'email'}
                                                                name="email"
                                                                placeholder="Email Address"
                                                                bg={
                                                                    color.fieldColor
                                                                }
                                                                value={
                                                                    values.email
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                onBlur={
                                                                    handleBlur
                                                                }
                                                            />
                                                            {email ? (
                                                                <ErrorField
                                                                    error={
                                                                        email
                                                                    }
                                                                />
                                                            ) : null}
                                                            <br /> <br />
                                                            <CustomFormikSelect
                                                                mode="multiple"
                                                                allowClear
                                                                placeholder="Please select user role"
                                                                options={
                                                                    options
                                                                }
                                                                name="role"
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    setFieldValue(
                                                                        'role',
                                                                        e
                                                                    )
                                                                }}
                                                                // onChange={
                                                                //     handleChange
                                                                // }
                                                                height="3.125rem"
                                                                onBlur={
                                                                    handleBlur
                                                                }
                                                                bg={
                                                                    color.fieldColor
                                                                }
                                                            />
                                                            {role ? (
                                                                <ErrorField
                                                                    error={role}
                                                                />
                                                            ) : null}
                                                            <br /> <br />
                                                            <CustomFormikButton
                                                                bg={
                                                                    color.secondaryColor
                                                                }
                                                                text="Invite User"
                                                                type="submit"
                                                                disabled={
                                                                    isSubmitting
                                                                }
                                                            />
                                                        </Form>
                                                    )
                                                }}
                                            </Formik>
                                        </InputHolder>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                            <BgHolder className="bgHolder" />
                        </Col>
                    </Row>
                </AddUserStyle>
            </div>
        </div>
    )
}

export default AddAUser
