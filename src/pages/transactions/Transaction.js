import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import CustomDrawer from '../../components/fields/CustomDrawer'
import TransactionDetails from './TransactionDetails'
import { useDispatch, useSelector } from 'react-redux'
import {
    getFiatTransactionsSelector,
    queryFiatTransactions,
} from '../../services/slices/transactions/getFiatTransactions'
import moment from 'moment'
import { capitalizeFLetter } from '../../utils/func'
import StatusTag from '../../components/table/StatusTag'
import { formatMoney } from '../../utils/helperFunctions'
import {
    getOneFiatTransactionsSelector,
    queryOneFiatTransactions,
} from '../../services/slices/transactions/getOneFiatTransaction'

let initialStartDate = moment(new Date('2022-09-05')).format('YYYY-MM-DD')
let initialEndDate = moment(new Date()).format('YYYY-MM-DD')

const Transaction = () => {
    const dispatch = useDispatch()

    const fiatTransaction = useSelector(getFiatTransactionsSelector)
    const oneFiatTransaction = useSelector(getOneFiatTransactionsSelector)

    const [open, setOpen] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [status, setStatus] = useState('')
    const [type, setType] = useState('')

    const columns = [
        {
            title: 'Transaction Id',
            dataIndex: 'transactionId',
            key: 'transactionId',
        },
        {
            title: 'Sender',
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
            title: 'Transaction Type',
            dataIndex: 'type',
            key: 'type',
            render: (text) => {
                return <p>{capitalizeFLetter(text)}</p>
            },
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
            render: (text) => {
                return <p>{capitalizeFLetter(text?.name)}</p>
            },
        },
        {
            title: 'Transaction Reference',
            dataIndex: 'transactionReference',
            key: 'trxRef',
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

    const handleStatusChange = (value) => {
        setStatus(value)
        dispatch(
            queryFiatTransactions({
                from: startDate || initialStartDate,
                to: endDate || initialEndDate,
                status: value,
                ...(!!type ? { type } : {}),
            })
        )
    }

    const handleTypeChange = async (value) => {
        setType(value)
        dispatch(
            queryFiatTransactions({
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

    const handleApplyFilter = async () => {
        dispatch(
            queryFiatTransactions({
                from:
                    moment(startDate).format('YYYY-MM-DD') || initialStartDate,
                to: moment(endDate).format('YYYY-MM-DD') || initialEndDate,
                ...(!!status ? { status } : {}),
                ...(!!type ? { type } : {}),
            })
        )
    }
    const handleClearFilter = async () => {
        setStartDate('')
        setEndDate('')
        dispatch(
            queryFiatTransactions({
                from: initialStartDate,
                to: initialEndDate,
                ...(!!status ? { status } : {}),
                ...(!!type ? { type } : {}),
            })
        )
    }

    const handleEndDate = async (date) => {
        setEndDate(date)
    }

    const onInputChange = (e) => {
        dispatch(
            queryFiatTransactions({
                from: initialStartDate,
                to: initialEndDate,
                ...(!!e.target.value.length ? { searchField: e.target.value } : {})
            })
        ).unwrap()
    }

    const OnEachRowClicked = (trxId) => {
        setOpen(true)
        dispatch(queryOneFiatTransactions({ id: trxId })).unwrap()
    }

    useEffect(() => {
        async function getFiatTransactions() {
            try {
                dispatch(
                    queryFiatTransactions({
                        from: initialStartDate,
                        to: initialEndDate,
                    })
                ).unwrap()
            } catch (e) { }
        }
        getFiatTransactions()
    }, [dispatch])

    return (
        <div>
            <Dashboardheader
                componentName={'FIAT Transactions'}
                label={'Manage and Monitor FIAT transactions'}
                className="mb-6"
            />
            <CustomTable
                data={fiatTransaction?.fiatTransactions?.data}
                columns={columns}
                isLoading={fiatTransaction?.loading}
                filterHeader={true}
                startDate={startDate || new Date('2022-09-05')}
                endDate={endDate || new Date()}
                handelApplyFilter={handleApplyFilter}
                handleClearFilter={handleClearFilter}
                onInputChange={onInputChange}
                handleStatusChange={handleStatusChange}
                handleTypeChange={handleTypeChange}
                onHandleStartDate={handleStartDate}
                onHandleEndDate={handleEndDate}
                onRow={(record) => {
                    return {
                        onClick: (event) => OnEachRowClicked(record?.id), // click row
                    }
                }}
            />
            <CustomDrawer
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
            >
                <TransactionDetails
                    data={oneFiatTransaction?.oneFiatTransaction?.data}
                    loading={oneFiatTransaction?.loading}
                />
            </CustomDrawer>
        </div>
    )
}

export default Transaction
