import React from 'react'

const ChartHeader = ({ details, label, amount }) => {

    return (
        <div >
            {details ? <div>
                <p className='text-[14px] text-lighterAsh'>{label}</p>
                <h2 className='text-mainColor font-bold text-[24px]'>{amount}</h2>
            </div> : null}

        </div>
    )
}

export default ChartHeader