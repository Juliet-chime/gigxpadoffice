import React, { useEffect, useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader';
import CustomTable, { antIcon } from '../../components/table/CustomTable';
import CustomDrawer from '../../components/fields/CustomDrawer';
import BillPaymentDetails from './BillPaymentDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getBillTransactionsSelector, queryBillTransactions } from '../../services/slices/transactions/getBillTransactions';
import moment from 'moment';
import { capitalizeFLetter } from '../../utils/func';
import { formatMoney } from '../../utils/helperFunctions';
import StatusTag from '../../components/table/StatusTag';
import { getOneBillTransactionsSelector, queryOneBillTransactions } from '../../services/slices/transactions/getOneBillTransaction';

const Bills = () => {

  const dispatch = useDispatch()

  const billTransaction = useSelector(getBillTransactionsSelector)
  //const oneBillTransaction = useSelector(getOneBillTransactionsSelector)

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState();
  const [startDate, setStartDate] = useState(new Date('2022-09-05'));
  const [endDate, setEndDate] = useState(new Date('2022-09-05'));

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  const onInputChange = (e) => {
    console.log(e.target.value)
  }

  const OnEachRowClicked = (trxId) => {
    setOpen(true)
    dispatch(queryOneBillTransactions({ id: trxId })).unwrap()
  }

  const columns = [
    {
      title: 'Transaction Id',
      dataIndex: 'transactionId',
      key: 'transactionId'
    },
    {
      title: 'Customer Name',
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
        return <p>{formatMoney(text)}</p>
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Bill Type',
      dataIndex: 'type',
      key: 'type',
      render: (text) => {
        return <p>{capitalizeFLetter(text)}</p>
      },
    },
    {
      title: 'Transaction Reference',
      dataIndex: 'transactionReference',
      key: 'transactionReference',
      render: (text) => {
        return <p>{!!text ? text : '-'}</p>
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        return <StatusTag text={text} />
      },
    },
  ];

  useEffect(() => {
    async function getBillTransactions() {
      try {
        dispatch(queryBillTransactions({ from: moment(startDate).format('YYYY-MM-DD') })).unwrap()
      } catch (e) {
        console.log(e)
      }
    }
    getBillTransactions()
  }, [startDate, dispatch])
  return (
    <div>
      <Dashboardheader
        componentName={'Bill Payments'}
        label={'Manage and Monitor FIAT transactions'}
        className='mb-6'
      />
      <CustomTable
        data={billTransaction?.billTransactions?.data}
        columns={columns}
        loading={{
          spinning: billTransaction?.loading,
          indicator: antIcon
        }}
        filterHeader={true}
        startDate={startDate}
        endDate={endDate}
        onInputChange={onInputChange}
        handleBillChange={value => console.log(value)}
        handleStatusChange={(value) => console.log(value)}
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
            onClick: (event) => OnEachRowClicked(record?.id)
          };
        }}
      />
      <CustomDrawer placement="right" onClose={() => setOpen(false)} open={open}>
        <BillPaymentDetails data={details} />
      </CustomDrawer>
    </div>
  )
}

export default Bills