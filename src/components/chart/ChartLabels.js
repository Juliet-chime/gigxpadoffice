import React from 'react'

const ChartLabels = ({ name, bgColor }) => {
  return (
    <div className='flex items-center'>
      <div className={`w-2 h-2 ${name === 'Deposits' ? 'bg-deposit' : name === 'Swaps' ? 'bg-swaps' : name === 'Withdrawals' ? 'bg-withdraw' : name === 'Transfers' ? 'bg-transfer' : bgColor} mr-2 rounded-full`} />
      <p>{name}</p>
    </div>
  )
}

export default ChartLabels