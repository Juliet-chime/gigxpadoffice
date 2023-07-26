import React from 'react'
import TrxDetailsValue from './TrxDetailsValue'

const TransactionDetails = ({ data }) => {
    return (
        <div>
            <h2 className='text-xl font-bold py-3 font-cabinetgrotesk'>Transaction Details</h2>

            <div>
                <TrxDetailsValue name={'Transaction ID'} value={data?.trxId} />
                <TrxDetailsValue name={'Transaction Fee'} value={data?.amount} />
                <TrxDetailsValue name={'Email address'} value={data?.address} />
                <TrxDetailsValue name={'Phone Number'} value={data?.phone} />
                <TrxDetailsValue name={'Transaction Time'} value={data?.time} />
            </div>

            <div className='mt-10'>
                <TrxDetailsValue name={'Source Account Number'} value={data?.sourceAcctNo} />
                <TrxDetailsValue name={'Source Account Name'} value={data?.sourceAcctName} />
                <TrxDetailsValue name={'Designation Account'} value={data?.receiverAcct} />
                <TrxDetailsValue name={'Designation Account Name'} value={data?.receiverAcctName} />
            </div>
        </div>
    )
}

export default TransactionDetails