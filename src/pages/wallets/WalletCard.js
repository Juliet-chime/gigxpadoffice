import React from 'react'
import { WalletCardStyles } from '../../services/style'

const WalletCard = ({ currency, coin, coinAmt, rate, bg }) => {
    return (
        <WalletCardStyles bg={bg}>
            <div>
                <p className='text-xs md:text-lg lg:text-lg xl:text-lg text-lighterAsh'>{currency}</p>
                <h3 className='text-xs ms:text-3xl lg:text-3xl xl-text-3xl text-mainColor'>{coin}</h3>
                <h5 className='text-xs md:text-sm lg:text-sm xl-text-sm text-mainColor'>{coinAmt}</h5>
            </div>
            <div className='mt-6'>
                <p className='text-xs md:text-lg lg:text-lg xl:text-lg text-lighterAsh'>Rate</p>
                <h6 className='text-xs md:text-lg lg:text-lg xl-text-lg text-mainColor'>{rate}</h6>
            </div>
        </WalletCardStyles>
    )
}

export default WalletCard

