import React from 'react'
import SectionHeader from '../../../components/dashboardComponents/SectionHeader'
import { Col, Row } from 'antd'
import WalletCard from '../WalletCard'
import { color } from '../../../assets/color'
import { useSelector } from 'react-redux'
import { getBaxiBalanceSelector } from '../../../services/slices/dashboard/BaxiBalance'
import { formatMoney } from '../../../utils/helperFunctions'

const BaxiContent = () => {
    const { baxiBalance, loading } = useSelector(getBaxiBalanceSelector)
    return (
        <div>
            <SectionHeader header={'Transactional'} />
            <Row gutter={[16, 16]}>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        name={'Transactions'}
                        coinAmt={formatMoney({
                            amount: baxiBalance?.accountBalance,
                        })}
                        bg={color.lightYellow}
                        loading={loading}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default BaxiContent
