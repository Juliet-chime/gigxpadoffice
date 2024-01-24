import React from 'react'
import TrxDetailsValue from './TrxDetailsValue'
import moment from 'moment'
import Loader from '../../components/loader/Loader'
import { formatMoney } from '../../utils/helperFunctions'

const CryptoDetails = ({ data, loading }) => {
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
                            value={Number(data?.amount).toFixed(5)}
                        />
                        {/* <TrxDetailsValue name={'Quidax Fee'} value={data?.quidaxFee} />
                <TrxDetailsValue name={'XPAD Fee'} value={data?.xpadFee} /> */}
                        <TrxDetailsValue
                            name={'Email address'}
                            value={data?.email}
                        />
                        <TrxDetailsValue
                            name={'Phone Number'}
                            value={data?.phoneNumber}
                        />
                        <TrxDetailsValue
                            name={'Transaction Time'}
                            value={moment(data?.createdAt).format(
                                'MM/D/YYYY, h:mm a'
                            )}
                        />
                    </div>

                    <div className="mt-10">
                        <TrxDetailsValue
                            name={'Source Wallet'}
                            value={`${data?.metadata?.webhookData?.sourceAddress.slice(
                                0,
                                17
                            )}...`}
                        />
                        <TrxDetailsValue
                            name={'Source Wallet Name'}
                            value={data?.metadata?.webhookData?.source?.name}
                        />
                        <TrxDetailsValue
                            name={'Designation Wallet'}
                            value={`${data?.metadata?.webhookData?.destinationAddress.slice(
                                0,
                                17
                            )}...`}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default CryptoDetails
