import React from 'react'
import SectionHeader from '../../../components/dashboardComponents/SectionHeader'
import { Col, Row } from 'antd'
import WalletCard from '../WalletCard'
import { color } from '../../../assets/color'
import { formatMoney } from '../../../utils/helperFunctions'
import { useNavigate } from 'react-router-dom'

const FireBlockContent = ({
    fireBlockUSDTrx,
    fireBlockUSDSaving,
    fireBlockBTCTrx,
    fireBlockBTCSaving,
    loading,
}) => {
    const navigate = useNavigate()
    return (
        <div>
            <SectionHeader header={'Transactional'} />
            <Row gutter={[16, 16]}>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        name={'Transactions'}
                        currency={fireBlockUSDTrx?.name}
                        coin={fireBlockUSDTrx?.availableBalance}
                        //coinAmt={fireBlockUSDTrx?.availableBalance}
                        rate={formatMoney({
                            amount: fireBlockUSDTrx?.balanceInUsd,
                            currency: '$',
                        })}
                        bg={color.lightYellow}
                        loading={loading}
                        onViewLedgerBalance={() => {
                            navigate(
                                `/ledger/fireblockstransaction/USD Transaction`,
                                {
                                    state: {
                                        currency: 'usdt',
                                        data: fireBlockUSDTrx,
                                    },
                                }
                            )
                        }}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        name={'Transactions'}
                        bg={color.lightGreen}
                        currency={fireBlockBTCTrx?.name}
                        coin={fireBlockBTCTrx?.availableBalance}
                        loading={loading}
                        //coinAmt={'₦4,880,169.00'}
                        rate={formatMoney({
                            amount: fireBlockBTCTrx?.balanceInUsd,
                            currency: '$',
                        })}
                        onViewLedgerBalance={() => {
                            navigate(
                                `/ledger/fireblockstransaction/BTC Transaction`,
                                {
                                    state: {
                                        currency: 'btc',
                                        data: fireBlockBTCTrx,
                                    },
                                }
                            )
                        }}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        name={'Savings'}
                        bg={color.lightBlue}
                        currency={fireBlockUSDSaving?.name}
                        coin={fireBlockUSDSaving?.availableBalance}
                        loading={loading}
                        //coinAmt={'₦36,880,169.00'}
                        rate={formatMoney({
                            amount: fireBlockUSDSaving?.balanceInUsd,
                            currency: '$',
                        })}
                        onViewLedgerBalance={() => {
                            navigate(`/ledger/fireblocksaving/USDT Savings`, {
                                state: {
                                    currency: 'usdt',
                                    data: fireBlockUSDSaving,
                                },
                            })
                        }}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <WalletCard
                        name={'Savings'}
                        bg={color.lightWhite}
                        currency={fireBlockBTCSaving?.name}
                        coin={fireBlockBTCSaving?.availableBalance}
                        loading={loading}
                        //coinAmt={'₦41,880,169.00'}
                        rate={formatMoney({
                            amount: fireBlockBTCSaving?.balanceInUsd,
                            currency: '$',
                        })}
                        onViewLedgerBalance={() => {
                            navigate(`/ledger/fireblocksaving/BTC Savings`, {
                                state: {
                                    currency: 'btc',
                                    data: fireBlockBTCSaving,
                                },
                            })
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default FireBlockContent