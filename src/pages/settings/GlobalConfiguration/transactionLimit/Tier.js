import { Col, Row } from 'antd'
import React from 'react'
import SectionHeader from '../../../../components/dashboardComponents/SectionHeader'
import CustomInputField from '../../../../components/fields/CustomField'
import { color } from '../../../../assets/color'
import CustomButton from '../../../../components/fields/CustomButton'

const Tier = () => {
  return (
    <div>
        <form>
        <SectionHeader header={'Deposit'} />
        <Row gutter={[16,16]}>
            <Col xs={24} sm={24} md={7} lg={7} xl={5}>
                <div className='bg-fieldAsh rounded-md py-3 px-4'>
                    <p className='text-xs text-lighterAsh'>Min Amount ($)</p>
                <CustomInputField
                height='1rem'
                value='190'
                padding='0px'
                bordered={false}
              />
                </div>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={5}>
            <div className='bg-fieldAsh rounded-md py-3 px-4'>
                    <p className='text-xs text-lighterAsh'>Max Amount ($)</p>
                <CustomInputField
                height='1rem'
                value='190'
                padding='0px'
                bordered={false}
              />
                </div>
            </Col>
        </Row>
        <SectionHeader header={'Withdrawal'} />
        <Row gutter={[16,16]}>
            <Col xs={24} sm={24} md={7} lg={7} xl={5}>
            <div className='bg-fieldAsh rounded-md py-3 px-4'>
                    <p className='text-xs text-lighterAsh'>Min Amount ($)</p>
                <CustomInputField
                height='1rem'
                value='190'
                padding='0px'
                bordered={false}
              />
                </div>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={5}>
            <div className='bg-fieldAsh rounded-md py-3 px-4'>
                    <p className='text-xs text-lighterAsh'>Max Amount ($)</p>
                <CustomInputField
                height='1rem'
                value='190'
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

export default Tier