import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateFilterStyle } from './style';
import { allMonth, getCurrentYear, getMonthName } from '../../utils/helperFunctions';
import { generateYearsBetween } from '../../utils/func';
import CustomReactSelect from '../fields/CustomReactSelect';
import CustomButton from '../fields/CustomButton';
import { color } from '../../assets/color';

const OneDateRange = ({ showDateFilter, onApplyFilter, onClearFilter, filterStartDate, filterEndDate, children, ...props }) => {

  const yearOptions = generateYearsBetween(1990, getCurrentYear()).map((year) => ({
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
        <CustomButton color={color.mainColor} size='12px' weight='bold' onClick={onApplyFilter} disabled={!(filterStartDate && filterEndDate)}>APPLY FILTER</CustomButton>
        <p className='linethrough' />
        <CustomButton color={color.secondaryColor} size='12px' weight='bold' className='clear' onClick={onClearFilter}>CLEAR FILTER</CustomButton>
      </DateFilterStyle> : null}
      {children}
    </DatePicker>
  );
}

export default OneDateRange