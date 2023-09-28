import React, { useEffect, useState } from 'react'
import CustomTable, { antIcon } from '../../components/table/CustomTable'
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
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

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
      },
    },
  ];

  const fiatTrx = fiatTransaction?.fiatTransactions?.data?.map((items)=>{
    return {
      ...items,
    sender:items.customerName
    }
  })

  const handleStatusChange = (value) => {
    console.log(`selected ${value}`);
    setStatus(value)
};

const handleTypeChange = async(value) => {
  console.log(`selected ${value}`);
  setType(value)
};

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
        loading={{
          spinning:fiatTransaction?.loading,
          indicator:antIcon
        }}
        filterHeader
        handleStatusChange={handleStatusChange}
        handleTypeChange={handleTypeChange}
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
        <TransactionDetails data={oneFiatTransaction?.oneFiatTransaction?.data} loading={oneFiatTransaction?.loading}/>
      </CustomDrawer>
    </div>
  )
}

export default Transaction