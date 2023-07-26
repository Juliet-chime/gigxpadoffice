import { Select } from 'antd';
import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateFilterStyle } from './style';
import { allMonth} from '../../utils/helperFunctions';
import { generateYearsBetween } from '../../utils/func';

const OneDateRange = ({children,...props}) => {

  const d = new Date();
  let year = d.getFullYear()

  const years = generateYearsBetween(1990, year)


  const yearOptions = years.map((year) => {
    console.log(typeof year)
    return {
      value: year,
      label: year,

    }
  })

  const monthOptions = allMonth.map((month) => {
    const value = month.toLowerCase()
    return {
      value,
      label: year,

    }
  })

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
      }) => (
        <div
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
            defaultValue={new Date().getFullYear()}
            value={new Date(date).getFullYear()}
            style={{
              width: 80,
            }}

            onChange={(value) => {
              console.log(value, 'year')
            }}
            options={yearOptions}
          />

          <Select
            defaultValue={allMonth[new Date(date).getMonth()]}
            // value={months[new Date(date).getMonth()]}
            style={{
              width: 80,
            }}
            onChange={({ target: { value } }) => {
              console.log(value, 'mon')
              return changeMonth(allMonth.indexOf(value))
            }
            }
            options={monthOptions}
          />

          {/* <select
          style={{
            border: '1px solid #EEEEEE',
            borderRadius: '5px',
            padding:'5px'
          }}
            value={new Date(date).getYear()}
            // value={getYear(date)}
            onChange={({ target: { value } }) => {
              console.log(value,'year')
              return changeYear(value)
            }}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select> */}

          {/* <select
            value={months[new Date(date).getMonth()]}
            // value={months[getMonth(date)]}
            onChange={({ target: { value } }) => {
              console.log(value,'mon')
              return changeMonth(months.indexOf(value))
            }
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select> */}

          {/* <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button> */}
        </div>
      )}
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