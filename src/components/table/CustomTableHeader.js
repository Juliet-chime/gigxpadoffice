import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { CustomHeaderStyle } from './style'
import CustomSelect from '../fields/CustomSelect'
import { RiFileExcel2Fill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import CustomInputField from '../fields/CustomField'
import { color } from '../../assets/color'

const CustomTableHeader = ({ assest, type, status, bill,headerBorder,role,bottom }) => {

    const [showSearch, setShowSearch] = useState(false)
    const typeOptions = [
        {
            value: 'credit',
            label: 'Credit',
        },
        {
            value: 'debit',
            label: 'Debit',
        },
    ]

    const assestOptions = [
        {
            value: 'bitcoin',
            label: 'BitCoin',
        },
        {
            value: 'usd',
            label: 'USDT',
        },
    ]

    const successOptions = [
        {
            value: 'success',
            label: 'Success',
        },
        {
            value: 'failed',
            label: 'Failed',
        },
        {
            value: 'pending',
            label: 'Pending',
        },
    ]

    const roleOptions = [
        {
            value: 'admininstrator',
            label: 'Administrator',
        },
        {
            value: 'finance',
            label: 'Finance',
        },
        {
            value: 'developer',
            label: 'Developer',
        },
    ]

    const billsPayment = [
        {
            value: 'electricity',
            label: 'Electricity',
        },
        {
            value: 'cable',
            label: 'Cable Television',
        },
        {
            value: 'airtime',
            label: 'Airtime & Data',
        },
        {
            value: 'sports',
            label: 'Sports & Gaming',
        },
    ]

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <CustomHeaderStyle headBorder={headerBorder} bottom={bottom}>
            <Row className='px-0 lg:px-4 xl:px-4'>
                <Col xs={24} sm={24} md={9} lg={9} xl={9} className='border-r border-lightash p-1 md:p-2 lg:p-2 xl:p-2 mb-8 md:mb-0 lg:mb-0 xl:mb-0'>
                    {!showSearch ? <div className='flex items-start lg:items-center xl:items-center justify-between'>
                        <h2 className='hidden lg:block xl:block font-bold text-sm sm:text-xs xs:text-xs text-filterColor font-circular'>FILTER TABLE</h2>
                        <div className='flex items-start lg:items-center xl:items-center gap-4'>
                            {assest && <CustomSelect
                                defaultValue="-Asset-"
                                options={assestOptions}
                                onChange={handleChange}
                            />}
                            {role && <CustomSelect defaultValue="-User Role-"
                                options={roleOptions}
                                onChange={handleChange}/>}
                            {type && <CustomSelect
                                defaultValue="-Type-"
                                options={typeOptions}
                                onChange={handleChange}
                            />}
                            {
                                status && <CustomSelect
                                    defaultValue="-Status-"
                                    options={successOptions}
                                    onChange={handleChange}
                                />
                            }
                            {
                                bill && <CustomSelect
                                    defaultValue="-Bill Type-"
                                    options={billsPayment}
                                    onChange={handleChange}
                                />
                            }
                        </div>
                        <div className='flex md:hidden lg:hidden xl:hidden text-search items-center justify-end cursor-pointer' onClick={() => setShowSearch(!showSearch)}>
                            <p className='text-2xl'><BiSearch /></p>
                        </div>
                    </div> : <div className='relative bg-tableInput'>
                        <CustomInputField radius='0px' placeholder='Search Table' prefix={<BiSearch fontSize={18} color={color.mainColor} />} height='2.5rem' />
                        <FaTimes className='flex md:hidden lg:hidden xl:hidden absolute right-4 top-3 text-lg cursor-pointer' onClick={() => setShowSearch(false)} />
                    </div>}
                </Col>
                <Col xs={14} sm={14} md={7} lg={7} xl={7} className='p-1 lg:p-3 xl:p-3 border-0 md:border-l lg:border-l xl:border-l md:border-r lg:border-r xl:border-r border-lightash'>
                    <div className='flex items-center justify-between'>
                        <p className='flex flex-col'>
                            <span className="text-ash text-xs">End Date</span>
                            <span className="text-mainColor text-xs font-medium">12 JULY 2021</span>
                        </p>
                        <p className="text-mainColor text-sm font-medium">-</p>
                        <p className='flex flex-col'>
                            <span className="text-ash text-xs">Start Date</span>
                            <span className="text-mainColor text-xs font-medium">20 JULY 2021</span>
                        </p>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} className='p-1 md:p-3 lg:p-3 xl:p-3 border-0 md:border-l lg:border-l xl:border-l md:border-r lg:border-r xl:border-r border-lightash'>

                    <div className='text-search flex items-center justify-center cursor-pointer' onClick={() => setShowSearch(!showSearch)}>
                        {showSearch ? <p className='flex items-center gap-2 text-lg'><FaTimes />Cancel</p> : <p className='text-2xl'><BiSearch /></p>}
                    </div>
                </Col>
                <Col xs={10} sm={10} md={5} lg={5} xl={5} className='p-1 md:p-3 lg:p-4 xl:p-4'>
                    <div className='cursor-pointer'>
                        <p className='flex items-center justify-center gap-2'>
                            <span><RiFileExcel2Fill color='#4BA787' fontSize={18} /> </span>
                            <span className='font-bold text-xs lg:text-sm xl:text-sm text-filterColor font-circular'>EXPORT TO CSV</span>
                        </p>
                    </div>
                </Col>
            </Row>
        </CustomHeaderStyle>
    )
}

export default CustomTableHeader