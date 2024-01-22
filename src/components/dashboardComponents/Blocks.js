import React from 'react'
import { BlockStyle } from './style'

const Blocks = ({
    name,
    bigAmount,
    smallAmount,
    currency,
    children,
    ...props
}) => {
    return (
        <BlockStyle {...props}>
            <div>
                {!!name && (
                    <p className={`text-[12px] text-mainColor`}>{name}</p>
                )}
                {!!bigAmount && (
                    <h2 className={`text-[12px] md:text-[20px] font-bold`}>
                        {bigAmount}
                    </h2>
                )}
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
