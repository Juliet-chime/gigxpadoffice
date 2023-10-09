import React from 'react'
import TrxDetailsValue from './TrxDetailsValue'
import moment from 'moment'
import Loader from '../../components/loader/Loader'
import { formatMoney } from '../../utils/helperFunctions'

const CryptoDetails = ({ data, loading }) => {
    return (
        <div>
            <h2 className='text-xl font-bold py-3 font-cabinetgrotesk'>Transaction Details</h2>
            {loading ? <div className='h-[300px]'><Loader /></div> : <>
                <div>
                    <TrxDetailsValue name={'Transaction ID'} value={data?.transactionId} />
                    <TrxDetailsValue name={'Transaction Fee'} value={formatMoney({ amount: data?.amount })} />
                    {/* <TrxDetailsValue name={'Quidax Fee'} value={data?.quidaxFee} />
                <TrxDetailsValue name={'XPAD Fee'} value={data?.xpadFee} /> */}
                    <TrxDetailsValue name={'Email address'} value={data?.email} />
                    <TrxDetailsValue name={'Phone Number'} value={data?.phone} />
                    <TrxDetailsValue name={'Transaction Time'} value={moment(data?.createdAt).format('MM/D/YYYY, h:mm a')} />
                </div>

                {/* <div className='mt-10'>
                <TrxDetailsValue name={'Source Wallet'} value={data?.sourceWallet} />
                <TrxDetailsValue name={'Source Wallet Name'} value={data?.sourceWalletName} />
                <TrxDetailsValue name={'Designation Wallet'} value={data?.designationWallet} />
            </div> */}
            </>}


        </div>
    )
}

export default CryptoDetails