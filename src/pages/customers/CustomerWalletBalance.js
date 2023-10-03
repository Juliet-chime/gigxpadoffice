import { Col, Row } from 'antd'
import React from 'react'
import Blocks from '../../components/dashboardComponents/Blocks'
import { color } from '../../assets/color'
import bitcoin from '../../assets/images/bitcoin.svg'
import usd from '../../assets/images/usd.svg'
import naira from '../../assets/images/naira.svg'
import { SlOptionsVertical } from 'react-icons/sl'
import CustomTable from '../../components/table/CustomTable'


const CustomerWalletBalance = () => {

    const columns = [
        {
            title: 'Assest',
            dataIndex: 'assest',
            key: 'assest',
            render: (text) => <div className='flex items-center gap-4'>
                <div>
                    <img src={text === 'Bitcoin' ? bitcoin : text === 'USDT' ? usd : text === 'Naira' ? naira : null} alt='' />
                </div>
                <p> {text}</p>
            </div>,
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
        },
        {
            title: 'Date Added',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (
                <p className={`${text === 'active' ? 'text-statusGreen' : null}`}>{text}</p>
            ),
        },
        {
            title: ' ',
            dataIndex: '',
            key: '',
            render: (_, record) => (
                <div>
                    <SlOptionsVertical color='#67777E' />
                </div>
            ),
        },
    ]
    const data = [
        {
            key: '1',
            assest: 'Bitcoin',
            balance: 0.0039885,
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
        {
            key: '2',
            assest: 'USDT',
            balance: 1.3443,
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
        {
            key: '3',
            assest: 'Naira',
            balance: 3.4339885,
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
        {
            key: '4',
            assest: 'USDT',
            balance: 1.3443,
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
    ];
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={7} xl={5}>
                    <div className='flex flex-row lg:flex-col xl:flex-col flex-wrap lg:flex-nowrap xl:flex-nowrap gap-1 md:gap-3 lg:gap-3 xl:gap-3'>
                        <Blocks name='Total Wallet Balance' nameColor={color.mainColor} bigAmount={'₦3,699,800'} padding='20px' height='92px' bg={color.offWhite} border={`solid 1px ${color.lineAsh}`} />

                        <Blocks name='Total Crypto Balance' nameColor={color.mainColor} bigAmount={'₦3,699,800'} padding='20px' height='92px' bg={color.offWhite} border={`solid 1px ${color.lineAsh}`} />

                        <Blocks name='Total FIAT Balance' nameColor={color.mainColor} bigAmount={'₦3,699,800'} padding='20px' height='92px' bg={color.offWhite} border={`solid 1px ${color.lineAsh}`} />
                    </div>
                </Col>
                <Col xs={20} sm={20} md={24} lg={17} xl={19}>
                    <div className='wallet-table'>
                        <CustomTable columns={columns} dataSource={data} tableBorder={'none'}
                            pagination={{
                                hideOnSinglePage: true,
                                pageSize: 7,
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CustomerWalletBalance