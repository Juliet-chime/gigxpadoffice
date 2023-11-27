import React from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as DashboardIcon } from '../../assets/images/dashboardIcon.svg'
import { ReactComponent as TransactionsIcon } from '../../assets/images/transactionsIcon.svg'
import { ReactComponent as WalletIcon } from '../../assets/images/walletIcon.svg'
// import { ReactComponent as CardIcon } from '../../assets/images/cardsIcon.svg'
import { ReactComponent as CustomerIcon } from '../../assets/images/customersIcon.svg'
import { ReactComponent as SettingsIcon } from '../../assets/images/settingsIcon.svg'
import logo from '../../assets/images/x-pad-logo.svg'

const { Sider } = Layout

export function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    }
}
const items = [
    getItem('Dashboard', '/dashboard', <DashboardIcon />),
    getItem('Transactions', 'trans', <TransactionsIcon />, [
        getItem('Fiat Transactions', '/transactions'),
        getItem('Crypto Transactions', '/crypto'),
        getItem('Bill Payments', '/bills'),
    ]),
    getItem('Wallets', '/ledger', <WalletIcon />),
    // getItem('Virtual Cards', '/cards', <CardIcon />),

    getItem('Customers', '/customers', <CustomerIcon />),
    getItem('Settings', '/settings', <SettingsIcon />),
]

export default function SideBar() {
    const navigate = useNavigate()
    return (
        <Sider breakpoint="lg" collapsedWidth="0">
            <div className="pl-7 mt-5 mb-7">
                <img src={logo} alt="xpad logo" className="side-logo" />
            </div>

            <Menu
                theme="dark"
                defaultSelectedKeys={[window.location.pathname]}
                mode="inline"
                onClick={({ key }) => {
                    navigate(key)
                }}
                defaultOpenKeys={['transactions']}
                items={items}
            />
        </Sider>
    )
}
