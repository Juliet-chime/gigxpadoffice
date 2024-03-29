import React, { useEffect } from 'react'
import DetailsHeader from '../../../components/dashboardComponents/DetailsHeader'
import { useLocation, useParams } from 'react-router-dom'
import { Col, Row } from 'antd'
import Blocks from '../../../components/dashboardComponents/Blocks'
import { color } from '../../../assets/color'
import CustomTable from '../../../components/table/CustomTable'
import { useDispatch, useSelector } from 'react-redux'
import {
    getFireblockTrxSelector,
    queryFireBlockTrx,
} from '../../../services/slices/ledger/blocksTrx'
import { formatMoney } from '../../../utils/helperFunctions'

const FireBlockTrxDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const location = useLocation()
    const { currency, data } = location.state

    const { fireblockTrx, loading } = useSelector(getFireblockTrxSelector)

    const columns = [
        {
            title: 'Transaction ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Expiry Date',
            dataIndex: 'expDate',
            key: 'expDate',
        },
        {
            title: 'Amount',
            dataIndex: 'amountUSD',
            key: 'amountUSD',
        },
        {
            title: 'Transaction type',
            dataIndex: 'operation',
            key: 'operation',
        },
        {
            title: 'Credit Balance',
            dataIndex: 'credit',
            key: 'credit',
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
        },
        {
            title: 'Transaction reference',
            dataIndex: 'reference',
            key: 'reference',
        },
    ]

    useEffect(() => {
        async function getLedgerDetails() {
            try {
                await Promise.allSettled([
                    dispatch(queryFireBlockTrx({ currency })).unwrap(),
                ])
            } catch (e) {
                console.log(e)
            }
        }
        getLedgerDetails()
    }, [dispatch, currency])
    return (
        <div>
            <>
                <DetailsHeader
                    to="/ledger"
                    text={`FireBlocks - ${id}`}
                    subText={'Ledger Balance'}
                />
            </>
            <div className="mt-12 mb-8">
                <Row>
                    <Col xs={24} sm={24} md={7} lg={7} xl={6}>
                        <Blocks
                            name="Wallet Balance"
                            namecolor={color.mainColor}
                            bigAmount={data?.availableBalance}
                            smallAmount={formatMoney({
                                amount: data?.balanceInUsd,
                                currency: '$',
                            })}
                            padding="20px"
                            height="120px"
                            bg={color.offWhite}
                            border={`solid 1px ${color.lineAsh}`}
                        />
                    </Col>
                </Row>
                <div className="mt-4">
                    <CustomTable
                        data={fireblockTrx}
                        columns={columns}
                        isLoading={loading}
                        filterHeader={true}
                        startDate={new Date('2022-09-05')}
                        endDate={new Date()}
                        handelApplyFilter={() => { }}
                        handleClearFilter={() => { }}
                        onInputChange={() => { }}
                        handleStatusChange={() => { }}
                        handleTypeChange={() => { }}
                        onHandleStartDate={() => { }}
                        onHandleEndDate={() => { }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FireBlockTrxDetails
