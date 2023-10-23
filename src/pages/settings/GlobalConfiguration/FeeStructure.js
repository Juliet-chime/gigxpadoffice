import { Col, Row } from 'antd'
import React from 'react'
import CustomInputField from '../../../components/fields/CustomField'
import { color } from '../../../assets/color'
import CustomButton from '../../../components/fields/CustomButton'

const FeeStructure = () => {
    return (
        <div className="border border-ash-3 rounded-lg p-2 md:p-6 lg:p-6 xl:p-6">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="border border-ash-3 rounded-24">
                        <h2 className="border-b border-ash-3 font-medium text-mainColor text-sm p-6 pb-3">
                            CRYPTO FEES
                        </h2>
                        <div className="p-6">
                            <div>
                                <h3 className="text-sm font-semibold text-black-200 mb-4">
                                    Swap Fee
                                </h3>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <CustomInputField
                                                placeholder="FIAT to Crypto"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <CustomInputField
                                                placeholder="Crypto to FIAT"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <br />
                            <div>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <h3 className="text-sm font-semibold text-black-200 mb-4">
                                                Buy Crypto Fee
                                            </h3>
                                            <CustomInputField
                                                placeholder="Amount"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <h3 className="text-sm font-semibold text-black-200 mb-4">
                                                Send Crypto Fee
                                            </h3>
                                            <CustomInputField
                                                placeholder="Amount"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="border border-ash-3 rounded-24">
                        <h2 className="border-b border-ash-3 font-medium text-mainColor text-sm p-6 pb-3">
                            Fiat Fees
                        </h2>
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-black-200 mb-4">
                                Bill Payment
                            </h3>
                            <CustomInputField
                                placeholder="Fee Amount (%)"
                                bg={color.fieldColor}
                                radius="12px"
                            />
                            <br />
                            <br />

                            <div>
                                <Row gutter={[16, 16]}>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <h3 className="text-sm font-semibold text-black-200 mb-4">
                                                Withdrawal
                                            </h3>
                                            <CustomInputField
                                                placeholder="Fee Amount (%)"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
                                        <div>
                                            <h3 className="text-sm font-semibold text-black-200 mb-4">
                                                Transfer
                                            </h3>
                                            <CustomInputField
                                                placeholder="Fee Amount"
                                                bg={color.fieldColor}
                                                radius="12px"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="flex justify-end mt-5">
                <CustomButton
                    width="181px"
                    bg={color.secondaryColor}
                    text="Apply Changes"
                />
            </div>
        </div>
    )
}

export default FeeStructure
