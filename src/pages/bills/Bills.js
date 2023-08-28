import React, { useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader';
import CustomTable from '../../components/table/CustomTable';
import CustomDrawer from '../../components/fields/CustomDrawer';
import BillPaymentDetails from './BillPaymentDetails';

const Bills = () => {
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
      title: 'Customer Name',
      dataIndex: 'sender',
      key: 'sender'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Bill Type',
      dataIndex: 'billType',
      key: 'billType'
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
        return <h1 className={``} style={{ textTransform: 'uppercase', padding: "8px 10px", width: "90px", fontWeight: 'bold', fontSize: '10px', color: `${text === 'Completed' ? '#27B785' : text === 'Pending' ? '#EA7D1F' : text === 'Failed' ? '#FF1414' : null}`, background: `${text === 'Completed' ? '#E8FFF7' : text === 'Pending' ? '#ffe7e7' : text === 'Failed' ? '#FFE7E7' : null}` }}>{text}</h1>
      },
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      trxId: '112039901',
      trxFee: 'N25.00',
      sender: "Harold chukwuma",
      amount: 'BillPaymentDetails',
      baxiFee: 'N10.00',
      currency: 'Naira',
      trxRef: '190008377000',
      status: `${i % 2 === 0 ? 'Completed' : i % 3 === 0 ? 'Failed' : i % 2 !== 0 ? 'Pending' : null}`,
      name: `Edward King ${i}`,
      vendor: `EkoDisco`,
      people: "ka",
      email: 'harold.ajagz@gmail.com',
      time: "22/10/2023, 10:56AM",
      phone: "+23408099089002",
      sourceAcctName: 'Harold Chuwuemeka',
      receiverAcct: '0009839910',
      receiverAcctName: 'Anita Uzumma',
      billType: 'Airtime',
      description: '-'
    });
  }
  return (
    <div>
      <Dashboardheader
        componentName={'Bill Payments'}
        label={'Manage and Monitor FIAT transactions'}
        className='mb-6'
      />
      <CustomTable
        data={data}
        columns={columns}
        bill
        filterHeader
        status
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
        <BillPaymentDetails data={details} />
      </CustomDrawer>
    </div>
  )
}

export default Bills