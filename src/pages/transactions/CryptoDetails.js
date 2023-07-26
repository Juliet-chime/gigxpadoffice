import React from 'react'
import TrxDetailsValue from './TrxDetailsValue'

const CryptoDetails = ({ data }) => {
    return (
        <div>
            <h2 className='text-xl font-bold py-3 font-cabinetgrotesk'>Transaction Details</h2>

            <div>
                <TrxDetailsValue name={'Transaction ID'} value={data?.trxId} />
                <TrxDetailsValue name={'Transaction Fee'} value={data?.amount} />
                <TrxDetailsValue name={'Quidax Fee'} value={data?.quidaxFee} />
                <TrxDetailsValue name={'XPAD Fee'} value={data?.xpadFee} />
                <TrxDetailsValue name={'Email address'} value={data?.email} />
                <TrxDetailsValue name={'Phone Number'} value={data?.phone} />
                <TrxDetailsValue name={'Transaction Time'} value={data?.time} />
            </div>

            <div className='mt-10'>
                <TrxDetailsValue name={'Source Wallet'} value={data?.sourceWallet} />
                <TrxDetailsValue name={'Source Wallet Name'} value={data?.sourceWalletName} />
                <TrxDetailsValue name={'Designation Wallet'} value={data?.designationWallet} />
            </div>
        </div>
    )
}

export default CryptoDetails