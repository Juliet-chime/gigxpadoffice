import { Divider } from 'antd'
import React from 'react'
import Loader from '../../components/loader/Loader'

const RevenueItem = ({ title, value }) => {
  return <>
    <p>{title}</p>
    <h2 className='text-mainColor font-medium text-[24px]'>{value}</h2>
  </>
}

const CurrencyTabComponent = ({ revenueAmount, profitAmount, loading }) => {
  return (
    <div>
      {loading ? <div className=' h-[150px]'>
        <Loader />
      </div> : <>
        <RevenueItem title='Total Revenue' value={revenueAmount} />
        <Divider />
        <RevenueItem title='Total Profit' value={profitAmount} />
      </>}
    </div>
  )
}

export default CurrencyTabComponent