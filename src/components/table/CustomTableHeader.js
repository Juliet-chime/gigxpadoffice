import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { CustomHeaderStyle } from './style'
import CustomSelect from '../fields/CustomSelect'
import { RiFileExcel2Fill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import {FaTimes} from 'react-icons/fa'

const CustomTableHeader = () => {

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

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <CustomHeaderStyle>
            <Row className='border border-red-950 px-0 lg:px-4 xl:px-4'>
            <Col xs={24} sm={24} md={9} lg={9} xl={9} className='border-r border-lightash p-0 lg:p-2 xl:p-2'>1</Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7} className='p-3 sm:p-0 xs:p-0 border-l border-r border-lightash'>
                2
                </Col>
                <Col xs={24} sm={24} md={3} lg={3} xl={3} className='p-3 sm:p-0 xs:p-0 border-l border-r border-lightash'>3</Col>
                <Col xs={24} sm={24} md={5} lg={5} xl={5} className='p-4 xs:p-0 sm:p-0'>4</Col>
            </Row>

            {/* <Row className='border border-red-950 px-0 lg:px-4 xl:px-4'>
                <Col xs={24} sm={24} md={9} lg={9} xl={9} className='border-r border-lightash p-0 lg:p-2 xl:p-2'>
                {!showSearch ?
                            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row items-start justify-between'>
                                <h2 className='hidden lg:block xl:block font-bold text-sm sm:text-xs xs:text-xs text-filterColor font-circular'>FILTER TABLE</h2>
                                <div className='flex items-start lg:items-center xl:items-center gap-2'>
                                    <CustomSelect
                                        defaultValue="-Type-"
                                        options={typeOptions}
                                        onChange={handleChange}
                                        style={{
                                            width: 120,
                                        }} 
                                        />
                                    <CustomSelect
                                        defaultValue="-Status-"
                                        options={successOptions}
                                        onChange={handleChange}
                                        style={{
                                            width: 120,
                                        }} 
                                        />
                                </div>
                            </div> : <div>search</div>}
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} xl={7} className='p-3 sm:p-0 xs:p-0 border-l border-r border-lightash'>
                2
                </Col>
                <Col xs={24} sm={24} md={3} lg={3} xl={3} className='p-3 sm:p-0 xs:p-0 border-l border-r border-lightash'>
                    <div className='text-search flex items-center justify-center cursor-pointer' onClick={() => setShowSearch(!showSearch)}>
                        {showSearch ? <p className='flex items-center gap-2 text-lg'><FaTimes/>Cancel</p> : <p className='text-2xl'><BiSearch/></p>}
                    </div>
                   
                    </Col>
                <Col xs={24} sm={24} md={5} lg={5} xl={5} className='p-4 xs:p-0 sm:p-0'>
                <div className='cursor-pointer'>
                            <p className='flex items-center justify-center gap-2'>
                        <span><RiFileExcel2Fill color='#4BA787' fontSize={18} /> </span>
                    <span className='font-bold text-sm sm:text-xs xs:text-xs text-filterColor font-circular'>EXPORT TO CSV</span>
                    </p>
                            </div>
                </Col>
            </Row> */}
        </CustomHeaderStyle>
    )
}

export default CustomTableHeader




  {/* <Row>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <div className='border border-red-950 p-3'>
                        {!showSearch ?
                            <div className='flex items-center justify-between border-r border-lightash'>
                                <h2 className='font-bold text-sm sm:text-xs xs:text-xs text-filterColor font-circular'>FILTER TABLE</h2>
                                <div className='flex items-center gap-2'>
                                    <CustomSelect
                                        defaultValue="-Type-"
                                        options={typeOptions}
                                        onChange={handleChange}
                                        style={{
                                            width: 120,
                                        }} />
                                    <CustomSelect
                                        defaultValue="-Status-"
                                        options={successOptions}
                                        onChange={handleChange}
                                        style={{
                                            width: 120,
                                        }} />
                                </div>
                            </div> : <div>search</div>}
                    </div>
                </Col>





                <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                    <div className='border border-red-950 p-3'>sdf</div>
                    <div className='border border-red-900 flex items-center justify-between px-4'>
                        <div className='border border-blue-900 '>2332343</div>
                        <div className='border border-green-900 flex items-center justify-between '>
                            <div>
                                <BiSearch/>
                            </div>
                            <div>

                                <p><RiFileExcel2Fill/> EXPORT TO CSV</p>
                            </div>
                        </div>
                    </div>
                </Col>








                
                <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                <Row className='border border-red-950 p-3'>
                <Col span={12} className='border border-blue-950'>
                {showSearch ? <div className='border-r border-lightash text-search cursor-pointer'>
                               Cancel
                            </div> :<div className='border-r border-lightash text-2xl flex items-center justify-center text-search cursor-pointer' onClick={() => setShowSearch(true)}>
                                <BiSearch/>
                            </div>}
                </Col>
                <Col span={12} className='border border-blue-950'>
                <div>
                            <p className='flex items-center justify-center gap-2 cursor-pointer'>
                        <span><RiFileExcel2Fill color='#4BA787' /> </span>
                    <span className='font-bold text-sm sm:text-xs xs:text-xs text-filterColor font-circular'>EXPORT TO CSV</span>
                    </p>
                            </div>
                </Col>
                </Row>
















                    <Row className='border border-red-950'>
                        <Col span={12} className='border border-blue-950'>
                        {showSearch ? <div className='border-r border-lightash text-2xl text-search cursor-pointer'>
                               <div onClick={()=>setShowSearch(false)}>Cancel</div>
                            </div> :<div className='p-3 border-r border-lightash text-2xl flex items-center justify-center text-search cursor-pointer' onClick={() => setShowSearch(true)}>
                                <BiSearch/>
                            </div>}
                        </Col>
                        <Col span={12} className='border border-green-950'>
                            <div>
                            <p className='flex items-center justify-start cursor-pointer'>
                        <span><RiFileExcel2Fill color='#4BA787' fontSize={18} /> </span>
                    <span className='font-bold text-sm sm:text-xs xs:text-xs text-filterColor font-circular'>EXPORT TO CSV</span>
                    </p>
                            </div>
                        </Col>
                    </Row>



                    <div>
                        <div className='border border-green-900 flex items-center justify-between'>
                            {showSearch ? <div className='p-3 border-r border-lightash text-2xl text-search cursor-pointer'>
                               <div onClick={()=>setShowSearch(false)}>Cancel</div>
                            </div> :<div className='p-3 border-r border-lightash text-2xl flex items-center justify-center text-search cursor-pointer' onClick={() => setShowSearch(true)}>
                                <BiSearch/>
                            </div>}
                    <p className='flex items-center justify-start gap-3 p-3 cursor-pointer'>
                        <span><RiFileExcel2Fill color='#4BA787' fontSize={18} /> </span>
                    <span className='font-bold text-sm sm:text-xs xs:text-xs text-filterColor font-circular'>EXPORT TO CSV</span>
                    </p>  
                        </div>
                    </div>
                </Col>
            </Row> */}