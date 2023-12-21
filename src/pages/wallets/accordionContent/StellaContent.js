import { Col, Row } from 'antd'
import React from 'react'
import WalletCard from '../WalletCard'
import { color } from '../../../assets/color'
import SectionHeader from '../../../components/dashboardComponents/SectionHeader'
import { useSelector } from 'react-redux'
import { getStellasBalanceSelector } from '../../../services/slices/dashboard/stellaBalance'
import { formatMoney } from '../../../utils/helperFunctions'
import { useNavigate } from 'react-router-dom'

const StellaContent = () => {
    const navigate = useNavigate()
    const { stellasBalance, loading } = useSelector(getStellasBalanceSelector)

    return (
        <div>
            <SectionHeader header={'Transactional'} />
            <Row gutter={[16, 16]}>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        name={'Transactions'}
                        coinAmt={formatMoney({ amount: stellasBalance?.accountBalance })
                        }
                        bg={color.lightYellow}
                        loading={loading}
                        onViewLedgerBalance={() => {
                            navigate(
                                `/ledger/stellas/details`,
                            )
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default StellaContent