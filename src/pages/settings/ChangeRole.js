import React, { useState } from 'react'
import CustomButton from '../../components/fields/CustomButton'
import { color } from '../../assets/color'
import { PiCaretLeft } from 'react-icons/pi'
import { Col, Row } from 'antd'
import { FormHeading, FormParagraph } from '../../components/layout/style'
import { useSelector, useDispatch } from 'react-redux'
import { getRolesSelector } from '../../services/slices/roles/fetchRoles'
import { capitalizeFLetter } from '../../utils/func'
import CustomSelect from '../../components/fields/CustomSelect'
import { BgHolder } from './style'
import { useNavigate, useLocation } from 'react-router-dom'
import AdminNameDisplay from './AdminNameDisplay'
import { queryUpdateRole } from '../../services/slices/roles/updateRole'
import { useErrorTimeout } from '../../hooks/useTimeout'
import Notification from '../../components/notification/Notification'

const ChangeRole = ({ setChangeRole, ...props }) => {
    const roles = useSelector(getRolesSelector)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const location = useLocation()
    const userData = location?.state?.data
    const [message, setMessage, status, setStatus] = useErrorTimeout(3000)

    const [updatesRoles, setUpdatesRoles] = useState([])
    const [loading, setLoading] = useState(false)

    const options = roles?.role?.data?.map((option) => {
        return {
            value: option?.name?.toLowerCase(),
            label: capitalizeFLetter(option?.name),
        }
    })

    const onChangeRole = async () => {
        const roleId = updatesRoles.map(
            (v) =>
                roles?.role?.data.find(
                    (f) => f.name.toLowerCase() === v.toLowerCase()
                ).id
        )

        let data = {
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            roleIds: roleId,
        }
        try {
            setLoading(true)
            const res = await dispatch(
                queryUpdateRole({ data, id: userData?.id })
            ).unwrap()
            setStatus('success')
            setMessage(res?.message)
            setLoading(false)
            setUpdatesRoles([])
        } catch (e) {
            setLoading(false)
            setStatus('error')
            setMessage(e?.errorMessage)
            setUpdatesRoles([])
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            {!!message ? (
                <div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        right: '0px',
                    }}
                >
                    <Notification message={message} type={status} />
                </div>
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
                    onClick={() => navigate('/settings')}
                    className="flex items-center"
                />
            </div>
            <Row className="mt-6">
                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <div className="p-0 md:pt-0 md:p-10">
                        <div>
                            <div className=" w-full xl:w-[500px] m-auto">
                                <FormHeading>Update User Role</FormHeading>
                                <FormParagraph>
                                    Add or remove access role for this user
                                </FormParagraph>

                                <AdminNameDisplay
                                    background="white"
                                    radius="12px"
                                    border="1px solid #eeeeee"
                                    name={` ${userData?.firstName}${' '}
                                            ${userData?.lastName}`}
                                    initials={`${userData?.firstName.slice(
                                        0,
                                        1
                                    )}
                                            ${userData?.lastName.slice(0, 1)}`}
                                    email={userData?.email}
                                />

                                <div className="mt-8 changerole">
                                    <p className="mb-4 text-mainColor font-semibold text-[14px]">
                                        User Role
                                    </p>
                                    <CustomSelect
                                        mode="multiple"
                                        allowClear
                                        placeholder="Please select user role"
                                        options={options}
                                        name="role"
                                        onChange={(e) => setUpdatesRoles(e)}
                                        height="3.5rem"
                                        bg={color.fieldColor}
                                    />
                                </div>
                                <br />
                                <br />
                                <CustomButton
                                    bg={color.secondaryColor}
                                    text="Save Changes"
                                    type="submit"
                                    disabled={!!!updatesRoles?.length}
                                    loading={loading}
                                    onClick={onChangeRole}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                    <div className="h-full">
                        <BgHolder />
                    </div>
                    {/* <BgHolder /> */}
                </Col>
            </Row>
        </div>
    )
}

export default ChangeRole
