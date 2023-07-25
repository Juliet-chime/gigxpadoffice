import React from 'react'
import CustomTable from '../../components/table/CustomTable'
import Dashboardheader from '../../components/dashboardComponents/Dashboardheader'
import CustomTableHeader from '../../components/table/CustomTableHeader';

const Transaction = () => {

    const columns = [
        {
          title: 'Transaction Id',
          dataIndex: 'trxId',
          key:'trxId'
        },
        {
          title: 'Sender',
          dataIndex: 'sender',
          key:'sender'
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key:'amount'
        },
        {
          title: 'Transaction Type',
          dataIndex: 'trxType',
          key:'trxType'
        },
        {
          title: 'Currency',
          dataIndex: 'currency',
          key:'currency'
        },
        {
          title: 'Transaction Reference',
          dataIndex: 'trxRef',
          key:'trxRef'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key:'status',
          render: (text) => {
            console.log(text,'hfhf')
            return <h1 style={{textTransform:'uppercase',fontWeight:'bold',fontSize:'10px',color:`${text === 'success' ? 'green' : 'red'}`}}>{text}</h1>
          },
        },
      ];

   const data = [];
      for (let i = 0; i < 46; i++) {
        data.push({
          key: i,
          trxId: '112039901',
          sender:'Harold Ajagu',
          amount:'120,000',
          trxType:'Credit',
          currency:'Naira',
          trxRef:'190008377000',
          status:'success',
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
          people:"kadijatt"
        });
      }

  return (
    <div>
      <Dashboardheader
       componentName={'FIAT Transactions'} 
       label={'Manage and Monitor FIAT transactions'}
       />
       <CustomTableHeader/>
      <CustomTable 
      data={data}
      columns={columns}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {console.log({record,rowIndex,event},'clicked')}, // click row
          onDoubleClick: (event) => {}, // double click row
          onContextMenu: (event) => {}, // right button click row
          onMouseEnter: (event) => {}, // mouse enter row
          onMouseLeave: (event) => {}, // mouse leave row
        };
      }}
      />
    </div>
  )
}

export default Transaction