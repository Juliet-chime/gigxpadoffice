import React from 'react'
import { Col, Row } from 'antd'
import AdminNameDisplay from './AdminNameDisplay'
import { capitalizeFLetter } from '../../utils/func'
import TrxDetailsValue from '../transactions/TrxDetailsValue'
import CustomButton from '../../components/fields/CustomButton'
import { useNavigate } from 'react-router-dom'

const AdminDetails = ({ userData }) => {
    const navigate = useNavigate()
    return (
        <div>
            <AdminNameDisplay
                padding={'md:p-4'}
                name={` ${capitalizeFLetter(userData?.firstName)}${' '}
                                            ${capitalizeFLetter(
                                                userData?.lastName
                                            )}`}
                initials={`${userData?.firstName.toUpperCase().slice(0, 1)}
                                            ${userData?.lastName
                                                .toUpperCase()
                                                .slice(0, 1)}`}
                email={userData?.email}
            />
            {/* <hr /> */}
            <div className="border border-red-950">
                <TrxDetailsValue
                    name={'Assigned Roles'}
                    tag={() => (
                        <div className="flex flex-wrap gap-3 mt-2">
                            {userData?.roles.map((role) => (
                                <p className="bg-[#F2F3F4] rounded-[10px] text-mainColor font-medium p-2 w-auto">
                                    {capitalizeFLetter(role.name)}
                                </p>
                            ))}
                        </div>
                    )}
                />
                <TrxDetailsValue name={'Date Added'} value={''} />
                <TrxDetailsValue name={'Last Active'} value={''} />
                <TrxDetailsValue name={'Status'} value={''} />
            </div>
            <div className="mt-4">
                <Row gutter={[16]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div>
                            <CustomButton
                                text={'Update Role'}
                                bg="#F2F6F7"
                                color="#162E38"
                                onClick={() => {
                                    navigate(
                                        `/settings/changerole/${userData.firstName}`,
                                        {
                                            state: {
                                                data: userData,
                                            },
                                        }
                                    )
                                }}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="mt-2 md:mt-0">
                            <CustomButton
                                text={
                                    <span className="text-secondaryColor">
                                        Remove User
                                    </span>
                                }
                                bg="#F2F6F7"
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col span={24}>
                        <div>
                            <CustomButton
                                text={'Send Password Reset Link'}
                                bg="#F2F6F7"
                                color="#162E38"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AdminDetails
