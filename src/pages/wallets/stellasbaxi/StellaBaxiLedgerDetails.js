import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    getStellaBaxiLedgerSelector,
    queryStellaBaxiLedger,
} from '../../../services/slices/ledger/stella-baxi'
import { useDispatch, useSelector } from 'react-redux'
import CustomTable from '../../../components/table/CustomTable'
import DetailsHeader from '../../../components/dashboardComponents/DetailsHeader'
import { capitalizeFLetter } from '../../../utils/func'
import StatusTag from '../../../components/table/StatusTag'
import moment from 'moment'
import { formatMoney } from '../../../utils/helperFunctions'

const StellaBaxiLedgerDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { data, loading: isLoading } = useSelector(
        getStellaBaxiLedgerSelector
    )

    const columns = [
        {
            title: 'Transaction ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Customer name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Description',
            dataIndex: 'narration',
            key: 'narration',
        },

        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (text) => {
                return <p>{formatMoney({ amount: text })}</p>
            },
        },
        {
            title: 'Transaction type',
            dataIndex: 'transactionType',
            key: 'transactionType',
            render: (text) => {
                return <p>{capitalizeFLetter(text)}</p>
            },
            align: 'center',
        },
        {
            title: '',
            dataIndex: 'credit',
            key: 'credit',
        },
        {
            title: 'Date',
            dataIndex: 'paymentDate',
            key: 'paymentDate',
            render: (text) => {
                return <p>{moment(text).format('DD/MM/YYYY, h:mm:ss')}</p>
            },
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => {
                return <StatusTag text={text} />
            },
        },
    ]

    useEffect(() => {
        async function getStellaBaxiLedger() {
            await dispatch(queryStellaBaxiLedger({ name: id }))
        }
        getStellaBaxiLedger()
    }, [dispatch, id])

    return (
        <div>
            <>
                <DetailsHeader
                    to="/ledger"
                    text={`${capitalizeFLetter(id)}`}
                    subText={'Ledger Balance'}
                />
            </>
            <div className="mt-12 mb-8">
                {/* <Row>
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
        </Row> */}
                <div className="mt-4">
                    <CustomTable
                        data={data?.data}
                        columns={columns}
                        isLoading={isLoading}
                        filterHeader={true}
                        startDate={new Date('2022-09-05')}
                        endDate={new Date()}
                        handelApplyFilter={() => {}}
                        handleClearFilter={() => {}}
                        onInputChange={() => {}}
                        handleStatusChange={() => {}}
                        handleTypeChange={() => {}}
                        onHandleStartDate={() => {}}
                        onHandleEndDate={() => {}}
                    />
                </div>
            </div>
        </div>
    )
}

export default StellaBaxiLedgerDetails
