import React from 'react'
import { Layout } from 'antd'
import SideBar from '../SideBar'
import NavHeader from '../Header'
import { FaCircle } from 'react-icons/fa'
import { color } from '../../assets/color'
const { Content } = Layout

const NotificationItem = ({ text, icon, title }) => {
    return (
        <div className="flex items-center justify-between p-2">
            <div>
                <h5 className={`text-sm text-mainColor font-medium`}>
                    {title}
                </h5>
                <p className={`text-sm text-lighterAsh`}>{text}</p>
            </div>
            {icon ? (
                <FaCircle fontSize={8} color={color.secondaryColor} />
            ) : null}
        </div>
    )
}

const DashBoardLayout = ({ children }) => {
    return (
        <div className="nav-area relative">
            <Layout style={{ height: '100vh' }}>
                <SideBar />
                <Layout>
                    <NavHeader
                        dropdownRender={() => {
                            return (
                                <div className="shadow-lg rounded-md px-2 py-2 w-48 z-50 bg-white">
                                    <NotificationItem
                                        title={'User invite accepted'}
                                        text={'56 minutes ago'}
                                        icon
                                    />
                                    <NotificationItem
                                        title={'New Request Received'}
                                        text={'3 days ago'}
                                    />
                                    <NotificationItem
                                        title={'User invite accepted'}
                                        text={'3 days ago'}
                                    />
                                </div>
                            )
                        }}
                    />
                    <Content
                        style={{
                            margin: '24px 16px 0',
                            minHeight: 'calc(100vh - 114px)',
                            overflow: 'auto',
                        }}
                    >
                        <div>
                            <div className="container mx-auto px-1 sm:px-4">
                                {children}
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
export default DashBoardLayout
