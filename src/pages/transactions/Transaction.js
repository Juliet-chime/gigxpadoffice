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

  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date('2022-09-05'));
  const [endDate, setEndDate] = useState(new Date('2022-09-05'));

  console.log(fiatTransaction?.loading, 'loading')

  const columns = [
    {
      title: 'Transaction Id',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Sender',
      dataIndex: 'customerName',
      key: 'customerName',
      render: (text) => {
        return <p>{capitalizeFLetter(text)}</p>
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => {
        return <p>{formatMoney({ amount: text })}</p>
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
        return <p>{!!text ? text : '-'}</p>
      },
      align:'center'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        return <StatusTag text={text} />
      },
    },
    {
      title: 'Timestamp',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => {
        return <p>{moment(text).format('DD/MM/YYYY, h:mm:ss')}</p>
      },
    },
  ];

  const handleStatusChange = (value) => {
    console.log(`selected ${value}`);
    // const val = value
    // setStatus(val)
    // dispatch(queryFiatTransactions({status}))
  };

  const handleTypeChange = async (value) => {
    console.log(`selected ${value}`);
    // const val = value
    // setType(val)
    // dispatch(queryFiatTransactions({type:value}))
  };

  const onInputChange = (e) => {
    console.log(e.target.value)
  }

  useEffect(() => {
    async function getFiatTransactions() {
      try {
        dispatch(queryFiatTransactions({ from: moment(startDate).format('YYYY-MM-DD') })).unwrap()
      } catch (e) {
        console.log(e)
      }
    }
    getFiatTransactions()
  }, [startDate, dispatch])

  const OnEachRowClicked = (trxId) => {
    setOpen(true);
    dispatch(queryOneFiatTransactions({ id: trxId })).unwrap()
  }

  return (
    <div>
      <Dashboardheader
        componentName={'FIAT Transactions'}
        label={'Manage and Monitor FIAT transactions'}
        className='mb-6'
      />
      <CustomTable
        data={fiatTransaction?.fiatTransactions?.data}
        columns={columns}
        isLoading={fiatTransaction?.loading}
        filterHeader={true}
        startDate={startDate}
        endDate={endDate}
        onInputChange={onInputChange}
        handleStatusChange={handleStatusChange}
        handleTypeChange={handleTypeChange}
        onHandleStartDate={(date) => {
          console.log(date, 'start')
          setStartDate(new Date(date))
        }}
        onHandleEndDate={(date) => {
          console.log(date, 'end')
          setEndDate(new Date(date))
        }}
        onRow={(record) => {
          return {
            onClick: (event) => OnEachRowClicked(record?.id), // click row
          };
        }}
      />
      <CustomDrawer placement="right" onClose={() => setOpen(false)} open={open}>
        <TransactionDetails data={oneFiatTransaction?.oneFiatTransaction?.data} loading={oneFiatTransaction?.loading} />
      </CustomDrawer>
    </div>
  )
}

export default Transaction