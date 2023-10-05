import React from 'react'
import { Table } from 'antd';
import { TableWrapperStyles } from './style';
import CustomTableHeader from './CustomTableHeader';
import { LoadingOutlined } from '@ant-design/icons';
import NullTableComponent from './NullTableComponent';
import Loader from '../loader/Loader';

export const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
      color: '#E25A5A'
    }}
    spin
  />
);

const CustomTable = ({ isLoading, columns, data, tableBorder, tableRadius, filterBorder, filterBottom, tableTop, filterHeader, handleStatusChange, handleTypeChange, handleBillChange, handleRoleChange, handleAssestChange, onHandleStartDate, onHandleEndDate, startDate, endDate, onInputChange, ...props }) => {

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return null;
    }
    if (type === "next") {
      return null;
    }
    return originalElement;
  };

  return (
    <>
      <TableWrapperStyles tableBorder={tableBorder} tableRadius={tableRadius} tableTop={tableTop}>
        {filterHeader ? <CustomTableHeader handleAssestChange={handleAssestChange} handleBillChange={handleBillChange} handleStatusChange={handleStatusChange} handleTypeChange={handleTypeChange} role={handleRoleChange} filterBorder={filterBorder} filterBottom={filterBottom} startDate={startDate} endDate={endDate} onHandleStartDate={onHandleStartDate} onHandleEndDate={onHandleEndDate} onInputChange={onInputChange} /> : null}
        {!!data?.length ? (<>
          {isLoading ? <div className='h-[400px]'><Loader /></div> : <Table
            columns={columns}
            dataSource={data}
            pagination={{
              hideOnSinglePage: true,
              pageSize: 7,
              itemRender: itemRender
            }}
            rowClassName={'cursor-pointer'}
            loading={false}
            {...props}
          />}
        </>) : <NullTableComponent />}
      </TableWrapperStyles>
    </>
  )
}

export default CustomTable