import React from 'react'
import { WalletCardStyles } from '../../services/style'
import CustomButton from '../../components/fields/CustomButton'
import Loader from '../../components/loader/Loader'

const WalletCard = ({
    currency,
    coin,
    coinAmt,
    rate,
    bg,
    name,
    loading,
    onViewLedgerBalance,
    ...props
}) => {
    return (
        <WalletCardStyles bg={bg} {...props}>
            {loading ? (
                <div className="h-[150px]">
                    <Loader />
                </div>
            ) : (
                <div>
                    <div>
                        <p className="text-xs md:text-lg lg:text-lg xl:text-lg text-lighterAsh">
                            {currency}
                            <span className="text-[10px]"> ({name})</span>
                        </p>
                        {coin ? <h3 className="text-xs ms:text-xl lg:text-xl xl-text-xl text-mainColor">
                            {Number(coin).toFixed(8)}
                        </h3> : null}
                        <h5 className="text-xs md:text-sm lg:text-sm xl-text-sm text-mainColor">
                            {coinAmt}
                        </h5>
                    </div>
                    {rate ? <div className="rate mt-10">
                        <p className="text-[12px] text-lighterAsh">
                            Amount in USD
                        </p>
                        <h6 className="text-[16px] text-mainColor">{rate}</h6>
                    </div> : null}

                    <div className="viewledger mt-10">
                        <CustomButton
                            text={'View Ledger Table'}
                            bg="white"
                            border="1px solid #E3E3E3"
                            radius="2rem"
                            color="#1D3C48"
                            size="12px"
                            onClick={onViewLedgerBalance}
                        />
                    </div>
                </div>
            )}
        </WalletCardStyles>
    )
}

export default WalletCard