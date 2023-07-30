import React from 'react'
import { Table } from 'antd';
import { TableWrapperStyles } from './style';
import CustomTableHeader from './CustomTableHeader';

const CustomTable = ({ columns, data, assest, type, status, border, role,radius,headerBorder,bottom, top, filterHeader, ...props }) => {

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
    <TableWrapperStyles border={border} radius={radius} top={top}>
{filterHeader ? <CustomTableHeader assest={assest} type={type} status={status} role={role} headerBorder={headerBorder} bottom={bottom} /> : null}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          hideOnSinglePage: true,
          pageSize: 7,
          itemRender: itemRender
        }}
        {...props}
      />
    </TableWrapperStyles>
  )
}

export default CustomTable