import React from 'react'
import cac from '../../assets/images/cac.avif'
import CustomButton from '../../components/fields/CustomButton'
import { color } from '../../assets/color'

const CustomerDetailsDrawer = ({ title, date }) => {
    return (
        <div>
            <div className='p-5'>
                <h2 className='text-xl font-bold font-cabinetgrotesk text-mainColor break-words max-w-1/2'>{title}</h2>
                <p className='text-sm font-medium text-lighterAsh'>Date Uploaded &nbsp; <span className='text-mainColor'>{date}</span></p>
            </div>
            <div className='bg-caramelAsh h-screen flex flex-col items-center gap-8 py-20'>
                <div className='w-72 h-80 border border-red-950'>
                    <img src={cac} alt='' className='w-full h-full' />
                </div>
                <CustomButton text={'Download'} bg={color.white} color={color.mainColor} radius='27px' width='154px' />
            </div>
        </div>
    )
}

export default CustomerDetailsDrawer