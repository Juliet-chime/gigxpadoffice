import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { CustomHeaderStyle } from './style'
import CustomSelect from '../fields/CustomSelect'
import { RiFileExcel2Fill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import CustomInputField from '../fields/CustomField'
import { color } from '../../assets/color'
import OneDateRange from '../chart/OneDateRange'
import CustomButton from '../fields/CustomButton'
import DateRangeRender from './DateRangeRender'
import { PiCaretDown, PiCaretUp } from 'react-icons/pi'
import {
    assestOptions,
    billsPayment,
    roleOptions,
    statusOptions,
    typeOptions,
} from '../../utils/constants'
import moment from 'moment'

const CustomTableHeader = ({
    filterBorder,
    filterBottom,
    startDate,
    tableName,
    endDate,
    handleAssestChange,
    handleRoleChange,
    handleBillChange,
    handleStatusChange,
    handleTypeChange,
    onInputChange,
    onHandleStartDate,
    onHandleEndDate,
    showDateFilter = true,
    showExportCSV = true,
}) => {
    const [showSearch, setShowSearch] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)

    return (
        <CustomHeaderStyle
            filterBorder={filterBorder}
            filterBottom={filterBottom}
        >
            <Row align="middle" className="px-2 lg:px-4 xl:px-4">
                <Col
                    xs={24}
                    sm={24}
                    md={!showDateFilter ? 21 : 9}
                    lg={!showDateFilter ? 21 : 10}
                    xl={!showDateFilter ? 21 : 11}
                    className="border-r border-lightash p-1 md:p-2 lg:p-2 xl:p-2 mb-2 md:mb-0 lg:mb-0 xl:mb-0"
                >
                    {!showSearch ? (
                        <div className="flex items-start lg:items-center xl:items-center justify-between">
                            <h2 className="hidden lg:block xl:block font-bold text-sm sm:text-xs xs:text-xs text-filterColor font-circular uppercase">
                                {tableName || ' FILTER TABLE'}
                            </h2>
                            <div className="flex items-start lg:items-center justify-end gap-4 w-[90%] lg:w-[70%]">
                                {handleAssestChange && (
                                    <CustomSelect
                                        defaultValue="-Asset-"
                                        options={assestOptions}
                                        onChange={handleAssestChange}
                                        width="200px"
                                    />
                                )}
                                {handleRoleChange && (
                                    <CustomSelect
                                        defaultValue="-User Role-"
                                        options={roleOptions}
                                        onChange={handleRoleChange}
                                        width="200px"
                                    />
                                )}
                                {handleTypeChange && (
                                    <CustomSelect
                                        defaultValue="-Type-"
                                        options={typeOptions}
                                        onChange={handleTypeChange}
                                        width="200px"
                                    />
                                )}
                                {handleStatusChange && (
                                    <CustomSelect
                                        defaultValue="-Status-"
                                        options={statusOptions}
                                        onChange={handleStatusChange}
                                        width="200px"
                                    />
                                )}
                                {handleBillChange && (
                                    <CustomSelect
                                        defaultValue="-Bill Type-"
                                        options={billsPayment}
                                        onChange={handleBillChange}
                                        width="200px"
                                    />
                                )}
                            </div>
                            <div
                                className="flex md:hidden lg:hidden xl:hidden text-search items-center justify-end cursor-pointer"
                                onClick={() => setShowSearch(!showSearch)}
                            >
                                <p className="text-2xl">
                                    <BiSearch />
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="relative bg-tableInput transition-all duration-100 ease-linear">
                            <CustomInputField
                                radius="0px"
                                placeholder="Search Table"
                                prefix={
                                    <BiSearch
                                        fontSize={18}
                                        color={color.mainColor}
                                    />
                                }
                                height="2.5rem"
                                onChange={onInputChange}
                            />
                            <FaTimes
                                className="flex md:hidden lg:hidden xl:hidden absolute right-4 top-3 text-lg cursor-pointer"
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    )}
                </Col>
                {showDateFilter ? (
                    <Col
                        xs={14}
                        sm={14}
                        md={7}
                        lg={8}
                        xl={6}
                        className="p-1 lg:p-3 xl:p- 3 border-0 md:border-l lg:border-l xl:border-l md:border-r lg:border-r xl:border-r border-lightash"
                    >
                        <div className="relative">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setShowCalendar(!showCalendar)}
                            >
                                <DateRangeRender
                                    startLabel={'Start Date'}
                                    startDate={moment(startDate).format(
                                        'DD MMM YYYY'
                                    )}
                                    endLabel={'End Date'}
                                    endDate={moment(endDate).format(
                                        'DD MMM YYYY'
                                    )}
                                />
                                {showCalendar ? (
                                    <PiCaretUp
                                        color={color.mainColor}
                                        fontSize={20}
                                        fontWeight={'bold'}
                                    />
                                ) : (
                                    <PiCaretDown
                                        color={color.mainColor}
                                        fontSize={20}
                                        fontWeight={'bold'}
                                    />
                                )}
                            </div>
                            {showCalendar ? (
                                <div className="absolute top-12 z-50 bg-borderColor shadow-lg">
                                    <div className="flex p-4 gap-4">
                                        <OneDateRange
                                            selected={startDate}
                                            onChange={onHandleStartDate}
                                            selectsStart
                                            inline
                                        />
                                        <div className="border border-borderLine" />
                                        <OneDateRange
                                            selected={endDate}
                                            onChange={onHandleEndDate}
                                            selectsEnd
                                            minDate={startDate}
                                            inline
                                        />
                                    </div>
                                    <div className="flex items-center justify-between border-t border-t-borderLine p-3">
                                        <div className="flex items-center gap-3">
                                            <CustomButton
                                                text="APPLY FILTER"
                                                bg={color.secondaryColor}
                                                radius="3px"
                                                size="10px"
                                                weight="bold"
                                                padding="10px 20px"
                                                height="30px"
                                            />
                                            <CustomButton
                                                text="CLEAR FILTER"
                                                color="#3E3E3E"
                                                bg={color.offWhite}
                                                radius="3px"
                                                size="10px"
                                                weight="bold"
                                                padding="10px 20px"
                                                height="30px"
                                            />
                                        </div>
                                        <DateRangeRender
                                            startLabel={'Starting From'}
                                            startDate={moment(startDate).format(
                                                'DD MMM YYYY'
                                            )}
                                            endLabel={'Ending On'}
                                            endDate={moment(endDate).format(
                                                'DD MMM YYYY'
                                            )}
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </Col>
                ) : null}
                <Col
                    xs={0}
                    sm={0}
                    md={3}
                    lg={!showExportCSV ? 3 : 2}
                    xl={3}
                    className={`p-1 md:p-3 lg:p-3 xl:p-3 border-0 ${
                        !showExportCSV
                            ? 'border-0'
                            : 'md:border-l lg:border-l xl:border-l md:border-r lg:border-r xl:border-r border-lightash'
                    }`}
                >
                    <div
                        className="text-search flex items-center justify-center cursor-pointer"
                        onClick={() => setShowSearch(!showSearch)}
                    >
                        {showSearch ? (
                            <p className="flex items-center gap-2 text-lg">
                                <FaTimes />
                                Cancel
                            </p>
                        ) : (
                            <p className="text-2xl">
                                <BiSearch />
                            </p>
                        )}
                    </div>
                </Col>
                {showExportCSV ? (
                    <Col
                        xs={10}
                        sm={10}
                        md={5}
                        lg={4}
                        xl={4}
                        className="p-1 md:p-3 lg:p-4 xl:p-4"
                    >
                        <div className="cursor-pointer">
                            <p className="flex items-center justify-center gap-2">
                                <span>
                                    <RiFileExcel2Fill
                                        color="#4BA787"
                                        fontSize={18}
                                    />{' '}
                                </span>
                                <span className="font-bold text-xs lg:text-sm xl:text-sm text-filterColor font-circular">
                                    EXPORT TO CSV
                                </span>
                            </p>
                        </div>
                    </Col>
                ) : null}
            </Row>
        </CustomHeaderStyle>
    )
}

export default CustomTableHeader
