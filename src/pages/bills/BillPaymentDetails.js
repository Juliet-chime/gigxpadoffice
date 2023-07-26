import React from 'react'
import TrxDetailsValue from '../transactions/TrxDetailsValue'

const BillPaymentDetails = ({ data }) => {
    return (
        <div>
            <h2 className='text-xl font-bold py-3 font-cabinetgrotesk'>Transaction Details</h2>

            <div>
                <TrxDetailsValue name={'Transaction ID'} value={data?.trxId} />
                <TrxDetailsValue name={'Amount'} value={data?.amount} />
                <TrxDetailsValue name={'Transaction Fee'} value={data?.trxFee} />
                <TrxDetailsValue name={'Baxi Fee'} value={data?.baxiFee} />
                <TrxDetailsValue name={'Transaction Time'} value={data?.time} />
                <TrxDetailsValue name={'Status'} status={data?.status} />
            </div>

            <div className='mt-10'>
                <TrxDetailsValue name={'Bill Type'} value={data?.billType} />
                <TrxDetailsValue name={'Vendor'} value={data?.vendor} />
                <TrxDetailsValue name={'Transaction Reference'} value={data?.trxRef} />
            </div>
        </div>
    )
}

export default BillPaymentDetails