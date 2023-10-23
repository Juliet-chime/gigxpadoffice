import React from 'react'
import SectionHeader from '../../../components/dashboardComponents/SectionHeader'
import { Col, Row } from 'antd'
import WalletCard from '../WalletCard'
import { color } from '../../../assets/color'

const QuidaxContent = () => {
    return (
        <div>
            <SectionHeader header={'Transactional'} />
            <Row gutter={[16, 16]}>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        currency={'Bitcoin'}
                        coin="2.0004983"
                        coinAmt={'₦36,880,169.00'}
                        rate={'₦18,780,100.00'}
                        bg={color.lightYellow}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        bg={color.lightGreen}
                        currency={'Tether'}
                        coin="6,700.53"
                        coinAmt={'₦4,880,169.00'}
                        rate={'₦18,780,100.00'}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        bg={color.lightBlue}
                        currency={'Naira'}
                        coin="380,740.00"
                        coinAmt={'₦36,880,169.00'}
                        rate={'₦1'}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        bg={color.lightWhite}
                        currency={'Ethereum'}
                        coin="453.44"
                        coinAmt={'₦41,880,169.00'}
                        rate={'₦99,959'}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default QuidaxContent
