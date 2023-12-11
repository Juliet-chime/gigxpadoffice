import React, { useEffect, useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { Tabs } from 'antd'
import UserManagement from './UserManagement'
import AddAUser from './AddAUser'
import RolesPermission from './RolesPermission'
import GlobalConfiguration from './GlobalConfiguration/GlobalConfiguration'
import AddARole from './AddARole'
import { useErrorTimeout } from '../../hooks/useTimeout'
import Notification from '../../components/notification/Notification'
import { useDispatch } from 'react-redux'
import { queryLimit } from '../../services/slices/settings/globalconfig/limit'
import { queryRates } from '../../services/slices/settings/globalconfig/getRate'

const Settings = () => {
    const [addUser, setAddUser] = useState(false)
    const [addRole, setAddRole] = useState(false)

    const dispatch = useDispatch()

    const [message, setMessage, status, setStatus] = useErrorTimeout(3000)

    const onChangeTab = (key) => {}

    const items = [
        {
            key: '1',
            label: `User Management`,
            children: (
                <UserManagement
                    setAddUser={setAddUser}
                    setStatus={setStatus}
                    setMessage={setMessage}
                />
            ),
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

    useEffect(() => {
        const getLimit = async () => {
            dispatch(queryLimit())
            dispatch(queryRates())
        }
        getLimit()
    }, [dispatch])

    // : changeRole ? (
    //     <ChangeRole setChangeRole={setChangeRole} />
    // )

    return (
        <div>
<<<<<<< HEAD
         {!!message ? <div style={{position:'absolute',top:'0px',left:'0px',right:'0px'}}>
            <Notification message={message} type={status} />
            </div> : null}
=======
            {!!message ? (
                <div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        right: '0px',
                    }}
                >
                    <Notification message={message} type={status} />
                </div>
            ) : null}
>>>>>>> dd1ea5e1933355b3b4b812746b3f419c3a54d85a
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
