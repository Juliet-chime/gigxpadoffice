import React from 'react'
import TrxDetailsValue from './TrxDetailsValue'
import { formatMoney } from '../../utils/helperFunctions'
import moment from 'moment'
import Loader from '../../components/loader/Loader'

const TransactionDetails = ({ data, loading }) => {
    return (
        <div>
            <h2 className="text-xl font-bold py-3 font-cabinetgrotesk">
                Transaction Details
            </h2>
            {loading ? (
                <div className="h-[300px]">
                    <Loader />
                </div>
            ) : (
                <>
                    <div>
                        <TrxDetailsValue
                            name={'Transaction ID'}
                            value={data?.transactionId}
                        />
                        <TrxDetailsValue
                            name={'Transaction Fee'}
                            value={formatMoney({ amount: data?.amount })}
                        />
                        <TrxDetailsValue
                            name={'Email address'}
                            value={data?.address}
                        />
                        <TrxDetailsValue
                            name={'Phone Number'}
                            value={data?.phone}
                        />
                        <TrxDetailsValue
                            name={'Transaction Time'}
                            value={moment(data?.createdAt).format(
                                'MM/D/YYYY, h:mm a'
                            )}
                        />
                    </div>
                    {/* <div className='mt-10'>
                <TrxDetailsValue name={'Source Account Number'} value={data?.sourceAcctNo} />
                <TrxDetailsValue name={'Source Account Name'} value={data?.sourceAcctName} />
                <TrxDetailsValue name={'Designation Account'} value={data?.receiverAcct} />
                <TrxDetailsValue name={'Designation Account Name'} value={data?.receiverAcctName} />
            </div> */}
                </>
            )}
        </div>
    )
}

export default TransactionDetails
