import React from 'react'
import TrxDetailsValue from '../transactions/TrxDetailsValue'
import moment from 'moment'
import { formatMoney } from '../../utils/helperFunctions'
import Loader from '../../components/loader/Loader'

const BillPaymentDetails = ({ data, loading }) => {
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
                            name={'Amount'}
                            value={'₦' + formatMoney({ amount: data?.amount })}
                        />
                        {/* <TrxDetailsValue name={'Transaction Fee'} value={data?.trxFee} />
                <TrxDetailsValue name={'Baxi Fee'} value={data?.baxiFee} /> */}
                        <TrxDetailsValue
                            name={'Transaction Time'}
                            value={moment(data?.createdAt).format(
                                'MM/D/YYYY, h:mm a'
                            )}
                        />
                        <TrxDetailsValue
                            name={'Status'}
                            status={data?.status}
                        />
                    </div>

                    <div className="mt-10">
                        <TrxDetailsValue
                            name={'Bill Type'}
                            value={data?.metadata?.type}
                        />
                        {/* <TrxDetailsValue name={'Vendor'} value={data?.vendor} /> */}
                        {/* <TrxDetailsValue name={'Transaction Reference'} value={data?.transactionReference} /> */}
                    </div>
                </>
            )}
        </div>
    )
}

export default BillPaymentDetails
