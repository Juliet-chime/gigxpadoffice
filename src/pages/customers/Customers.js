import React from 'react'
import CustomTable from '../../components/table/CustomTable'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import { useNavigate } from 'react-router-dom';

const Customers = () => {

  const navigate = useNavigate()

  const columns = [
    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Date Joined',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        console.log(text, 'hfhf')
        return <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px', color: `${text === 'active' ? '#5BE2A4' : 'red'}` }}>{text}</h1>
      },
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      userId: 'X000010',
      name: 'Augustine Ekweremadu',
      email: 'augustine@gmail.com',
      phone: '09023657477',
      date: '3/10/2021',
      status: 'active',
      age: 32,
      address: `London, Park Lane no. ${i}`,
      people: "kadijatt",
      sourceAcctNo: '0118026649',
      sourceAcctName: 'Harold Chuwuemeka',
      receiverAcct: '0009839910',
      receiverAcctName: 'Anita Uzumma'
    });
  }

  return (
    <div>
      <Dashboardheader
        componentName={'Customers'}
        label={'Manage your customers and transactions'}
        className='mb-6'
      />
      <CustomTable
        data={data}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log(record)
              navigate(`/customers/${record?.userId}`)
            }, // click row
            onDoubleClick: (event) => { }, // double click row
            onContextMenu: (event) => { }, // right button click row
            onMouseEnter: (event) => { }, // mouse enter row
            onMouseLeave: (event) => { }, // mouse leave row
          };
        }}
      />
    </div>
  )
}

export default Customers