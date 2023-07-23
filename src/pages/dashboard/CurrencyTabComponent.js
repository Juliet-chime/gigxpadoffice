import { Divider } from 'antd'
import React from 'react'

const CurrencyTabComponent = ({revenueAmount,profitAmount}) => {
  return (
    <div>
        <p>Total Revenue</p>
        <h2>{revenueAmount}</h2>
        <Divider/>
        <p>Total Profit</p>
        <h2>{profitAmount}</h2>
    </div>
  )
}

export default CurrencyTabComponent