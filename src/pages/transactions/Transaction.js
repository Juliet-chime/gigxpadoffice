import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/table/CustomTable'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import CustomDrawer from '../../components/fields/CustomDrawer';
import TransactionDetails from './TransactionDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getFiatTransactionsSelector, queryFiatTransactions } from '../../services/slices/transactions/getFiatTransactions';
import moment from 'moment'
import { capitalizeFLetter } from '../../utils/func';
import StatusTag from '../../components/table/StatusTag';
import { formatMoney } from '../../utils/helperFunctions';
import { getOneFiatTransactionsSelector, queryOneFiatTransactions } from '../../services/slices/transactions/getOneFiatTransaction';

const Transaction = () => {

  const dispatch = useDispatch()

  const fiatTransaction = useSelector(getFiatTransactionsSelector)
  const oneFiatTransaction = useSelector(getOneFiatTransactionsSelector)
  console.log({fiatTransaction,oneFiatTransaction},'fiat')

  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date('2022-09-05'));

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'Transaction Id',
      dataIndex: 'transactionId',
      key: 'transactionId'
    },
    {
      title: 'Sender',
      dataIndex: 'sender',
      key: 'sender'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => {
        return <p>{formatMoney(text)}</p>
      },
    },
    {
      title: 'Transaction Type',
      dataIndex: 'type',
      key: 'type',
      render: (text) => {
        return <p>{capitalizeFLetter(text)}</p>
      },
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      render: (text) => {
        return <p>{capitalizeFLetter(text?.name)}</p>
      },
    },
    {
      title: 'Transaction Reference',
      dataIndex: 'transactionReference',
      key: 'trxRef',
      render: (text) => {
        return <p className='ml-12'>{!text ? '-' : text}</p>
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        return <StatusTag text={text}/>
        //<h1 className={`${text === 'success'? 'bg-[#E8FFF7]': text === 'failed'?'bg-[#ff14141a]': text === 'pending'?'bg-[#ea7d1f1a]':null} ${text === 'success'? 'text-[#27B785]': text === 'failed'?'text-[#FF1414]': text === 'pending'?'text-[#EA7D1F]':null} rounded-[6px] text-center py-1`} style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px' }}>{text}</h1>
      },
    },
  ];

  const fiatTrx = fiatTransaction?.fiatTransactions?.data?.map((items)=>{
    return {
      ...items,
    sender:items.customerName
    }
  })

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      transactionId: '112039901',
      sender: 'Harold Ajagu',
      amount: '120,000',
      type: 'Credit',
      currency: 'Naira',
      transactionReference: '190008377000',
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

  useEffect(()=>{
    async function getFiatTransactions(){
try{
  dispatch(queryFiatTransactions({from:moment(startDate).format('YYYY-MM-DD')})).unwrap()
} catch(e){
console.log(e)
}
    }
    getFiatTransactions()
  },[startDate,dispatch])

  const OnEachRowClicked = (event,record,trxId) => {
    showDrawer()
    dispatch(queryOneFiatTransactions({id:trxId})).unwrap()
  }

  return (
    <div>
      <Dashboardheader
        componentName={'FIAT Transactions'}
        label={'Manage and Monitor FIAT transactions'}
        className='mb-6'
      />
      <CustomTable
        data={fiatTrx}
        columns={columns}
        loading={fiatTransaction?.loading}
        type
        status
        filterHeader
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => OnEachRowClicked(event,record,record?.id), // click row
            onDoubleClick: (event) => { }, // double click row
            onContextMenu: (event) => { }, // right button click row
            onMouseEnter: (event) => { }, // mouse enter row
            onMouseLeave: (event) => { }, // mouse leave row
          };
        }}
      />
      <CustomDrawer placement="right" onClose={onClose} open={open}>
        <TransactionDetails data={oneFiatTransaction?.oneFiatTransaction?.data} />
      </CustomDrawer>
    </div>
  )
}

export default Transaction