import React from 'react'
import { TbReload } from 'react-icons/tb'
import { color } from '../../assets/color'

const NullTableComponent = () => {
    return (
        <div>
            <div className='w-full lg:w-half xl:w-half m-auto flex flex-col items-center justify-center gap-4 py-20'>
                <div className='w-16 h-16 border border-fieldAsh flex items-center justify-center rounded-full bg-fieldAsh'>
                    <TbReload fontSize={24} color={color.mainColor} />
                </div>
                <h2 className='text-lg font-bold font-cabinetgrotesk'>Unable to fetch data</h2>
                <p className="text-lighterAsh text-xs text-center max-w-30">We are unable to fetch this data. Please check your connection or contact administrator</p>
            </div>

        </div>
    )
}

export default NullTableComponent