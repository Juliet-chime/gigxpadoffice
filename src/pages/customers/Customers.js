import React, { useEffect, useMemo, useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { useNavigate } from 'react-router-dom'
import {
    getAllUsersSelector,
    queryAllUser,
} from '../../services/slices/user/allUsers'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

const Customers = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [startDate] = useState(new Date('2022-09-05'))
    const [endDate] = useState(new Date('2022-09-05'))
    const [customer, setCustomer] = useState('')

    const { allUsers } = useSelector(getAllUsersSelector)

    const users = allUsers?.data?.users

    const checks = useMemo(
        () => [
            (user) =>
                !customer ? true : user.fullName.toLowerCase().includes(customer.toLowerCase()),
        ],
        [customer]
    )

    const filteredData = useMemo(() => {
        return users?.filter((user) => {
            return checks.every((check) => check(user))
        })
    }, [checks, users])

    const columns = [
        {
            title: 'User Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email Address',
            dataIndex: 'emailAddress',
            key: 'emailAddress',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Date Joined',
            dataIndex: 'dateJoined',
            key: 'dateJoined',
            render: (text) => {
                return <p>{moment(text).format('DD/MM/YYYY')}</p>
            },
        },
        // {
        //   title: 'Status',
        //   dataIndex: 'status',
        //   key: 'status',
        //   render: (text) => {
        //     return <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px', color: `${text === 'active' ? '#5BE2A4' : 'red'}` }}>{text}</h1>
        //   },
        // },
    ]

    useEffect(() => {
        async function getCustomers() {
            try {
                dispatch(queryAllUser()).unwrap()
                // dispatch(queryAdmins()).unwrap()
                // dispatch(queryOneUser({id:'851827c0-d122-4edf-bbab-e2a1aa8460ef'})).unwrap()
                // dispatch(queryUserAssest({id:'851827c0-d122-4edf-bbab-e2a1aa8460ef'})).unwrap()
            } catch (e) { }
        }
        getCustomers()
    }, [dispatch])

    return (
        <div>
            <Dashboardheader
                componentName={'Customers'}
                label={'Manage your customers and transactions'}
                className="mb-6"
            />
            <CustomTable
                data={filteredData}
                columns={columns}
                isLoading={allUsers?.loading}
                filterHeader={true}
                startDate={startDate}
                endDate={endDate}
                onInputChange={e => setCustomer(e.target.value)}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            navigate(`/customers/${record?.id}`)
                        },
                    }
                }}
            />
        </div>
    )
}

export default Customers
