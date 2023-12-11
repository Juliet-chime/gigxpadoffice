import React from 'react'
import CustomButton, {
    CustomFormikButton,
} from '../../components/fields/CustomButton'
import { color } from '../../assets/color'
import { PiCaretLeft } from 'react-icons/pi'
import { FiPlusCircle } from 'react-icons/fi'
import { Col, Row } from 'antd'
import { Form } from 'formik-antd'
import { Formik } from 'formik'
import CustomFormikField from '../../components/fields/CustomFormikField'

import AccessandPrivileges from './AccessandPrivileges'

const AddARole = ({ setAddRole }) => {
    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                    <div className="mt-24">
                        <div>
                            <CustomButton
                                bg={color.white}
                                radius="25px"
                                color={color.coinColor}
                                width="120px"
                                border="1px solid #DBDBDB"
                                text="Go Back"
                                icon={
                                    <PiCaretLeft
                                        color={color.mainColor}
                                        fontSize={20}
                                    />
                                }
                                onClick={() => setAddRole(false)}
                                className="flex items-center"
                            />
                        </div>
                        <section className="px-8">
                            <div className="mt-[59px]">
                                <h1 className="font-bold text-mainColor text-[24px] font-cabinetgrotesk">
                                    Add new Role
                                </h1>
                                <p className="text-[14px] text-lighterAsh">
                                    Create a new role and assign to other users
                                </p>
                            </div>
                            <div>
                                <Formik>
                                    {() => {
                                        return (
                                            <Form className="mt-[45px]">
                                                <CustomFormikField
                                                    type={'text'}
                                                    placeholder="Role name"
                                                    bg={color.fieldColor}
                                                />
                                                <br />
                                                <br />
                                                <CustomFormikField
                                                    type={'text'}
                                                    placeholder="Description (If Any)"
                                                    bg={color.fieldColor}
                                                />
                                                <br />
                                                <br />
                                                <CustomButton
                                                    bg={color.white}
                                                    radius="25px"
                                                    color={color.coinColor}
                                                    width="170px"
                                                    border="1px solid #DBDBDB"
                                                    text="Assign to a user"
                                                    icon={
                                                        <FiPlusCircle
                                                            color={
                                                                color.secondaryColor
                                                            }
                                                            fontSize={20}
                                                        />
                                                    }
                                                    onClick={() =>
                                                        setAddRole(false)
                                                    }
                                                    className="flex items-center"
                                                />
                                                <br />
                                                <CustomFormikButton
                                                    bg={color.secondaryColor}
                                                    text="Create Role"
                                                    type="submit"
                                                />
                                            </Form>
                                        )
                                    }}
                                </Formik>
                            </div>
                        </section>
                    </div>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={14}
                    xl={14}
                    className="border-0 border-l border-[#DBDBDB]"
                >
                    <AccessandPrivileges />
                </Col>
            </Row>
        </>
    )
}

export default AddARole
