import React, { useState } from 'react'
import CustomButton from '../../components/fields/CustomButton'
import { color } from '../../assets/color'
import { PiCaretLeft } from 'react-icons/pi'
import { Col, Row } from 'antd'
import { FormHeading, FormParagraph } from '../../components/layout/style'
import { useSelector } from 'react-redux'
import { getRolesSelector } from '../../services/slices/roles/fetchRoles'
import { capitalizeFLetter } from '../../utils/func'
import CustomSelect from '../../components/fields/CustomSelect'
import { BgHolder } from './style'
import { useNavigate, useLocation } from 'react-router-dom'

const ChangeRole = ({ setChangeRole, ...props }) => {
    const roles = useSelector(getRolesSelector)
    const navigate = useNavigate()

    const location = useLocation()
    const userData = location?.state?.data

    const [updatesRoles, setUpdatesRoles] = useState([])
    console.log(updatesRoles)

    const options = roles?.role?.data?.map((option) => {
        return {
            value: option?.name?.toLowerCase(),
            label: capitalizeFLetter(option?.name),
        }
    })
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
                                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-0 md:gap-4 bg-white rounded-[12px] bottom-1 border-[#eeeeee] shadow-md p-3 md:p-10 mt-6">
                                    <div
                                        className="w-[35px] md:w-[79px] h-[35px] md:h-[79px] bg-[#E2F2F4] flex items-center justify-center"
                                        style={{ borderRadius: '100%' }}
                                    >
                                        <span className="text-main font-bold font-cabinetgrotesk text-[16px] md:text-[24px]">
                                            {userData?.firstName.slice(0, 1)}
                                            {userData?.lastName.slice(0, 1)}
                                        </span>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-main font-bold font-cabinetgrotesk text-[22px]">
                                            {userData?.firstName}{' '}
                                            {userData?.lastName}
                                        </h3>
                                        <h4 className="text-[#162E38] font-semibold text-[10px] md:text-[16px]">
                                            {userData?.email}
                                        </h4>
                                    </div>
                                </div>

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
