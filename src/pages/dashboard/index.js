import React from 'react'
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

export default function Dashboard() {

  const items = [
    {
      key: '1',
      label: `Tab 1`,
      children: <CurrencyTabComponent revenueAmount={'₦6,390,050'} profitAmount={'₦2,950,000'} />,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: <CurrencyTabComponent revenueAmount={'₦6,390,050'} profitAmount={'₦2,950,000'} />,
    },
  ];

  return (
    <div className='overflow-hidden py-10'>
      <Dashboardheader userName={'Hi Anselm,'} componentName={'Dashboard Overview'} />
      <section style={{ marginTop: '50px' }}>
        <SectionHeader header={'Wallet Balances'} />
        <Row
          gutter={[16, 16]}
        >
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div>

              <Blocks name='Quidax' bigAmount={'₦3,204,490'} smallAmount={'6,448'} curreny={'USD'} padding='30px' />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div>

              <Blocks name='Quidax' bigAmount={'₦3,204,490'} smallAmount={'6,448'} curreny={'USD'} padding='30px' />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div>

              <Blocks name='Quidax' bigAmount={'₦3,204,490'} smallAmount={'6,448'} curreny={'USD'} padding='30px' />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div>

              <Blocks radius='71px' bg={color.blockBg} flex>
                <Link to='wallets'>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
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
              <BlockStyle height='auto' padding='10px 30px'>
                <ChartHeader label={'Total FIAT Transactions'} amount={'₦32,599,000'} details today />
                <div className='flex items-center mt-5'>
                  <div className='hidden lg:flex-1 xl:flex-1 lg:block xl:block'>
                  <ChartLabels name={'Deposits'}/>
                    <ChartLabels name={'Withdrawals'}/>
                    <ChartLabels name={'Swaps'}/>
                    <ChartLabels name={'Transfers'}/>
                  </div>
                  <div className='flex-1' style={{ height: '267px' }}><BarChart labels={barLabels} datasets={barDataSet} options={barOptions} /></div>
                </div>
              </BlockStyle>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div>
              <BlockStyle height='auto' padding='10px 30px'>
                <ChartHeader label={'Total Crypto Transactions'} amount={'₦6,390,050'} details today />
                <div className='flex items-center mt-5'>
                  <div className='hidden lg:flex-1 xl:flex-1 lg:block xl:block'>
                  <ChartLabels name={'Deposits'}/>
                    <ChartLabels name={'Withdrawals'}/>
                    <ChartLabels name={'Swaps'}/>
                    <ChartLabels name={'Transfers'}/>
                  </div>
                  <div className='flex-1' style={{ height: '267px' }}><BarChart labels={barLabels} datasets={barDataSet} options={barOptions} /></div>
                </div>
              </BlockStyle>
            </div>
          </Col>
        </Row>
      </section><br /><br /><br />
      <section>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8} lg={9} xl={9}>
            <div>
              <BlockStyle height='265px'>
                <ChartHeader label={'Total Customers'} amount={'3,950'} details />
                <div className='flex items-center mt-2'>
                  <div className='hidden lg:flex-1 xl:flex-1 lg:block xl:block '>
                    <ChartLabels name={'Deposits'}/>
                    <ChartLabels name={'Withdrawals'}/>
                    <ChartLabels name={'Swaps'}/>
                    <ChartLabels name={'Transfers'}/>
                  </div>
                  <div className='lg:flex-1 xl:flex-1' style={{ width: '150px' }}>
                    <DoughnutChart options={doughnutOptions} data={doughnutdata} />
                  </div>
                </div>
              </BlockStyle>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={9} xl={9}>
            <div>
              <BlockStyle height='265px'>
                <div style={{ position: 'relative' }}>
                  <ChartHeader tab items={items} />
                  <p style={{ position: 'absolute', top: '15px', right: '20px' }}>Today</p>
                </div>
              </BlockStyle>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={5} xl={5}>
            <div>
              <Blocks name='Average Transaction' bigAmount={'6,390,050'} height='265px' flex>
              </Blocks>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  )
}
