import React from 'react'
import { Table } from 'antd';
import { TableWrapperStyles } from './style';

const CustomTable = ({columns,data,...props}) => {

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