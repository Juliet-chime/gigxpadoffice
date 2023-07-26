import React from 'react'
import { Table } from 'antd';
import { TableWrapperStyles } from './style';
import CustomTableHeader from './CustomTableHeader';

const CustomTable = ({columns,data,assest,type,status,...props}) => {

      const itemRender = (_, type, originalElement) => {
        console.log(type, "a");
        if (type === "prev") {
          return null;
        }
        if (type === "next") {
          return null;
        }
        return originalElement;
      };
  return (
    <TableWrapperStyles>
       <CustomTableHeader assest={assest} type={type} status={status}/>
        <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{
              hideOnSinglePage:true,
              pageSize:7,
              itemRender: itemRender
        }}
        {...props}
        />
    </TableWrapperStyles>
  )
}

export default CustomTable