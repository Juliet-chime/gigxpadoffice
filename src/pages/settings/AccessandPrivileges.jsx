import { Col, Row } from 'antd'
import React, { useState } from 'react'
import PrivilegesTitle from './PrivilegesTitle'
import AccessTitle from './AccessTitle'
import CheckField from '../../components/fields/CheckField'

const AccessSubHeader = ({ text, titleChecked, ...props }) => {
    return (
        <div className="flex items-center justify-between border-b border-[#DBDBDB] p-4">
            <h3
                className={`${
                    titleChecked
                        ? 'text-mainColor opacity-[1]'
                        : 'opacity-[0.5] text-lighterAsh'
                }font-medium  text-[14px] `}
            >
                {text}
            </h3>
            <CheckField {...props} />
        </div>
    )
}
const AccessandPrivileges = () => {
    const [dashboardChecked, setDashboardChecked] = useState(false)
    const [financeChecked, setFinanceChecked] = useState(false)
    const [walletBalChecked, setWalletBalChecked] = useState(false)
    const [fiatTrx, setFiatTrx] = useState(false)

    const privilegesWrapper = `${
        dashboardChecked
            ? 'bg-[white] pointer-events-auto'
            : 'bg-[#F2F3F4] pointer-events-none'
    } border border-[#EEEEEE] rounded-[8px] p-4`

    return (
        <div>
            <div className="bg-[white] pt-[50px] pb-[27px] border-b border-[#DBDBDB] px-8">
                <h1 className="font-bold text-mainColor text-[24px] font-cabinetgrotesk">
                    Access and Privileges
                </h1>
                <p className="text-[14px] text-lighterAsh">
                    Select the privileges and access for this role
                </p>
            </div>
            <div className="px-8 mt-[53px]">
                <Row gutter={[16]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="flex flex-col gap-4">
                            <div className="">
                                <PrivilegesTitle
                                    title={'Dashboard'}
                                    checked={dashboardChecked}
                                    onChange={(e) => {
                                        console.log(e)
                                        if (!e) {
                                            console.log('runn')
                                            setWalletBalChecked(false)
                                        }
                                        setDashboardChecked(e)
                                    }}
                                />
                                <div className="border w-0 h-4 m-auto" />

                                <div
                                    onClick={() => console.log('ff')}
                                    className={privilegesWrapper}
                                >
                                    <AccessTitle
                                        name={'Wallet Balances'}
                                        onChange={(e) => {
                                            setWalletBalChecked(
                                                e.target.checked
                                            )
                                            console.log(e)
                                        }}
                                        checked={walletBalChecked}
                                        titleChecked={dashboardChecked}
                                    />
                                    <AccessTitle
                                        name={'Total Failed Transactions'}
                                    />
                                    <AccessTitle
                                        name={'Total Crypto Transactions'}
                                    />
                                    <AccessTitle name={'Total Customers'} />
                                    <AccessTitle name={'Total Fiat Revenue'} />
                                    <AccessTitle
                                        name={'Total Crypto Revenue'}
                                    />
                                    <AccessTitle name={'Total Fiat Profit'} />
                                    <AccessTitle name={'Total Crypto Profit'} />
                                    <AccessTitle
                                        name={'Total Average Transactions'}
                                    />
                                </div>
                            </div>

                            <div className="">
                                <PrivilegesTitle
                                    title={'Finance'}
                                    checked={financeChecked}
                                    onChange={(e) => {
                                        console.log(e)
                                        if (!e) {
                                            console.log('runn')
                                            setFiatTrx(false)
                                        }
                                        setFinanceChecked(e)
                                    }}
                                />
                                <div className="border w-0 h-4 m-auto" />
                                <div>
                                    <div
                                        onClick={() => console.log('ff')}
                                        className={`${
                                            financeChecked
                                                ? 'bg-[white] pointer-events-auto'
                                                : 'bg-[#F2F3F4] pointer-events-none'
                                        } border border-[#EEEEEE] rounded-[8px] p-4`}
                                    >
                                        <div>
                                            <AccessSubHeader
                                                text={'FIAT Transactions'}
                                                titleChecked={financeChecked}
                                                checked={fiatTrx}
                                                onChange={(e) => {
                                                    setFiatTrx(e.target.checked)
                                                }}
                                            />

                                            <div className="px-4">
                                                <AccessTitle
                                                    name={
                                                        'View Transaction table'
                                                    }
                                                    checked={fiatTrx}
                                                />
                                                <AccessTitle
                                                    name={
                                                        'Export Transaction Table'
                                                    }
                                                    checked={fiatTrx}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border w-0 h-4 m-auto" />
                                    <div
                                        onClick={() => console.log('ff')}
                                        className={`${
                                            financeChecked
                                                ? 'bg-[white] pointer-events-auto'
                                                : 'bg-[#F2F3F4] pointer-events-none'
                                        } border border-[#EEEEEE] rounded-[8px] p-4`}
                                    >
                                        <div>
                                            <AccessSubHeader
                                                text={'Crypto Transactions'}
                                                titleChecked={financeChecked}
                                                checked={fiatTrx}
                                                onChange={(e) => {
                                                    setFiatTrx(e.target.checked)
                                                }}
                                            />

                                            <div className="px-4">
                                                <AccessTitle
                                                    name={
                                                        'View Transaction table'
                                                    }
                                                    checked={fiatTrx}
                                                />
                                                <AccessTitle
                                                    name={
                                                        'Export Transaction Table'
                                                    }
                                                    checked={fiatTrx}
                                                />
                                            </div>
                                        </div>

                                        {/* <AccessTitle
                                        name={'Wallet Balances'}
                                        onChange={(e) => {
                                            setWalletBalChecked(
                                                e.target.checked
                                            )
                                            console.log(e)
                                        }}
                                        checked={walletBalChecked}
                                    />
                                    <AccessTitle
                                        name={'Total Failed Transactions'}
                                    />
                                    <AccessTitle
                                        name={'Total Crypto Transactions'}
                                    />
                                    <AccessTitle name={'Total Customers'} />
                                    <AccessTitle name={'Total Fiat Revenue'} />
                                    <AccessTitle
                                        name={'Total Crypto Revenue'}
                                    /> */}
                                    </div>
                                    <div className="border w-0 h-4 m-auto" />

                                    <div
                                        onClick={() => console.log('ff')}
                                        className={`${
                                            financeChecked
                                                ? 'bg-[white] pointer-events-auto'
                                                : 'bg-[#F2F3F4] pointer-events-none'
                                        } border border-[#EEEEEE] rounded-[8px] p-4`}
                                    >
                                        <div>
                                            <AccessSubHeader
                                                text={'Bill Payment'}
                                                titleChecked={financeChecked}
                                                checked={fiatTrx}
                                                onChange={(e) => {
                                                    setFiatTrx(e.target.checked)
                                                }}
                                            />

                                            <div className="px-4">
                                                <AccessTitle
                                                    name={
                                                        'View Transaction table'
                                                    }
                                                    checked={fiatTrx}
                                                />
                                                <AccessTitle
                                                    name={
                                                        'Export Transaction Table'
                                                    }
                                                    checked={fiatTrx}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <PrivilegesTitle
                                    title={'Wallets'}
                                    checked={dashboardChecked}
                                    onChange={(e) => {
                                        console.log(e)
                                        if (!e) {
                                            console.log('runn')
                                            setWalletBalChecked(false)
                                        }
                                        setDashboardChecked(e)
                                    }}
                                />
                                <div className="border w-0 h-4 m-auto" />

                                <div
                                    onClick={() => console.log('ff')}
                                    className={privilegesWrapper}
                                >
                                    <AccessTitle
                                        name={'View Wallet Balances'}
                                        onChange={(e) => {
                                            setWalletBalChecked(
                                                e.target.checked
                                            )
                                            console.log(e)
                                        }}
                                        checked={walletBalChecked}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={12}
                        xl={12}
                        className="mt-4 lg:mt-0"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="">
                                <PrivilegesTitle
                                    title={'Virtual Cards'}
                                    checked={dashboardChecked}
                                    onChange={(e) => {
                                        console.log(e)
                                        if (!e) {
                                            console.log('runn')
                                            setWalletBalChecked(false)
                                        }
                                        setDashboardChecked(e)
                                    }}
                                />
                                <div className="border w-0 h-4 m-auto" />

                                <div
                                    onClick={() => console.log('ff')}
                                    className={privilegesWrapper}
                                >
                                    <AccessTitle
                                        name={'View Virtual Card Table'}
                                        onChange={(e) => {
                                            setWalletBalChecked(
                                                e.target.checked
                                            )
                                            console.log(e)
                                        }}
                                        checked={walletBalChecked}
                                    />
                                    <AccessTitle
                                        name={'View total Card Transactions'}
                                    />
                                    <AccessTitle name={'Export Transactions'} />
                                </div>
                            </div>
                            <div className="">
                                <PrivilegesTitle
                                    title={'Customers'}
                                    checked={dashboardChecked}
                                    onChange={(e) => {
                                        console.log(e)
                                        if (!e) {
                                            console.log('runn')
                                            setWalletBalChecked(false)
                                        }
                                        setDashboardChecked(e)
                                    }}
                                />
                                <div className="border w-0 h-4 m-auto" />

                                <div
                                    onClick={() => console.log('ff')}
                                    className={privilegesWrapper}
                                >
                                    <AccessTitle
                                        name={'View Customers Table'}
                                        onChange={(e) => {
                                            setWalletBalChecked(
                                                e.target.checked
                                            )
                                            console.log(e)
                                        }}
                                        checked={walletBalChecked}
                                    />
                                    <AccessTitle
                                        name={'View Basic Information'}
                                    />
                                    <AccessTitle
                                        name={'View Wallet Balances'}
                                    />
                                    <AccessTitle
                                        name={'View KYC Documentation'}
                                    />
                                    <AccessTitle name={'Suspend Account'} />
                                    <AccessTitle name={'Lock Account'} />
                                </div>
                            </div>

                            <div className="">
                                <PrivilegesTitle
                                    title={'Settings'}
                                    checked={financeChecked}
                                    onChange={(e) => {
                                        console.log(e)
                                        if (!e) {
                                            console.log('runn')
                                            setFiatTrx(false)
                                        }
                                        setFinanceChecked(e)
                                    }}
                                />
                                <div className="border w-0 h-4 m-auto" />
                                <div>
                                    <div
                                        onClick={() => console.log('ff')}
                                        className={`${
                                            financeChecked
                                                ? 'bg-[white] pointer-events-auto'
                                                : 'bg-[#F2F3F4] pointer-events-none'
                                        } border border-[#EEEEEE] rounded-[8px] p-4`}
                                    >
                                        <div>
                                            <AccessSubHeader
                                                text={'User Management'}
                                                titleChecked={financeChecked}
                                                checked={fiatTrx}
                                                onChange={(e) => {
                                                    setFiatTrx(e.target.checked)
                                                }}
                                            />

                                            <div className="px-4">
                                                <AccessTitle
                                                    name={'Invite New Users'}
                                                    checked={fiatTrx}
                                                />
                                                <AccessTitle
                                                    name={'Remove Users'}
                                                    checked={fiatTrx}
                                                />
                                                <AccessTitle
                                                    name={'Assign Role'}
                                                    checked={fiatTrx}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border w-0 h-4 m-auto" />
                                    <div
                                        onClick={() => console.log('ff')}
                                        className={`${
                                            financeChecked
                                                ? 'bg-[white] pointer-events-auto'
                                                : 'bg-[#F2F3F4] pointer-events-none'
                                        } border border-[#EEEEEE] rounded-[8px] p-4`}
                                    >
                                        <div>
                                            <AccessSubHeader
                                                text={'Role Management'}
                                                titleChecked={financeChecked}
                                                checked={fiatTrx}
                                                onChange={(e) => {
                                                    setFiatTrx(e.target.checked)
                                                }}
                                            />

                                            <div className="px-4">
                                                <AccessTitle
                                                    name={'Create New Roles'}
                                                    checked={fiatTrx}
                                                />
                                                <AccessTitle
                                                    name={'Update Roles'}
                                                    checked={fiatTrx}
                                                />
                                                <AccessTitle
                                                    name={'Delete Roles'}
                                                    checked={fiatTrx}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border w-0 h-4 m-auto" />

                                    <div
                                        onClick={() => console.log('ff')}
                                        className={`${
                                            financeChecked
                                                ? 'bg-[white] pointer-events-auto'
                                                : 'bg-[#F2F3F4] pointer-events-none'
                                        } border border-[#EEEEEE] rounded-[8px] p-4`}
                                    >
                                        <div>
                                            <AccessSubHeader
                                                text={'Global Configurations'}
                                                titleChecked={financeChecked}
                                                checked={fiatTrx}
                                                onChange={(e) => {
                                                    setFiatTrx(e.target.checked)
                                                }}
                                            />

                                            <div className="px-4">
                                                <AccessTitle
                                                    name={
                                                        'View Configurations '
                                                    }
                                                    checked={fiatTrx}
                                                />
                                                <AccessTitle
                                                    name={
                                                        'Update Configurations'
                                                    }
                                                    checked={fiatTrx}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AccessandPrivileges
