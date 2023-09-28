import React from 'react'
import { Table } from 'antd';
import { TableWrapperStyles } from './style';
import CustomTableHeader from './CustomTableHeader';
import { LoadingOutlined } from '@ant-design/icons';
import NullTableComponent from './NullTableComponent';

const CustomTable = ({ columns, data, assest, type, status, border, role, radius, headerBorder, bottom, top, filterHeader,loading, ...props }) => {

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return null;
    }
    if (type === "next") {
      return null;
    }
    return originalElement;
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color:'#E25A5A'
      }}
      spin
    />
  );

  return (
   <>
    <TableWrapperStyles border={border} radius={radius} top={top}>
      {filterHeader ? <CustomTableHeader assest={assest} type={type} status={status} role={role} headerBorder={headerBorder} bottom={bottom} /> : null}
     {data?.length < 0 ?<NullTableComponent/>:<Table
        columns={columns}
        dataSource={data}
        pagination={{
          hideOnSinglePage: true,
          pageSize: 7,
          itemRender: itemRender
        }}
        loading={{
          spinning:loading,
          indicator:antIcon
        }}
        indicator
        rowClassName={'cursor-pointer'}
        {...props}
      />}
    </TableWrapperStyles>
    </>
  )
}

export default CustomTable