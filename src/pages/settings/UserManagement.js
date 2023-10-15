import { Dropdown } from 'antd';
import React, { useEffect } from 'react'
import { SlOptionsVertical } from 'react-icons/sl';
import CustomButton from '../../components/fields/CustomButton';
import { color } from '../../assets/color';
import CustomTable from '../../components/table/CustomTable';
import { useDispatch } from 'react-redux';
// import { queryAllUser } from '../../services/slices/user/allUsers';
import { queryAdmins } from '../../services/slices/admin/fetchAdmins';

const UserManagement = ({ setAddUser }) => {

    const dispatch = useDispatch()

    const onAddUser = () => {
        setAddUser(true)
    }

    useEffect(() => {
        dispatch(queryAdmins())
    }, [dispatch])

    const items = [
        {
            key: '1',
            label: (
                <CustomButton height='auto' color={color.mainColor} width='auto'>
                    Resend Invite
                </CustomButton>
            ),
        },
        {
            key: '2',
            label: (
                <CustomButton height='auto' color={'#EF1A1A'} width='auto'>
                    Remove User
                </CustomButton>
            ),
        },
    ];

    // const items2 = [
    //     {
    //         key: '1',
    //         label: (
    //             <CustomButton height='auto' color={color.mainColor} width='auto'>
    //                This user is the super admin
    //             </CustomButton>
    //         ),
    //     },
    // ];

    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            key: 'key',
            render: (_, title) => {
                return <p>{title.key}.</p>
            },
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Last Login',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (
                <p className={`${text === 'active' ? 'text-statusGreen' : text === 'pending' ? 'text-statusPending' : null}`}>{text}</p>
            ),
        },
        {
            title: ' ',
            dataIndex: '',
            key: '',
            render: (_, record) => {
                return (
                    <div>
                        <Dropdown
                            menu={{ items }}
                            arrow={false}
                            trigger='click'
                        >
                            <div className='cursor-pointer'>
                                <SlOptionsVertical color='#67777E' />
                            </div>
                        </Dropdown>
                    </div>
                )
            },
        },
    ]
    const data = [
        {
            key: '1',
            name: 'Osamede Ahrumwunde',
            email: 'osamede@gmail.com',
            role: 'Super Admin',
            date: '23/04/2023, 11:38.00',
            status: 'active',
        },
        {
            key: '2',
            name: 'Osamede Ahrumwunde',
            email: 'osamede@gmail.com',
            role: 'Administrator',
            date: '23/04/2023, 11:38.00',
            status: 'pending',
        },
        {
            key: '3',
            name: 'Osamede Ahrumwunde',
            email: 'osamede@gmail.com',
            role: 'Super Admin',
            date: '23/04/2023, 11:38.00',
            status: 'pending',
        },
    ];
    return (
        <div>

            <><div className='wallet-table mt-8'>
                <CustomTable tableBorder={'none'} filterBorder={`1px solid #EEEEEE`} columns={columns} data={data} filterHeader role status
                    pagination={{
                        hideOnSinglePage: true,
                        pageSize: 7,
                    }}
                />
            </div>
                <CustomButton text={'Invite New User'} width='180px' color={color.mainColor} bg={color.fieldColor} onClick={onAddUser} className='mt-6' />
            </>
        </div>
    )
}

export default UserManagement