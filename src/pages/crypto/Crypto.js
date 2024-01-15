import React, { forwardRef, useEffect, useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import CustomTable from '../../components/table/CustomTable'
import CustomDrawer from '../../components/fields/CustomDrawer'
import { Col, Row } from 'antd'
import Blocks from '../../components/dashboardComponents/Blocks'
import { color } from '../../assets/color'
import OneDateRange from '../../components/chart/OneDateRange'
import { formatDate, formatMoney } from '../../utils/helperFunctions'
import { PiCaretDown, PiCaretUp } from 'react-icons/pi'
import CryptoDetails from '../transactions/CryptoDetails'
import {
    getCryptoTransactionsSelector,
    queryCryptoTransactions,
} from '../../services/slices/transactions/getCryptoTransactions'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { capitalizeFLetter } from '../../utils/func'
import StatusTag from '../../components/table/StatusTag'
import {
    getOneCryptoTransactionsSelector,
    queryOneCryptoTransactions,
} from '../../services/slices/transactions/getOneCryptoTransaction'
import { getCryptoChartSelector, queryCryptoChart } from '../../services/slices/transactions/getCryptoChart'

let initialStartDate = moment(new Date('2022-09-05')).format('YYYY-MM-DD')
let InitialEndDate = moment(new Date()).format('YYYY-MM-DD')

const Crypto = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [changeIcon, setChangeIcon] = useState(false)
    const [endDate, setEndDate] = useState('')
    const [assest, setAssest] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const [searchText, setSearchText] = useState('')

    console.log(searchText)

    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    const handleStartDate = async (date) => {
        setStartDate(date)
    }

    const handleEndDate = async (date) => {
        setEndDate(date)
    }

    const cryptoTransaction = useSelector(getCryptoTransactionsSelector)
    const oneCryptoTransaction = useSelector(getOneCryptoTransactionsSelector)

    const cryptoChart = useSelector(getCryptoChartSelector)

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
            title: 'Assest',
            dataIndex: 'currency',
            key: 'currency',
            render: (text) => {
                return (
                    <p>
                        {text?.name === 'usdt'
                            ? text?.name?.toUpperCase()
                            : capitalizeFLetter(text?.name)}
                    </p>
                )
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

    const OnEachRowClicked = (trxId) => {
        setOpen(true)
        dispatch(queryOneCryptoTransactions({ id: trxId })).unwrap()
    }

    const onInputChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleStatusChange = (value) => {
        setStatus(value)
        dispatch(
            queryCryptoTransactions({
                from: startDate || initialStartDate,
                to: endDate || InitialEndDate,
                status: value,
                ...(!!type ? { type } : {}),
                ...(!!assest ? { currencyShortCode: assest } : {})
            })
        )
    }

    const handleTypeChange = async (value) => {
        setType(value)
        dispatch(
            queryCryptoTransactions({
                from: startDate || initialStartDate,
                to: endDate || InitialEndDate,
                type: value,
                ...(!!status ? { status } : {}),
                ...(!!assest ? { currencyShortCode: assest } : {})
            })
        )
    }

    const handleAssestChange = async (value) => {
        setAssest(value)
        dispatch(
            queryCryptoTransactions({
                from: startDate || initialStartDate,
                to: endDate || InitialEndDate,
                currencyShortCode: value,
                ...(!!type ? { type } : {}),
                ...(!!status ? { status } : {}),
            })
        )
    }

    const handleApplyFilter = async () => {
        dispatch(
            queryCryptoTransactions({
                from:
                    moment(startDate).format('YYYY-MM-DD') || initialStartDate,
                to: moment(endDate).format('YYYY-MM-DD') || InitialEndDate,
                ...(!!status ? { status } : {}),
                ...(!!type ? { type } : {}),
                ...(!!assest ? { currencyShortCode: assest } : {})
            })
        )
    }
    const handleClearFilter = async () => {
        setStartDate('')
        setEndDate('')
        dispatch(
            queryCryptoTransactions({
                from: initialStartDate,
                to: InitialEndDate,
                ...(!!status ? { status } : {}),
                ...(!!type ? { type } : {}),
                ...(!!assest ? { currencyShortCode: assest } : {})
            })
        )
    }

    useEffect(() => {
        async function getCryptoTransactions() {
            try {
                dispatch(
                    queryCryptoTransactions({
                        from: initialStartDate,
                        to: InitialEndDate,
                    })
                ).unwrap()
                dispatch(queryCryptoChart()).unwrap()
            } catch (e) { }
        }
        getCryptoTransactions()
    }, [startDate, dispatch])

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
        const newDate = value.split('-')[0].trim()

        const today = formatDate()

        return (
            <p
                onClick={onClick}
                ref={ref}
                className={
                    'rounded-large border border-dateLine py-3 px-6 cursor-pointer flex items-center gap-2 text-mainColor text-sm font-medium '
                }
            >
                - Select Date -{' '}
                {newDate === today ? (
                    changeIcon ? (
                        <PiCaretUp className="text-mainColor text-xl font-medium" />
                    ) : (
                        <PiCaretDown className="text-mainColor text-xl font-medium" />
                    )
                ) : null}
            </p>
        )
    })

    return (
        <div>
            <div className="flex items-center gap-1">
                <Dashboardheader
                    componentName={'Crypto Transactions'}
                    label={'Manage and Monitor FIAT transactions'}
                />
                <div>
                    <OneDateRange
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        showPopperArrow={false}
                        customInput={<ExampleCustomInput />}
                        onCalendarOpen={() => setChangeIcon(true)}
                        onCalendarClose={() => setChangeIcon(false)}
                        showDateFilter
                    />
                </div>
            </div>
            <div className="mt-12 mb-8">
                <Row gutter={[16, 16]}>
                    {cryptoChart?.cryptoChart?.data.map((item, index) => <Col xs={24} sm={24} md={8} lg={7} xl={6} key={index}>
                        <Blocks
                            name={item.title}
                            nameColor={color.mainColor}
                            bigAmount={item.value}
                            padding="20px"
                            height="92px"
                            bg={color.offWhite}
                            border={`solid 1px ${color.lineAsh}`}
                        />
                    </Col>)}
                </Row>
            </div>
            <CustomTable
                data={cryptoTransaction?.cryptoTransactions?.data}
                columns={columns}
                isLoading={cryptoTransaction?.loading}
                filterHeader={true}
                startDate={startDate || new Date('2022-09-05')}
                endDate={endDate || new Date()}
                handelApplyFilter={handleApplyFilter}
                handleClearFilter={handleClearFilter}
                onInputChange={onInputChange}
                handleTypeChange={handleTypeChange}
                handleAssestChange={handleAssestChange}
                handleStatusChange={handleStatusChange}
                onHandleStartDate={handleStartDate}
                onHandleEndDate={handleEndDate}
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
                <CryptoDetails
                    loading={oneCryptoTransaction?.loading}
                    data={oneCryptoTransaction?.oneCryptoTransaction?.data}
                />
            </CustomDrawer>
        </div>
    )
}

export default Crypto
