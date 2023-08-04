import React from 'react'

const ChartHeader = ({ details, label, amount }) => {

    return (
        <div >
            {details ? <div>
                <p>{label}</p>
                <h2>{amount}</h2>
            </div> : null}

        </div>
    )
}

export default ChartHeader