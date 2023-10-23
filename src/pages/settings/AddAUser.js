import React from 'react'
import CustomButton, {
    CustomFormikButton,
} from '../../components/fields/CustomButton'
import { PiCaretLeft } from 'react-icons/pi'
import { color } from '../../assets/color'
import { Col, Row } from 'antd'
import { LayoutChildwrapper } from '../../components/layout/style'
import { AddUserStyle } from './style'
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
import { queryInviteSuperAdmin } from '../../services/slices/invite/inviteSuperAdmin'
import { useErrorTimeout } from '../../hooks/useTimeout'
import Notification from '../../components/notification/Notification'

const AddAUser = ({ setAddUser }) => {
    const roles = useSelector(getRolesSelector)
    const dispatch = useDispatch()

    const [message, setMessage, status, setStatus] = useErrorTimeout()

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
        role: Yup.string().required('Please select a role'),
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Please enter your email')
            .matches(
                /^[A-Za-z0-9._%+-]+@gigxpad\.com$/,
                'Invalid email address'
            ),
    })

    const onHandleSubmit = async (values) => {
        let data = {
            firstName: values?.firstName,
            lastName: values?.lastName,
            email: values?.email,
        }

        try {
            if (values?.role === 'super_admin') {
                const res = await dispatch(queryInviteSuperAdmin(data)).unwrap()
                if (res?.status === 'success') {
                    setStatus('success')
                    setMessage(res?.message)
                }
            } else {
                const role_id = roles?.role?.data?.find(
                    (id) => id?.name?.toLowerCase() === values?.role
                )
                data = {
                    ...data,
                    roleId: role_id?.id,
                }
                const res = await dispatch(queryInviteAdmin(data)).unwrap()
                if (res?.status === 'success') {
                    setStatus('success')
                    setMessage(res?.message)
                }
            }
        } catch (err) {
            if (err?.success === false) {
                setStatus('error')
                setMessage(err?.errorMessage)
            }
        }
    }
    return (
        <div>
            {!!message ? (
                <Notification message={message} type={status} />
            ) : null}
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
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                            <div>
                                <LayoutChildwrapper>
                                    <h1>Add new user</h1>
                                    <p>
                                        Invite new users to your admin dashboard
                                    </p>
                                    <InputHolder>
                                        <Formik
                                            initialValues={initialValues}
                                            onSubmit={onHandleSubmit}
                                            validationSchema={validationSchema}
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
                                            }) => {
                                                const {
                                                    firstName,
                                                    lastName,
                                                    email,
                                                    role,
                                                } = errors
                                                return (
                                                    <Form
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <CustomFormikField
                                                            value={
                                                                values.firstName
                                                            }
                                                            onBlur={handleBlur}
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
                                                            onBlur={handleBlur}
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
                                                                error={lastName}
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
                                                            value={values.email}
                                                            onChange={
                                                                handleChange
                                                            }
                                                            onBlur={handleBlur}
                                                        />
                                                        {email ? (
                                                            <ErrorField
                                                                error={email}
                                                            />
                                                        ) : null}
                                                        <br /> <br />
                                                        <CustomFormikSelect
                                                            placeholder="Please select user role"
                                                            options={options}
                                                            name="role"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            height="3.125rem"
                                                            onBlur={handleBlur}
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
                                </LayoutChildwrapper>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                            <div className="bgHolder" />
                        </Col>
                    </Row>
                </AddUserStyle>
            </div>
        </div>
    )
}

export default AddAUser
