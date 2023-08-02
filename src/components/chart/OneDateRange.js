// import { Select } from 'antd';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateFilterStyle } from './style';
import { allMonth, getCurrentYear, months} from '../../utils/helperFunctions';
import { generateYearsBetween } from '../../utils/func';
import Select from 'react-select'
import { color } from '../../assets/color';

const OneDateRange = ({children,...props}) => {

  const customStyles = {
    valueContainer: (provided, state) => ({
      ...provided,
      border:'none',
      borderColor:'white',
      // borderColor: state.isFocused ? 'red' : 'green',
      backgroundColor: color.white,
      // display: state.hasValue ? 'flex' : 'block',
      // alignItems: 'flex-start',
      // paddingTop: '10px',
      // width: '150px',
      // height: props.height,
    }),

    // dropdownIndicator: (provided, state) => ({
    //   ...provided,
    //   backgroundColor: colors.formFieldBGColor,
    //   height: '100%',
    // }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
    // placeholder: (provided, state) => ({
    //   ...provided,
    //   color: colors.modalSearchLabel,
    // }),
    // multiValue: (provided, state) => ({
    //   ...provided,
    //   backgroundColor: 'rgba(21, 132, 234, 0.1)',
    //   color: colors.modalSearchLabel,
    //   padding: '5px',
    //   fontSize: '14px',
    //   fontWeight: 500,
    //   marginLeft: '10px',
    // }),
  }

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
      className='datePicker'
      showPopperArrow={false}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => {
        // console.log(date)
        return  <div
        style={{
          margin: 10,
          display: "flex",
          alignItems: 'center',
          gap: '10px'
        }}
      >
        {/* <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          {"<"}
        </button> */}
        <Select  
        options={yearOptions} 
        styles={customStyles}
        onChange={({value}) => {
          // console.log(value)
          changeYear(value)
        }}/>
        <Select options={monthOptions}
               onChange={(e, i) => {
              changeMonth(e.value)
                 }}
        // styles={{
        //   control: (baseStyles, state) => ({
        //     ...baseStyles,
        //     borderColor: state.isFocused ? 'white' : 'white',
        //   }),}}
        />
        {/* <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          {">"}
        </button> */}
      </div>
      }}
      {...props}
    >
      <DateFilterStyle>
        <p>APPLY FILTER</p>
        <p className='linethrough'/>
        <p className='clear'>CLEAR FILTER</p>
      </DateFilterStyle>
        
    </DatePicker>               
  );
}

export default OneDateRange