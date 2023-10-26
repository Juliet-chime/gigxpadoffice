import React, { useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { Tabs } from 'antd'
import UserManagement from './UserManagement'
import AddAUser from './AddAUser'
import RolesPermission from './RolesPermission'
import GlobalConfiguration from './GlobalConfiguration/GlobalConfiguration'
import AddARole from './AddARole'

const Settings = () => {
    const [addUser, setAddUser] = useState(false)
    const [addRole, setAddRole] = useState(false)

    const onChangeTab = (key) => {
        alert(key)
    }

    const items = [
        {
            key: '1',
            label: `User Management`,
            children: <UserManagement setAddUser={setAddUser} />,
        },
        {
            key: '2',
            label: `Roles and Permissions`,
            children: <RolesPermission setAddRole={setAddRole} />,
        },
        {
            key: '3',
            label: `Global Configuration`,
            children: <GlobalConfiguration />,
        },
    ]

    return (
        <div>
            {addUser ? (
                <AddAUser setAddUser={setAddUser} />
            ) : addRole ? (
                <AddARole setAddRole={setAddRole} />
            ) : (
                <>
                    <Dashboardheader
                        componentName={'System Settings'}
                        label={
                            'Manage and control all system and dashboard settings'
                        }
                        className="mb-6"
                    />
                    <div className="detailcard mt-12">
                        <Tabs
                            defaultActiveKey="1"
                            items={items}
                            onChange={onChangeTab}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Settings
