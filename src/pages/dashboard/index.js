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
import { doughnutOptions, doughnutdata, barDataSet, barLabels, barOptions } from '../../components/chart/data'
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
//import { queryFiatMetrics } from '../../services/slices/dashboard/fiatMetrics'
import { getFiatRevenueSelector, queryFiatRevenue } from '../../services/slices/dashboard/fiatRevenue'
//import { queryCryptoMetrics } from '../../services/slices/dashboard/cryptoMetrics'
import { queryUserChart } from '../../services/slices/user/userChart'
import moment from 'moment'
import { revenueItem } from '../../utils/constants'

let revenueFrom = moment(new Date('2022-09-05')).format("YYYY-MM-DD")
let revenueTo = moment(new Date()).format("YYYY-MM-DD")

export default function Dashboard() {

  const dispatch = useDispatch()

  const user = useSelector(get2FaSelector)
  const firstname = user?.user?.firstName
  const revenue = useSelector(getFiatRevenueSelector)

  const revenueAmount = revenue?.fiatRevenue?.revenue
  const revenueProfit = revenue?.fiatRevenue?.profit

  const [changeIcon, setChangeIcon] = useState(false);
  const [currencyType, setCurrencyType] = useState(revenueItem[0])
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(null);
  const [revenueStartDate, setRevenueStartDate] = useState('');
  const [revenueEndDate, setRevenueEndDate] = useState('');

  const items = revenueItem.map((data, index) => {
    return {
      key: index + 1,
      label: data.toUpperCase(),
      children: <CurrencyTabComponent loading={revenue?.loading} revenueAmount={formatMoney({ amount: (revenueAmount || [])[0]?.totalAmount })} profitAmount={formatMoney({ amount: (revenueProfit || [])[0]?.totalCharge })} />
    }
  })

  const onChangeRevenueDate = (dates) => {
    const [start, end] = dates;
    setRevenueStartDate(start);
    setRevenueEndDate(end);
  };

  const OnApplyRevenueFilter = () => {
    const from = moment(revenueStartDate).format("YYYY-MM-DD")
    const to = moment(revenueEndDate === null ? new Date() : revenueEndDate).format("YYYY-MM-DD")
    dispatch(queryFiatRevenue({ from, to, currencyType })).unwrap()
  }

  const OnClearRevenueFilter = () => {
    setRevenueStartDate('')
    setRevenueEndDate('')
    dispatch(queryFiatRevenue({ from: revenueFrom, to: revenueTo, currencyType })).unwrap()
  }

  const onChangeRevenueLabel = (e) => {
    setCurrencyType(revenueItem[e - 1])
    console.log(e)
  }

  useEffect(() => {
    async function getData() {
      try {
        await Promise.allSettled(
          [
            dispatch(queryRoles()).unwrap(),
            // dispatch(queryFiatMetrics({ from: moment(startDate).format('YYYY-MM-DD') })).unwrap(),
            // dispatch(queryFiatRevenue({ from: moment(startDate).format('YYYY-MM-DD'), currencyType })).unwrap(),
            dispatch(queryUserChart()).unwrap(),
            // dispatch(queryCryptoMetrics({ from: moment(startDate).format('YYYY-MM-DD') })).unwrap()
          ]
        )
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [dispatch])

  useEffect(() => {
    async function getRevenueProfit() {
      try {
        dispatch(queryFiatRevenue({ from: revenueFrom, to: revenueTo, currencyType })).unwrap()
      } catch (e) {
        console.log(e)
      }
    }
    getRevenueProfit()
  }, [dispatch, currencyType])

  // const ExampleCustomInputRef = forwardRef(({ value, onClick }, ref) => {

  //   const newDate = value.split('-')[0].trim()

  //   const today = formatDate()

  //   return (
  //     <p onClick={onClick} ref={ref} className={'rounded-large border border-dateLine cursor-pointer flex items-center gap-2 font-medium p-2 text-mainColor'}>
  //       {newDate === today ? `Today` : value} {newDate === today ? changeIcon ? <PiCaretUp className='text-mainColor text-xs font-medium' /> : <PiCaretDown className='text-mainColor text-xs font-medium' /> : null}
  //     </p>
  //   )
  // });


  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
    const newDate = value.split('-')[0].trim()
    const today = newDate === moment().format('MM/DD/YYYY')
    return (
      <p onClick={onClick} ref={ref} className={'rounded-large border border-dateLine py-3 px-3 cursor-pointer flex items-center gap-2 text-mainColor text-sm font-medium '}>
        {today ? `Today` : value || moment().format('MM/DD/YYYY')} {today ? changeIcon ? <PiCaretUp className='text-mainColor text-xl font-medium' /> : <PiCaretDown className='text-mainColor text-xl font-medium' /> : null}
      </p>
    )
  });

  return (
    <div className='overflow-hidden py-10'>
      <Dashboardheader userName={`Hi ${firstname},`} componentName={'Dashboard Overview'} />
      <section style={{ marginTop: '50px' }}>
        <SectionHeader header={'Wallet Balances'} />
        <Row
          gutter={[16, 16]}
        >
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div>
              <Blocks name='Quidax' bigAmount={'₦3,204,490'} smallAmount={'6,448'} curreny={'USD'} padding='30px' />
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div>

              <Blocks name='Quidax' bigAmount={'₦3,204,490'} smallAmount={'6,448'} curreny={'USD'} padding='30px' />
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div>

              <Blocks name='Quidax' bigAmount={'₦3,204,490'} smallAmount={'6,448'} curreny={'USD'} padding='30px' />
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div>

              <Blocks radius='71px' bg={color.blockBg} flexlayout>
                <Link to='/wallets'>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <p>See all Wallets</p>
                    <MdArrowOutward color={color.secondaryColor} />
                  </div>
                </Link>
              </Blocks>
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <SectionHeader header={'Transactions'} />
        <Row gutter={[24, 24]}
        >
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div>
              <BlockStyle height='auto' padding='10px 20px'>
                <div className='flex items-center justify-between'>
                  <ChartHeader label={'Total FIAT Transactions'} amount={'₦32,599,000'} details />
                  {/* <div>
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
                  </div> */}
                </div>
                <Row gutter={[16, 16]} className='mt-5' align='middle'>
                  <Col xs={0} sm={0} md={24} lg={24} xl={8}>
                    <div className='flex flex-row xl:flex-col gap-2'>
                      <ChartLabels name={'Deposits'} />
                      <ChartLabels name={'Withdrawals'} />
                      <ChartLabels name={'Swaps'} />
                      <ChartLabels name={'Transfers'} />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                    <div className='h-48'>
                      <BarChart labels={barLabels} datasets={barDataSet} options={barOptions} />
                    </div>
                  </Col>
                </Row>
              </BlockStyle>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div>
              <BlockStyle height='auto' padding='10px 30px'>
                <div className='flex items-center justify-between'>
                  <ChartHeader label={'Total Crypto Transactions'} amount={'₦6,390,050'} details />
                  {/* <div>
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
                  </div> */}
                </div>

                <Row gutter={[16, 16]} className='mt-5' align='middle'>
                  <Col xs={0} sm={0} md={24} lg={24} xl={8}>
                    <div className='flex flex-row xl:flex-col gap-2'>
                      <ChartLabels name={'Deposits'} />
                      <ChartLabels name={'Withdrawals'} />
                      <ChartLabels name={'Swaps'} />
                      <ChartLabels name={'Transfers'} />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                    <div className='h-48'>
                      <BarChart labels={barLabels} datasets={barDataSet} options={barOptions} />
                    </div>
                  </Col>
                </Row>
              </BlockStyle>
            </div>
          </Col>
        </Row>
      </section><br /><br /><br />
      <section>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div>
              <BlockStyle height='285px' padding='20px 30px'>
                <ChartHeader label={'Total Customers'} amount={'3,950'} details />
                <Row gutter={[16, 16]} className='mt-5' align='middle'>
                  <Col xs={0} sm={0} md={24} lg={24} xl={12}>
                    <div className='flex flex-row xl:flex-col gap-2 flex-wrap xl:flex-nowrap'>
                      <ChartLabels name={'Deposits'} number={'1830'} />
                      <ChartLabels name={'Withdrawals'} number={'1430'} />
                      <ChartLabels name={'Swaps'} number={'830'} />
                      <ChartLabels name={'Transfers'} number={'150'} />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <div>
                      <DoughnutChart options={doughnutOptions} data={doughnutdata} />
                    </div>
                  </Col>
                </Row>
              </BlockStyle>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div>
              <BlockStyle height='285px' padding='20px 30px' className='relative'>
                <div className='revenue w-full px-3'>
                  <CustomTab items={items} onChange={onChangeRevenueLabel} />
                </div>
                <div className='absolute top-3 md:top-4 lg:top-5 xl:top-5 right-2 lg:right-8 xl:right-8'>
                  <OneDateRange
                    selected={revenueStartDate}
                    onChange={onChangeRevenueDate}
                    startDate={revenueStartDate}
                    endDate={revenueEndDate}
                    customInput={<ExampleCustomInput />}
                    onCalendarOpen={() => setChangeIcon(true)}
                    onCalendarClose={() => setChangeIcon(false)}
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
