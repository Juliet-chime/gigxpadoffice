import React, { forwardRef, useState, useEffect } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import SectionHeader from '../../components/dashboardComponents/SectionHeader'
import { Col, Row } from 'antd'
import Blocks from '../../components/dashboardComponents/Blocks'
import { Link } from 'react-router-dom'
import { color } from '../../assets/color'
import { MdArrowOutward } from 'react-icons/md'
import { BlockStyle } from '../../components/dashboardComponents/style'
import ChartHeader from '../../components/chart/ChartHeader'
import BarChart from '../../components/chart/BarChart'
// import { , doughnutdata, barLabels, } from '../../components/chart/data'
import { DoughnutChart } from '../../components/chart/DoughnutChart'
import CurrencyTabComponent from './CurrencyTabComponent'
import ChartLabels from '../../components/chart/ChartLabels'
import OneDateRange from '../../components/chart/OneDateRange'
import { formatMoney } from '../../utils/helperFunctions'
import { PiCaretUp, PiCaretDown } from 'react-icons/pi'
import CustomTab from '../../components/tabination/CustomTab'
import { useDispatch, useSelector } from 'react-redux'
import { queryRoles } from '../../services/slices/roles/fetchRoles'
import { get2FaSelector } from '../../services/slices/auth/2fa'
import {
    getFiatMetricSelector,
    queryFiatMetrics,
} from '../../services/slices/dashboard/fiatMetrics'
import {
    getFiatRevenueSelector,
    queryFiatRevenue,
} from '../../services/slices/dashboard/fiatRevenue'
import {
    getCryptoMetricsSelector,
    queryCryptoMetrics,
} from '../../services/slices/dashboard/cryptoMetrics'
import {
    getUserChartSelector,
    queryUserChart,
} from '../../services/slices/user/userChart'
import moment from 'moment'
import {
    cryptoCurrencyOptions,
    fiatCurrencyOptions,
    revenueItem,
} from '../../utils/constants'
import CustomSelect from '../../components/fields/CustomSelect'
import { GrFormCheckmark } from 'react-icons/gr'
import ngflag from '../../assets/images/9jaflag.svg'
import Loader from '../../components/loader/Loader'

let initialStartDate = moment(new Date('2022-04-19')).format('YYYY-MM-DD')
let InitialEndDate = moment(new Date()).format('YYYY-MM-DD')
let initialFiatCurrency = 'NGN'
let initialCryptoCurrency = 'BTC'
let revenueCurrencyType = revenueItem[0]

export default function Dashboard() {
    const dispatch = useDispatch()

    const user = useSelector(get2FaSelector)
    const firstname = user?.user?.firstName
    const revenue = useSelector(getFiatRevenueSelector)
    const fiatMetrics = useSelector(getFiatMetricSelector)
    const cryptoMetrics = useSelector(getCryptoMetricsSelector)
    const userMetrics = useSelector(getUserChartSelector)

    const revenueAmount = revenue?.fiatRevenue?.revenue
    const revenueProfit = revenue?.fiatRevenue?.profit

    const [changeFiatIcon, setChangeFiatIcon] = useState(false)
    const [changeCryptoIcon, setChangeCryptoIcon] = useState(false)
    const [changeIcon, setChangeIcon] = useState(false)
    const [currencyType, setCurrencyType] = useState(revenueItem[0])
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(null);
    const [fiatStartDate, setFiatStartDate] = useState('')
    const [fiatEndDate, setFiatEndDate] = useState('')
    const [cryptoStartDate, setCryptoStartDate] = useState('')
    const [cryptoEndDate, setCryptoEndDate] = useState('')
    const [revenueStartDate, setRevenueStartDate] = useState('')
    const [revenueEndDate, setRevenueEndDate] = useState('')
    const [fiatCurrency, setFiatCurrency] = useState('NGN')
    const [cryptoCurrency, setCryptoCurrency] = useState('BTC')

    const items = revenueItem.map((data, index) => {
        return {
            key: index + 1,
            label: data.toUpperCase(),
            children: (
                <CurrencyTabComponent
                    loading={revenue?.loading}
                    revenueAmount={formatMoney({
                        amount: (revenueAmount || [])[0]?.totalAmount,
                    })}
                    profitAmount={formatMoney({
                        amount: (revenueProfit || [])[0]?.totalCharge,
                    })}
                />
            ),
        }
    })

    //fiat chart
    const fiatMetricData = Object.keys(fiatMetrics?.fiatMetrics || {})
        .filter((fiatName) => fiatName !== 'total')
        .map((items) => fiatMetrics?.fiatMetrics[items])

    const fiatDataSet = [
        {
            data: fiatMetricData,
            backgroundColor: ['#A7EFBD', '#CCECF8', '#FF9A9A'],
        },
    ]

    const fiatLabels = Object.keys(fiatMetrics?.fiatMetrics || {})
        .filter((fiatName) => fiatName !== 'total')
        .fill('')

    const fiatOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                position: 'right',
                min: 1000000,
                max: 10000000,
                ticks: {
                    stepSize: 2000000,
                    callback: function (label, index, labels) {
                        // const num = log10(label)

                        return Math.round(label / 1000000) + 'M'
                    },
                },
                grid: {
                    color: '#E4E4E4',
                    drawTicks: false,
                },
                border: {
                    dash: [2, 4],
                },
                //  title:{
                //   display:true,
                //   color:'red',
                //   text:'edee'
                //    }
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
    }

    // crypto chart

    const cryptoMetricData = Object.keys(cryptoMetrics?.cryptoMetrics || {})
        .filter((cryptoName) => cryptoName !== 'total')
        .map((items) => cryptoMetrics?.cryptoMetrics[items])

    const cryptoDataSet = [
        {
            data: cryptoMetricData,
            backgroundColor: ['#A7EFBD', '#CCECF8', '#FF9A9A'],
        },
    ]

    const cryptoLabels = Object.keys(cryptoMetrics?.cryptoMetrics || {})
        .filter((cryptoName) => cryptoName !== 'total')
        .fill('')

    const cryptoOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                position: 'right',
                // min: 1000000,
                // max: 10000000,
                // ticks: {
                //   stepSize: 50000,
                //   callback: function (label, index, labels) {
                //     return Math.round(label / 1000000) + 'M';
                //   }
                // },
                grid: {
                    color: '#E4E4E4',
                    drawTicks: false,
                },
                border: {
                    dash: [2, 4],
                },
                //  title:{
                //   display:true,
                //   color:'red',
                //   text:'edee'
                //    }
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
    }

    //user Chart

    const userMetricData = Object.keys(userMetrics?.userChart || {})
        .filter((userName) => userName !== 'totalCustomers')
        .map((items) => userMetrics?.userChart[items])

    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
    }

    const doughnutdata = {
        labels: [],
        datasets: [
            {
                // label: '# of Votes',
                data: userMetricData,
                backgroundColor: ['#D6FF79', '#C5D3DE', '#FF9D79'],
                borderColor: ['#D6FF79', '#C5D3DE', '#FF9D79'],
                borderWidth: 1,
            },
        ],
    }

    //change revenue currency

    const onChangeRevenueLabel = (e) => {
        setCurrencyType(revenueItem[e - 1])
        dispatch(
            queryFiatRevenue({
                from: !!revenueStartDate
                    ? moment(revenueStartDate).format('YYYY-MM-DD')
                    : initialStartDate,
                to: !!revenueEndDate
                    ? moment(revenueEndDate).format('YYYY-MM-DD')
                    : InitialEndDate,
                currencyType: revenueItem[e - 1],
            })
        ).unwrap()
    }
    //onchange currency

    const onChangeFiatCurrency = (currency) => {
        setFiatCurrency(currency)
        dispatch(
            queryFiatMetrics({
                from: fiatStartDate
                    ? moment(fiatStartDate).format('YYYY-MM-DD')
                    : initialStartDate,
                to: fiatEndDate
                    ? moment(fiatEndDate).format('YYYY-MM-DD')
                    : InitialEndDate,
                currencyShortCode: currency,
            })
        ).unwrap()
    }

    const onChangeCryptoCurrency = (currency) => {
        setCryptoCurrency(currency)
        dispatch(
            queryCryptoMetrics({
                from: cryptoStartDate
                    ? moment(cryptoStartDate).format('YYYY-MM-DD')
                    : initialStartDate,
                to: cryptoEndDate
                    ? moment(cryptoEndDate).format('YYYY-MM-DD')
                    : InitialEndDate,
                currencyShortCode: currency,
            })
        ).unwrap()
    }

    //onchange metrics date

    const onChangeRevenueDate = (dates) => {
        const [start, end] = dates
        setRevenueStartDate(start)
        setRevenueEndDate(end)
    }

    const onChangeFiatDate = (dates) => {
        const [start, end] = dates
        setFiatStartDate(start)
        setFiatEndDate(end)
    }
    const onChangeCryptoDate = (dates) => {
        const [start, end] = dates
        setCryptoStartDate(start)
        setCryptoEndDate(end)
    }

    //apply metrics filters

    const OnApplyRevenueFilter = () => {
        const from = moment(revenueStartDate).format('YYYY-MM-DD')
        const to = moment(
            revenueEndDate === null ? new Date() : revenueEndDate
        ).format('YYYY-MM-DD')
        dispatch(queryFiatRevenue({ from, to, currencyType })).unwrap()
    }

    const OnApplyFiatFilter = () => {
        const from = moment(fiatStartDate).format('YYYY-MM-DD')
        const to = moment(
            fiatEndDate === null ? new Date() : fiatEndDate
        ).format('YYYY-MM-DD')
        dispatch(
            queryFiatMetrics({ from, to, currencyShortCode: fiatCurrency })
        ).unwrap()
    }

    const OnApplyCryptoFilter = () => {
        const from = moment(cryptoStartDate).format('YYYY-MM-DD')
        const to = moment(
            cryptoEndDate === null ? new Date() : cryptoEndDate
        ).format('YYYY-MM-DD')
        dispatch(
            queryCryptoMetrics({ from, to, currencyShortCode: cryptoCurrency })
        ).unwrap()
    }

    //clear metrics filter

    const OnClearFiatFilter = () => {
        setFiatStartDate('')
        setFiatEndDate('')
        dispatch(
            queryFiatMetrics({
                from: initialStartDate,
                to: InitialEndDate,
                currencyShortCode: initialFiatCurrency,
            })
        ).unwrap()
    }

    const OnClearCryptoFilter = () => {
        setCryptoStartDate('')
        setCryptoEndDate('')
        dispatch(
            queryCryptoMetrics({
                from: initialStartDate,
                to: InitialEndDate,
                currencyShortCode: initialCryptoCurrency,
            })
        ).unwrap()
    }

    const OnClearRevenueFilter = () => {
        setRevenueStartDate('')
        setRevenueEndDate('')
        dispatch(
            queryFiatRevenue({
                from: initialStartDate,
                to: InitialEndDate,
                currencyType,
            })
        ).unwrap()
    }

    useEffect(() => {
        async function getData() {
            try {
                await Promise.allSettled([
                    dispatch(queryRoles()).unwrap(),
                    dispatch(
                        queryFiatMetrics({
                            from: initialStartDate,
                            to: InitialEndDate,
                            currencyShortCode: initialFiatCurrency,
                        })
                    ).unwrap(),
                    dispatch(queryUserChart()).unwrap(),
                    dispatch(
                        queryCryptoMetrics({
                            from: initialStartDate,
                            to: InitialEndDate,
                            currencyShortCode: initialCryptoCurrency,
                        })
                    ).unwrap(),
                ])
            } catch (e) {}
        }
        getData()
    }, [dispatch])

    useEffect(() => {
        async function getRevenueProfit() {
            try {
                dispatch(
                    queryFiatRevenue({
                        from: initialStartDate,
                        to: InitialEndDate,
                        currencyType: revenueCurrencyType,
                    })
                ).unwrap()
            } catch (e) {}
        }
        getRevenueProfit()
    }, [dispatch])

    //custom date input

    const FiatCustomInput = forwardRef(({ value, onClick }, ref) => {
        const newDate = value.split('-')[0].trim()
        const today = newDate === moment().format('MM/DD/YYYY')
        return (
            <p
                onClick={onClick}
                ref={ref}
                className={
                    ' rounded-large border border-dateLine py-2 px-3 cursor-pointer flex items-center gap-2 text-mainColor text-sm font-medium '
                }
            >
                {today ? `Today` : value || moment().format('MM/DD/YYYY')}{' '}
                {today ? (
                    changeFiatIcon ? (
                        <PiCaretUp className="text-mainColor text-xl font-medium" />
                    ) : (
                        <PiCaretDown className="text-mainColor text-xl font-medium" />
                    )
                ) : null}
            </p>
        )
    })

    const CryptoCustomInput = forwardRef(({ value, onClick }, ref) => {
        const newDate = value.split('-')[0].trim()
        const today = newDate === moment().format('MM/DD/YYYY')
        return (
            <p
                onClick={onClick}
                ref={ref}
                className={
                    ' rounded-large border border-dateLine py-2 px-3 cursor-pointer flex items-center gap-2 text-mainColor text-sm font-medium '
                }
            >
                {today ? `Today` : value || moment().format('MM/DD/YYYY')}{' '}
                {today ? (
                    changeCryptoIcon ? (
                        <PiCaretUp className="text-mainColor text-xl font-medium" />
                    ) : (
                        <PiCaretDown className="text-mainColor text-xl font-medium" />
                    )
                ) : null}
            </p>
        )
    })

    const RevenueCustomInput = forwardRef(({ value, onClick }, ref) => {
        const newDate = value.split('-')[0].trim()
        const today = newDate === moment().format('MM/DD/YYYY')
        return (
            <p
                onClick={onClick}
                ref={ref}
                className={
                    'rounded-large border border-dateLine py-3 px-3 cursor-pointer flex items-center gap-2 text-mainColor text-sm font-medium '
                }
            >
                {today ? `Today` : value || moment().format('MM/DD/YYYY')}{' '}
                {today ? (
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
        <div className="overflow-hidden py-10">
            <Dashboardheader
                userName={`Hi ${firstname},`}
                componentName={'Dashboard Overview'}
            />
            <section style={{ marginTop: '50px' }}>
                <SectionHeader header={'Wallet Balances'} />
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div>
                            <Blocks
                                name="Quidax"
                                bigAmount={'₦3,204,490'}
                                smallAmount={'6,448'}
                                curreny={'USD'}
                                padding="30px"
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div>
                            <Blocks
                                name="Quidax"
                                bigAmount={'₦3,204,490'}
                                smallAmount={'6,448'}
                                curreny={'USD'}
                                padding="30px"
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div>
                            <Blocks
                                name="Quidax"
                                bigAmount={'₦3,204,490'}
                                smallAmount={'6,448'}
                                curreny={'USD'}
                                padding="30px"
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div>
                            <Blocks radius="71px" bg={color.blockBg} flexlayout>
                                <Link to="/wallets">
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '3px',
                                        }}
                                    >
                                        <p>See all Wallets</p>
                                        <MdArrowOutward
                                            color={color.secondaryColor}
                                        />
                                    </div>
                                </Link>
                            </Blocks>
                        </div>
                    </Col>
                </Row>
            </section>
            <section>
                <SectionHeader header={'Transactions'} />
                <Row gutter={[24, 24]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div>
                            <BlockStyle height="auto" padding="10px 20px">
                                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3 xl:gap-0">
                                    <ChartHeader
                                        label={'Total FIAT Transactions'}
                                        amount={`${formatMoney({
                                            amount: fiatMetrics?.fiatMetrics
                                                ?.total,
                                        })}`}
                                        details
                                    />
                                    <div className=" flex items-center gap-5">
                                        <div>
                                            <CustomSelect
                                                defaultValue="Naira"
                                                width="100px"
                                                dropdownRender={(
                                                    ReactNodevalue
                                                ) => {
                                                    return (
                                                        <div>
                                                            <ul>
                                                                {fiatCurrencyOptions.map(
                                                                    (items) => (
                                                                        <li
                                                                            onClick={() =>
                                                                                onChangeFiatCurrency(
                                                                                    items.value
                                                                                )
                                                                            }
                                                                            className="cursor-pointer"
                                                                        >
                                                                            <div className="flex items-center justify-between px-2">
                                                                                <div className="flex items-center gap-2">
                                                                                    <img
                                                                                        src={
                                                                                            ngflag
                                                                                        }
                                                                                        alt="najia flag"
                                                                                        className="w-[15px] h-[15px]"
                                                                                    />
                                                                                    <p>
                                                                                        {
                                                                                            items.label
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                                <p>
                                                                                    {fiatCurrency ===
                                                                                    items.value ? (
                                                                                        <GrFormCheckmark color="#E25A5A" />
                                                                                    ) : null}
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <OneDateRange
                                                selected={fiatStartDate}
                                                onChange={onChangeFiatDate}
                                                startDate={fiatStartDate}
                                                endDate={fiatEndDate}
                                                maxDate={new Date()}
                                                customInput={
                                                    <FiatCustomInput />
                                                }
                                                onCalendarOpen={() =>
                                                    setChangeFiatIcon(true)
                                                }
                                                onCalendarClose={() =>
                                                    setChangeFiatIcon(false)
                                                }
                                                onApplyFilter={
                                                    OnApplyFiatFilter
                                                }
                                                onClearFilter={
                                                    OnClearFiatFilter
                                                }
                                                shouldCloseOnSelect={false}
                                                filterStartDate={fiatStartDate}
                                                filterEndDate={fiatEndDate}
                                                selectsRange
                                                showDateFilter
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Row
                                    gutter={[16, 16]}
                                    className="mt-5"
                                    align="middle"
                                >
                                    <Col xs={0} sm={0} md={24} lg={24} xl={8}>
                                        <div className="flex flex-row xl:flex-col gap-2">
                                            <ChartLabels name={'Deposits'} />
                                            <ChartLabels name={'Withdrawals'} />
                                            <ChartLabels name={'Swaps'} />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={24}
                                        xl={16}
                                    >
                                        <div>
                                            {!!fiatMetrics?.loading ? (
                                                <div className="h-[200px]">
                                                    <Loader />
                                                </div>
                                            ) : (
                                                <div className="chart-container">
                                                    <BarChart
                                                        labels={fiatLabels}
                                                        datasets={fiatDataSet}
                                                        options={fiatOptions}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        {/* className='h-[200px] md:h-[100px] lg:h-[100px] xl:h-[200px]' */}
                                    </Col>
                                </Row>
                            </BlockStyle>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div>
                            <BlockStyle height="auto" padding="10px 30px">
                                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3 xl:gap-0">
                                    <ChartHeader
                                        label={'Total Crypto Transactions'}
                                        amount={`${formatMoney({
                                            amount: cryptoMetrics?.cryptoMetrics
                                                ?.total,
                                        })}`}
                                        details
                                    />
                                    <div className=" flex items-center gap-5">
                                        <div>
                                            <CustomSelect
                                                defaultValue="Bitcoin"
                                                width="100px"
                                                dropdownRender={(
                                                    ReactNodevalue
                                                ) => {
                                                    return (
                                                        <div>
                                                            <ul>
                                                                {cryptoCurrencyOptions.map(
                                                                    (items) => (
                                                                        <li
                                                                            onClick={() =>
                                                                                onChangeCryptoCurrency(
                                                                                    items.value
                                                                                )
                                                                            }
                                                                            className="cursor-pointer"
                                                                        >
                                                                            <div className="flex items-center justify-between px-1">
                                                                                <div className="flex items-center gap-1">
                                                                                    <img
                                                                                        src={
                                                                                            items.logo
                                                                                        }
                                                                                        alt={
                                                                                            items.label
                                                                                        }
                                                                                        className="w-[15px] h-[15px]"
                                                                                    />
                                                                                    <p>
                                                                                        {
                                                                                            items.label
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                                <p>
                                                                                    {cryptoCurrency ===
                                                                                    items.value ? (
                                                                                        <GrFormCheckmark
                                                                                            color={
                                                                                                color.secondaryColor
                                                                                            }
                                                                                        />
                                                                                    ) : null}
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <OneDateRange
                                                selected={cryptoStartDate}
                                                onChange={onChangeCryptoDate}
                                                startDate={cryptoStartDate}
                                                endDate={cryptoEndDate}
                                                maxDate={new Date()}
                                                customInput={
                                                    <CryptoCustomInput />
                                                }
                                                onCalendarOpen={() =>
                                                    setChangeCryptoIcon(true)
                                                }
                                                onCalendarClose={() =>
                                                    setChangeCryptoIcon(false)
                                                }
                                                onApplyFilter={
                                                    OnApplyCryptoFilter
                                                }
                                                onClearFilter={
                                                    OnClearCryptoFilter
                                                }
                                                shouldCloseOnSelect={false}
                                                filterStartDate={
                                                    cryptoStartDate
                                                }
                                                filterEndDate={cryptoEndDate}
                                                selectsRange
                                                showDateFilter
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Row
                                    gutter={[16, 16]}
                                    className="mt-5"
                                    align="middle"
                                >
                                    <Col xs={0} sm={0} md={24} lg={24} xl={8}>
                                        <div className="flex flex-row xl:flex-col gap-2">
                                            <ChartLabels name={'Deposits'} />
                                            <ChartLabels name={'Withdrawals'} />
                                            <ChartLabels name={'Swaps'} />
                                            {/* <ChartLabels name={'Transfers'} /> */}
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={24}
                                        xl={16}
                                    >
                                        <div>
                                            {!!cryptoMetrics?.loading ? (
                                                <div className="h-[200px]">
                                                    <Loader />
                                                </div>
                                            ) : (
                                                <div className="chart-container">
                                                    <BarChart
                                                        labels={cryptoLabels}
                                                        datasets={cryptoDataSet}
                                                        options={cryptoOptions}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            </BlockStyle>
                        </div>
                    </Col>
                </Row>
            </section>
            <br />
            <br />
            <br />
            <section>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div>
                            <BlockStyle height="285px" padding="20px 30px">
                                <ChartHeader
                                    label={'Total Customers'}
                                    amount={
                                        userMetrics?.userChart?.totalCustomers
                                    }
                                    details
                                />
                                <Row
                                    gutter={[16, 16]}
                                    className="mt-3 relative"
                                    align="middle"
                                >
                                    <Col xs={0} sm={0} md={24} lg={24} xl={12}>
                                        <div className="absolute left-0 top-10 z-[99999] w-full xl:relative xl:top-0 xl:left-0">
                                            <ChartLabels
                                                name={'Active Users'}
                                                number={
                                                    userMetrics?.userChart
                                                        ?.activeUsers
                                                }
                                                bgColor={'bg-[#D6FF79]'}
                                            />
                                            <ChartLabels
                                                name={'Inactive Users'}
                                                number={
                                                    userMetrics?.userChart
                                                        ?.inactiveUsers
                                                }
                                                bgColor={'bg-[#C5D3DE]'}
                                            />
                                            <ChartLabels
                                                name={'Disabled Users'}
                                                number={
                                                    userMetrics?.userChart
                                                        ?.blacklistedUsers
                                                }
                                                bgColor={'bg-[#FF9D79]'}
                                            />
                                        </div>
                                    </Col>
                                    {/* flex flex-row xl:flex-col gap-2 flex-wrap xl:flex-nowrap bg-[green] */}
                                    <Col
                                        xs={24}
                                        sm={24}
                                        md={24}
                                        lg={24}
                                        xl={12}
                                    >
                                        <div>
                                            {!!userMetrics?.loading ? (
                                                <div className="h-[200px]">
                                                    <Loader />
                                                </div>
                                            ) : (
                                                <div>
                                                    <DoughnutChart
                                                        options={
                                                            doughnutOptions
                                                        }
                                                        data={doughnutdata}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            </BlockStyle>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div>
                            <BlockStyle
                                height="285px"
                                padding="20px 30px"
                                className="relative"
                            >
                                <div className="revenue w-full px-3">
                                    <CustomTab
                                        items={items}
                                        onChange={onChangeRevenueLabel}
                                    />
                                </div>
                                <div className="absolute top-3 md:top-4 lg:top-5 xl:top-5 right-2 lg:right-8 xl:right-8">
                                    <OneDateRange
                                        selected={revenueStartDate}
                                        onChange={onChangeRevenueDate}
                                        startDate={revenueStartDate}
                                        endDate={revenueEndDate}
                                        customInput={<RevenueCustomInput />}
                                        onCalendarOpen={() =>
                                            setChangeIcon(true)
                                        }
                                        onCalendarClose={() =>
                                            setChangeIcon(false)
                                        }
                                        onApplyFilter={OnApplyRevenueFilter}
                                        onClearFilter={OnClearRevenueFilter}
                                        shouldCloseOnSelect={false}
                                        filterStartDate={revenueStartDate}
                                        filterEndDate={revenueEndDate}
                                        selectsRange
                                        showDateFilter
                                    />
                                </div>
                            </BlockStyle>
                        </div>
                    </Col>
                    {/* <Col xs={24} sm={24} md={12} lg={10} xl={5}>
            <div>
              <BlockStyle height='285px' padding='20px 10px'>
                <div className='flex justify-end'>
                  <OneDateRange
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    showDateFilter
                    showPopperArrow={false}
                    customInput={<ExampleCustomInput />}
                    onCalendarOpen={() => setChangeIcon(true)}
                    onCalendarClose={() => setChangeIcon(false)}
                  />
                </div>

                <div className='flex flex-col items-center justify-center py-14'>
                  <p>Average Transaction</p>
                  <h2>6,390,050</h2>
                </div>

              </BlockStyle>
            </div>
          </Col> */}
                </Row>
            </section>
        </div>
    )
}
