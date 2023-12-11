import { Dropdown } from 'antd'
import React, { useEffect, useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import CustomButton from '../../components/fields/CustomButton'
import { color } from '../../assets/color'
import CustomTable from '../../components/table/CustomTable'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAdminsSelector,
    queryAdmins,
} from '../../services/slices/admin/fetchAdmins'
import { queryResendInviteAdmin } from '../../services/slices/invite/resendInvite'
import { useNavigate } from 'react-router-dom'
import CustomDrawer from '../../components/fields/CustomDrawer'
import AdminDetails from './AdminDetails'

const SettingActions = ({ text, color, ...props }) => {
    return (
        <span
            className={`${
                color || 'text-mainColor'
            } text-[12px] font-medium cursor my-1 cursor-pointer`}
            {...props}
        >
            {text}
        </span>
    )
}

const UserManagement = ({
    setAddUser,
    setMessage,
    setStatus,
    setChangeRole,
}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [reSendInviteLoading, setResendInviteLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [adminDetail, setAdminDetail] = useState(null)

    const { admins, loading } = useSelector(getAdminsSelector)

    const onAddUser = () => {
        setAddUser(true)
    }

    const onHandleStatusChange = (e) => {
        alert(e)
    }
    const onHandleRoleChange = (e) => {
        alert(e)
    }

    const OnEachRowClicked = (detail) => {
        setOpen(true)
        setAdminDetail(detail)
    }

    const onHandleResendInvite = async (data) => {
        try {
            setResendInviteLoading(true)
            const res = await dispatch(queryResendInviteAdmin(data)).unwrap()
            setResendInviteLoading(false)
            setStatus(res?.status)
            setMessage(res?.message)
        } catch (e) {
            setStatus('error')
            setMessage(e?.errorMessage)
        } finally {
            setResendInviteLoading(false)
        }
    }

    useEffect(() => {
        dispatch(queryAdmins())
    }, [dispatch])

    const columns = [
        {
            title: 'No',
            dataIndex: '',
            key: '',
            onCell: (record, rowIndex) => {
                return {
                    onClick: (ev) => {
                        OnEachRowClicked(record)
                    },
                }
            },
            render: (_, title, index) => {
                return <p>{index + 1}.</p>
            },
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
            onCell: (record, rowIndex) => {
                return {
                    onClick: (ev) => {
                        OnEachRowClicked(record)
                    },
                }
            },
            render: (_, title, index) => {
                return <p>{title.lastName + ' ' + title.firstName}.</p>
            },
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            key: 'email',
            onCell: (record, rowIndex) => {
                return {
                    onClick: (ev) => {
                        OnEachRowClicked(record)
                    },
                }
            },
        },
        {
            title: 'Role',
            dataIndex: '',
            key: '',
            onCell: (record, rowIndex) => {
                return {
                    onClick: (ev) => {
                        OnEachRowClicked(record)
                    },
                }
            },
            render: (_, title, index) => {
                const role = title.roles.map((role) => role.name)
                return (
                    <p>
                        {role?.length === 1 ? (
                            <span>{(role || [])[0]}</span>
                        ) : (
                            <span>
                                {(role || [])[0]}{' '}
                                <span className="text-secondaryColor">+</span>
                                {role.length - 1}
                            </span>
                        )}
                    </p>
                )
            },
        },
        // {
        //     title: 'Last Login',
        //     dataIndex: 'date',
        //     key: 'date',
        // },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     key: 'status',
        //     render: (text) => {
        //         return (
        //             <p
        //                 className={`${
        //                     text === 'active'
        //                         ? 'text-statusGreen'
        //                         : text === 'pending'
        //                         ? 'text-statusPending'
        //                         : null
        //                 }`}
        //             >
        //                 {text}
        //             </p>
        //         )
        //     },
        // },
        {
            title: ' ',
            dataIndex: '',
            key: '',
            render: (_, record) => {
                const { roles } = record
                return (
                    <div>
                        <Dropdown
                            dropdownRender={(menus) => {
                                return (
                                    <div className="shadow-lg rounded px-4 py-3 bg-white">
                                        {(roles || [])[0]?.name
                                            .toLowerCase()
                                            .includes('super') ? (
                                            <p className="max-w-[100px] font-medium text-[12px] text-lighterAsh">
                                                This user is the super admin
                                            </p>
                                        ) : (
                                            <div className="flex flex-col">
                                                <SettingActions
                                                    text={
                                                        reSendInviteLoading
                                                            ? 'Resending...'
                                                            : 'Resend Invite'
                                                    }
                                                    onClick={() =>
                                                        onHandleResendInvite({
                                                            email: record?.email,
                                                        })
                                                    }
                                                    disable={
                                                        reSendInviteLoading
                                                    }
                                                />
                                                <SettingActions text="Send Password Reset" />
                                                <SettingActions
                                                    text="Change Role"
                                                    onClick={() => {
                                                        navigate(
                                                            `/settings/changerole/${record.firstName}`,
                                                            {
                                                                state: {
                                                                    data: record,
                                                                },
                                                            }
                                                        )
                                                    }}
                                                />
                                                <SettingActions
                                                    text="Remove User"
                                                    color="text-secondaryColor"
                                                />
                                            </div>
                                        )}
                                    </div>
                                )
                            }}
                            arrow={false}
                            trigger="click"
                        >
                            <div className="cursor-pointer">
                                <SlOptionsVertical color="#67777E" />
                            </div>
                        </Dropdown>
                    </div>
                )
            },
        },
    ]
    return (
        <div>
            <>
                <div className="wallet-table mt-8">
                    <CustomTable
                        tableborder={'none'}
                        filterborder={`1px solid #EEEEEE`}
                        columns={columns}
                        tableName={'Filter Users'}
                        data={admins}
                        filterHeader
                        isLoading={loading}
                        showDateFilter={false}
                        showExportCSV={false}
                        handleRoleChange={onHandleRoleChange}
                        handleStatusChange={onHandleStatusChange}
                        //  rowClassName={'border border-red-900'}
                        pagination={{
                            hideOnSinglePage: true,
                            pageSize: 7,
                        }}
                        // onRow={(record) => {
                        //     return {
                        //         onClick: (event) => OnEachRowClicked(record), // click row
                        //     }
                        // }}
                    />
                </div>
                <CustomButton
                    text={'Invite New User'}
                    width="180px"
                    color={color.mainColor}
                    bg={color.fieldColor}
                    onClick={onAddUser}
                    className="mt-6"
                />

                <div className="admindetail">
                    <CustomDrawer
                        placement="right"
                        onClose={() => setOpen(false)}
                        open={open}
                    >
                        <AdminDetails userData={adminDetail} />
                    </CustomDrawer>
                </div>
            </>
        </div>
    )
}

export default UserManagement
