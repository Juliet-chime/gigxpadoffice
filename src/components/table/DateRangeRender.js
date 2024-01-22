import React from 'react'
import { BsDash } from 'react-icons/bs'

const DateRangeRender = ({
    startLabel,
    endLabel,
    startDate,
    endDate,
    ...props
}) => {
    return (
        <div className="flex items-center gap-2 lg:gap-5 xl:gap-5" {...props}>
            <p className="flex flex-col">
                <span className="text-ash text-xs">{startLabel}</span>
                <span className="text-mainColor text-xs font-medium">
                    {startDate}
                </span>
            </p>
            <BsDash />
            <p className="flex flex-col">
                <span className="text-ash text-xs">{endLabel}</span>
                <span className="text-mainColor text-xs font-medium">
                    {endDate}
                </span>
            </p>
        </div>
    )
}

export default DateRangeRender
