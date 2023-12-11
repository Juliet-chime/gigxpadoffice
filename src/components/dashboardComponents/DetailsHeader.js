import React from 'react'
import { PiCaretLeft } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { color } from '../../assets/color'

const DetailsHeader = ({ to, text, subText }) => {
    return (
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-0 md:gap-4">
            <div className=" w-10 h-10 flex items-center justify-center border border-borderLine rounded-[100%] cursor-pointer">
                <Link to={to}>
                    <PiCaretLeft
                        color={color.mainColor}
                        fontSize={20}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
            <div className="mt-2 xl:mt-0">
                <h3 className="text-2xl font-bold text-mainColor font-cabinetgrotesk">
                    {text}
                </h3>
                <p className="text-lg text-lighterAsh">{subText}</p>
            </div>
        </div>
    )
}

export default DetailsHeader
