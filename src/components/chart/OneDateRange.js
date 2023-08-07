import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateFilterStyle } from './style';
import { allMonth, getCurrentYear, getMonthName } from '../../utils/helperFunctions';
import { generateYearsBetween } from '../../utils/func';
import CustomReactSelect from '../fields/CustomReactSelect';

const OneDateRange = ({ showDateFilter, children, ...props }) => {

  const years = generateYearsBetween(1990, getCurrentYear())


  const yearOptions = years.map((year) => ({
    value: year,
    label: year,
  }))

  const monthOptions = allMonth.map((month, i) => ({
    value: i,
    label: month,
  }))

  return (
    <DatePicker
      showPopperArrow={false}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
      }) => {


        const getYear = getCurrentYear(date)
        const getMonth = getMonthName(date)

        return <div className='flex items-center gap-2 m-2'>
          <CustomReactSelect
            options={yearOptions}
            placeholder={getYear}
            onChange={({ value }) => {
              changeYear(value)
            }}
          />

          <CustomReactSelect
            options={monthOptions}
            placeholder={getMonth}
            onChange={(e, i) => { changeMonth(e.value) }}
          />
        </div>
      }}
      {...props}
    >
      {showDateFilter ? <DateFilterStyle>
        <p>APPLY FILTER</p>
        <p className='linethrough' />
        <p className='clear'>CLEAR FILTER</p>
      </DateFilterStyle> : null}
      {children}
    </DatePicker>
  );
}

export default OneDateRange