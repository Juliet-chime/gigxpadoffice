import { Col, Row } from 'antd'
import React from 'react'
import Blocks from '../../components/dashboardComponents/Blocks'
import { color } from '../../assets/color'
import { SlOptionsVertical } from 'react-icons/sl'
import CustomTable from '../../components/table/CustomTable'
import { capitalizeFLetter } from '../../utils/func'
import { formatMoney } from '../../utils/helperFunctions'

const CustomerWalletBalance = ({ walletDetails }) => {
    const columns = [
        {
            title: 'Assest',
            dataIndex: 'assest',
            key: 'assest',
            render: (_, rowData) => {
                return (
                    <div className="flex items-center gap-4">
                        <div>
                            <img
                                src={rowData.icon}
                                alt={rowData.name}
                            />
                        </div>
                        <p> {capitalizeFLetter(rowData.name)}</p>
                    </div>
                )
            }
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
            render: (_, record) => (
                <p>
                    {record.name !== 'naira' ? record.balance : formatMoney({ amount: record.balanceInNgn })}
                </p>
            ),
        },
        {
            title: 'Value USD',
            dataIndex: 'balanceInUsd',
            key: 'balanceInUsd',
            render: (_, record) => (
                <p>
                    {record.balanceInUsd}
                </p>
            ),
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
                <p
                    className={`${text.toLowerCase() === 'active' ? 'text-statusGreen' : null
                        }`}
                >
                    {capitalizeFLetter(text)}
                </p>
            ),
        },
        {
            title: ' ',
            dataIndex: '',
            key: '',
            render: (_, record) => (
                <div>
                    <SlOptionsVertical color="#67777E" />
                </div>
            ),
        },
    ]
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={7} xl={5}>
                    <div className="flex flex-row lg:flex-col xl:flex-col flex-wrap lg:flex-nowrap xl:flex-nowrap gap-1 md:gap-3 lg:gap-3 xl:gap-3">
                        <Blocks
                            name="Total Wallet Balance"
                            nameColor={color.mainColor}
                            bigAmount={'₦3,699,800'}
                            padding="20px"
                            height="92px"
                            bg={color.offWhite}
                            border={`solid 1px ${color.lineAsh}`}
                        />

                        <Blocks
                            name="Total Crypto Balance"
                            nameColor={color.mainColor}
                            bigAmount={'₦3,699,800'}
                            padding="20px"
                            height="92px"
                            bg={color.offWhite}
                            border={`solid 1px ${color.lineAsh}`}
                        />

                        <Blocks
                            name="Total FIAT Balance"
                            nameColor={color.mainColor}
                            bigAmount={'₦3,699,800'}
                            padding="20px"
                            height="92px"
                            bg={color.offWhite}
                            border={`solid 1px ${color.lineAsh}`}
                        />
                    </div>
                </Col>
                <Col xs={20} sm={20} md={24} lg={17} xl={19}>
                    <div className="wallet-table">
                        <CustomTable
                            columns={columns}
                            data={walletDetails}
                            tableborder={'none'}
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
