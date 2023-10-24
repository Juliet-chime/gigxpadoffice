import React from 'react'
import { BlockStyle } from './style'

const Blocks = ({
    name,
    bigAmount,
    smallAmount,
    curreny,
    children,
    ...props
}) => {
    return (
        <BlockStyle {...props}>
            <div>
                {!!name && (
                    <p className={`text-[12px] md:text-[16px]`}>{name}</p>
                )}
                {!!bigAmount && (
                    <h2 className={`text-[12px] md:text-[20px] font-[500]`}>
                        {bigAmount}
                    </h2>
                )}
                {!!smallAmount && (
                    <h4 className={`text-[12px] md:text-[14px] font-[500]`}>
                        {smallAmount} {curreny}
                    </h4>
                )}
            </div>
            {children}
        </BlockStyle>
    )
}

export default Blocks
