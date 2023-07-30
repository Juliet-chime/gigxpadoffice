import React, { useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import CustomDrawer from '../../components/fields/CustomDrawer';
import TransactionDetails from './TransactionDetails';

const Transaction = () => {

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'Transaction Id',
      dataIndex: 'trxId',
      key: 'trxId'
    },
    {
      title: 'Sender',
      dataIndex: 'sender',
      key: 'sender'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Transaction Type',
      dataIndex: 'trxType',
      key: 'trxType'
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency'
    },
    {
      title: 'Transaction Reference',
      dataIndex: 'trxRef',
      key: 'trxRef'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        console.log(text, 'hfhf')
        return <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px', color: `${text === 'success' ? '#5BE2A4' : 'red'}` }}>{text}</h1>
      },
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      trxId: '112039901',
      sender: 'Harold Ajagu',
      amount: '120,000',
      trxType: 'Credit',
      currency: 'Naira',
      trxRef: '190008377000',
      status: 'success',
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      people: "kadijatt",
      email: 'harold.ajagz@gmail.com',
      time: "22/10/2023, 10:56AM",
      phone: "+23408099089002",
      sourceAcctNo: '0118026649',
      sourceAcctName: 'Harold Chuwuemeka',
      receiverAcct: '0009839910',
      receiverAcctName: 'Anita Uzumma'
    });
  }

  return (
    <div>
      <Dashboardheader
        componentName={'FIAT Transactions'}
        label={'Manage and Monitor FIAT transactions'}
        className='mb-6'
      />
      <CustomTable
        data={data}
        columns={columns}
        type
        status
        filterHeader
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              showDrawer()
              setDetails(record)
            }, // click row
            onDoubleClick: (event) => { }, // double click row
            onContextMenu: (event) => { }, // right button click row
            onMouseEnter: (event) => { }, // mouse enter row
            onMouseLeave: (event) => { }, // mouse leave row
          };
        }}
      />
      <CustomDrawer placement="right" onClose={onClose} open={open}>
        <TransactionDetails data={details} />
      </CustomDrawer>
    </div>
  )
}

export default Transaction