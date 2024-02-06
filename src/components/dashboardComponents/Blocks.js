import React from 'react'
import { BlockStyle } from './style'
import Loader from '../loader/Loader'

const Blocks = ({
    name,
    bigAmount,
    smallAmount,
    currency,
    children,
    loading,
    ...props
}) => {
    return (
        <BlockStyle {...props}>
            <div>
                {!!name && (
                    <p className={`text-[12px] text-mainColor`}>{name}</p>
                )}
                {loading ? (
                    <Loader />
                ) : (
                    !!bigAmount && (
                        <h2 className={`text-[12px] md:text-[20px] font-bold`}>
                            {bigAmount}
                        </h2>
                    )
                )}
                {/* {!!bigAmount && (
                    <h2 className={`text-[12px] md:text-[20px] font-bold`}>
                        {bigAmount}
                    </h2>
                )} */}
                {!!smallAmount && (
                    <h4
                        className={`text-[12px] font-normal`}
                        style={{ color: '#67777E' }}
                    >
                        {smallAmount} {currency}
                    </h4>
                )}
            </div>
            {children}
        </BlockStyle>
    )
}

export default Blocks
