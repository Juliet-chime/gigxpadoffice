import React from 'react'
import SectionHeader from '../../../../components/dashboardComponents/SectionHeader'
import { Col, Row } from 'antd'
import CustomInputField from '../../../../components/fields/CustomField'
import CustomButton from '../../../../components/fields/CustomButton'
import { color } from '../../../../assets/color'
import { Tooltip } from 'antd'
import MessageComponent from '../../../../components/notification/MessageComponent'

const OtcChange = ({
    currencyName,
    rateValue,
    setRateValue,
    loading,
    onChangeRate,
    message,
    status,
}) => {
    console.log(rateValue)
    const unEditRateStyle = {
        color: '#88979E',
        fontSize: '12px',
    }

    return (
        <div>
            {message ? (
                <MessageComponent msg={message} status={status} />
            ) : null}
            <form>
                <SectionHeader header={'Exchange Rate'} />
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                        <div className="bg-fieldAsh rounded-md py-3 px-4">
                            <Tooltip
                                placement="bottomRight"
                                title="You can’t edit this value"
                                overlayStyle={{
                                    background: 'white',
                                    marginTop: '8px',
                                }}
                                arrow={false}
                                overlayInnerStyle={{
                                    color: ' #67777E',
                                    maxWidth: '120px',
                                    textAlign: 'center',
                                }}
                            >
                                <span style={unEditRateStyle}>
                                    {currencyName} Value
                                </span>{' '}
                                <br />
                                <span style={unEditRateStyle}>1.00</span>
                            </Tooltip>
                            {/* <p className="text-xs text-lighterAsh">
                                Buy Amount ($)
                            </p>
                            <CustomInputField
                                height="1rem"
                                value="0.0060"
                                padding="0px"
                                bordered={false}
                            /> */}
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                        <div className="bg-fieldAsh rounded-md py-3 px-4">
                            <span className="text-xs font-semibold text-lighterAsh">
                                NGN Value
                            </span>
                            <CustomInputField
                                height="1rem"
                                value={rateValue}
                                padding="0px"
                                bordered={false}
                                color="162E38"
                                className="font-semibold"
                                onChange={(e) => setRateValue(e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                        <div>
                            <CustomButton
                                bg={color.secondaryColor}
                                text="Apply Changes"
                                loading={loading}
                                onClick={onChangeRate}
                            />
                        </div>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default OtcChange
