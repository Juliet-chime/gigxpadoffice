import React from 'react'
import SectionHeader from '../../../../components/dashboardComponents/SectionHeader'
import { Col, Row } from 'antd'
import CustomInputField from '../../../../components/fields/CustomField'
import CustomButton from '../../../../components/fields/CustomButton'
import { color } from '../../../../assets/color'

const OtcChange = () => {
    return (
        <div>
            <form>
            <SectionHeader header={'Exchange Rate'} />
            <Row gutter={[16,16]}>
                <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                    <div className='bg-fieldAsh rounded-md py-3 px-4'>
                        <p className='text-xs text-lighterAsh'>Buy Amount ($)</p>
                    <CustomInputField
                    height='1rem'
                    value='0.0060'
                    padding='0px'
                    bordered={false}
                  />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                <div className='bg-fieldAsh rounded-md py-3 px-4'>
                        <p className='text-xs text-lighterAsh'>Sell Amount ($)</p>
                    <CustomInputField
                    height='1rem'
                    value='0.00896'
                    padding='0px'
                    bordered={false}
                  />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                <div>
                <CustomButton
                    bg={color.secondaryColor}
                    text="Apply Changes"
                  />
                    </div>
                </Col>
            </Row>
            
            </form>
        </div>
      )
}

export default OtcChange