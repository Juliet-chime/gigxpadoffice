import React, { useEffect, useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import CustomTable from '../../components/table/CustomTable'
import CustomDrawer from '../../components/fields/CustomDrawer'
import BillPaymentDetails from './BillPaymentDetails'
import { useDispatch, useSelector } from 'react-redux'
import {
    getBillTransactionsSelector,
    queryBillTransactions,
} from '../../services/slices/transactions/getBillTransactions'
import moment from 'moment'
import { capitalizeFLetter } from '../../utils/func'
import { formatMoney } from '../../utils/helperFunctions'
import StatusTag from '../../components/table/StatusTag'
import {
    getOneBillTransactionsSelector,
    queryOneBillTransactions,
} from '../../services/slices/transactions/getOneBillTransaction'

let initialStartDate = moment(new Date('2022-09-05')).format('YYYY-MM-DD')
let initialEndDate = moment(new Date()).format('YYYY-MM-DD')

const Bills = () => {
    const dispatch = useDispatch()

    const billTransaction = useSelector(getBillTransactionsSelector)
    const oneBillTransaction = useSelector(getOneBillTransactionsSelector)

    const [open, setOpen] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [status, setStatus] = useState('')
    const [billType, setBillType] = useState('')

    const handleStatusChange = (value) => {
        setStatus(value)
        dispatch(
            queryBillTransactions({
                from: startDate || initialStartDate,
                to: endDate || initialEndDate,
                status: value,
                ...(!!billType ? { type: billType } : {}),
            })
        )
    }

    const handleBillType = async (value) => {
        setBillType(value)
        dispatch(
            queryBillTransactions({
                from: startDate || initialStartDate,
                to: endDate || initialEndDate,
                type: value,
                ...(!!status ? { status } : {}),
            })
        )
    }

    const handleStartDate = async (date) => {
        setStartDate(date)
    }

    const handleEndDate = async (date) => {
        setEndDate(date)
    }

    const handleApplyFilter = async () => {
        dispatch(
            queryBillTransactions({
                from:
                    moment(startDate).format('YYYY-MM-DD') || initialStartDate,
                to: moment(endDate).format('YYYY-MM-DD') || initialEndDate,
                ...(!!status ? { status } : {}),
                ...(!!billType ? { type: billType } : {}),
            })
        )
    }
    const handleClearFilter = async () => {
        setStartDate('')
        setEndDate('')
        dispatch(
            queryBillTransactions({
                from: initialStartDate,
                to: initialEndDate,
                ...(!!status ? { status } : {}),
                ...(!!billType ? { type: billType } : {}),
            })
        )
    }

    const onInputChange = (e) => {
        alert(e.target.value)
    }

    const OnEachRowClicked = (trxId) => {
        setOpen(true)
        dispatch(queryOneBillTransactions({ id: trxId })).unwrap()
    }

    const columns = [
        {
            title: 'Transaction Id',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
            render: (text) => {
                return <p>{capitalizeFLetter(text)}</p>
            },
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
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => {
                return <p className="w-[270px]">{text}</p>
            },
        },
        {
            title: 'Bill Type',
            dataIndex: 'type',
            key: 'type',
            render: (text) => {
                return <p>{capitalizeFLetter(text)}</p>
            },
        },
        {
            title: 'Transaction Reference',
            dataIndex: 'transactionReference',
            key: 'transactionReference',
            render: (text) => {
                return <p>{!!text ? text : '-'}</p>
            },
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => {
                return <StatusTag text={text} />
            },
        },
        {
            title: 'Timestamp',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => {
                return <p>{moment(text).format('DD/MM/YYYY, h:mm:ss')}</p>
            },
        },
    ]

    useEffect(() => {
        async function getBillTransactions() {
            try {
                dispatch(
                    queryBillTransactions({
                        from: initialStartDate,
                        to: initialEndDate,
                    })
                ).unwrap()
            } catch (e) { }
        }
        getBillTransactions()
    }, [dispatch])
    return (
        <div>
            <Dashboardheader
                componentName={'Bill Payments'}
                label={'Manage and Monitor FIAT transactions'}
                className="mb-6"
            />
            <CustomTable
                data={billTransaction?.billTransactions}
                columns={columns}
                isLoading={billTransaction?.loading}
                filterHeader={true}
                startDate={startDate || new Date('2022-09-05')}
                endDate={endDate || new Date()}
                onInputChange={onInputChange}
                handleBillChange={handleBillType}
                handleStatusChange={handleStatusChange}
                onHandleStartDate={handleStartDate}
                onHandleEndDate={handleEndDate}
                handelApplyFilter={handleApplyFilter}
                handleClearFilter={handleClearFilter}
                onRow={(record) => {
                    return {
                        onClick: (event) => OnEachRowClicked(record?.id),
                    }
                }}
            />
            <CustomDrawer
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
            >
                <BillPaymentDetails
                    data={oneBillTransaction?.oneBillTransaction}
                    loading={oneBillTransaction?.loading}
                />
            </CustomDrawer>
        </div>
    )
}

export default Bills
