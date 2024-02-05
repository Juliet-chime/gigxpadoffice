import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { useNavigate } from 'react-router-dom'
import {
    getAllUsersSelector,
    queryAllUser,
} from '../../services/slices/user/allUsers'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

let initialStartDate = moment().startOf('month').format('YYYY-MM-DD')
let initialEndDate = moment().format('YYYY-MM-DD')

const Customers = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const { allUsers, loading } = useSelector(getAllUsersSelector)


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
                dispatch(
                    queryAllUser({
                        from: initialStartDate,
                        to: initialEndDate,
                    })
                ).unwrap()
              
            } catch (e) {}
        }
        getCustomers()
    }, [dispatch])

    const handleApplyFilter = async () => {
        try {
            dispatch(
                queryAllUser({
                    from:
                        moment(startDate).format('YYYY-MM-DD') ||
                        initialStartDate,
                    to: moment(endDate).format('YYYY-MM-DD') || initialEndDate,
                })
            ).unwrap()
          
        } catch (e) {}
    }
    const handleClearFilter = async () => {
        setStartDate('')
        setEndDate('')
        try {
            dispatch(
                queryAllUser({
                    from: initialStartDate,
                    to: initialEndDate,
                })
            ).unwrap()
           
        } catch (e) {}
    }

    const onInputChange = async (e) => {
        try {
            dispatch(
                queryAllUser({
                    from: initialStartDate,
                    to: initialEndDate,
                    ...(!!e.target.value.length
                        ? { searchField: e.target.value }
                        : {}),
                })
            ).unwrap()
        } catch (e) {}
    }

    const handleStartDate = async (date) => {
        setStartDate(date)
    }

    const handleEndDate = async (date) => {
        setEndDate(date)
    }

    return (
        <div>
            <Dashboardheader
                componentName={'Customers'}
                label={'Manage your customers and transactions'}
                className="mb-6"
            />
            <CustomTable
                data={allUsers?.data?.users}
                columns={columns}
                isLoading={loading}
                filterHeader={true}
                startDate={startDate || initialStartDate}
                endDate={endDate || initialEndDate}
                handelApplyFilter={handleApplyFilter}
                handleClearFilter={handleClearFilter}
                onInputChange={onInputChange}
                onHandleStartDate={handleStartDate}
                onHandleEndDate={handleEndDate}
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
