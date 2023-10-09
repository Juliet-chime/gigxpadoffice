import React, { useState } from 'react'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader';
import CustomTable from '../../components/table/CustomTable';
import CustomDrawer from '../../components/fields/CustomDrawer';
import TransactionDetails from '../transactions/TransactionDetails';
import { Col, Row } from 'antd';
import Blocks from '../../components/dashboardComponents/Blocks';
import { color } from '../../assets/color';

const Card = () => {

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
      title: 'Card Number',
      dataIndex: 'cardNumber',
      key: 'cardNumber'
    },
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expDate',
      key: 'expDate'
    },
    {
      title: 'Card Balance',
      dataIndex: 'cardBal',
      key: 'cardBal'
    },
    {
      title: 'Date Issued',
      dataIndex: 'dateIssue',
      key: 'dateIssue'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        return <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px', color: `${text === 'active' ? 'green' : 'red'}` }}>{text}</h1>
      },
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      cardNumber: '112039901',
      expDate: '12/12/2025',
      cardBal: '18,000',
      dateIssue: '13/12/2023',
      status: 'active',
      name: `Chukwuemeka Ajimobi ${i}`,
    });
  }

  return (
    <div>
      <Dashboardheader
        componentName={'Crypto Transactions'}
        label={'Manage and Monitor FIAT transactions'}
      />
      <div className='mt-12 mb-8'>
        <Row>
          <Col xs={24} sm={24} md={7} lg={6} xl={5}>
            <Blocks name='Total Card Top-Up' nameColor={color.mainColor} bigAmount={'1,256,990'} padding='20px' height='92px' bg={color.offWhite} border={`solid 1px ${color.lineAsh}`} />
          </Col>
        </Row>
      </div>
      <CustomTable
        data={data}
        columns={columns}
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

export default Card