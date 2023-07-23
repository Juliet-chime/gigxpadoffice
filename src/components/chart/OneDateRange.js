import { Select } from 'antd';
import React, { forwardRef, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateFilterStyle } from './style';

const OneDateRange = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  function generateYearsBetween(startYear = 2000, endYear) {
    const endDate = endYear || new Date().getFullYear();
    let years = [];

    for (var i = startYear; i <= endDate; i++) {
      years.push(startYear);
      startYear++;
    }
    return years;
  }

  const d = new Date();
  let year = d.getFullYear()

  const years = generateYearsBetween(1990, year)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const yearOptions = years.map((year) => {
    console.log(typeof year)
    // const value = Str
    return {
      value: year,
      label: year,

    }
  })

  const monthOptions = months.map((month) => {
    const value = month.toLowerCase()
    return {
      value,
      label: year,

    }
  })

  // const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <button className="example-custom-input" onClick={onClick} ref={ref}>
        {value}
      </button>
    )
  });

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      customInput={<ExampleCustomInput />}
      startDate={startDate}
      endDate={endDate}
      selectsRange
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
            defaultValue={months[new Date(date).getMonth()]}
            // value={months[new Date(date).getMonth()]}
            style={{
              width: 80,
            }}
            onChange={({ target: { value } }) => {
              console.log(value, 'mon')
              return changeMonth(months.indexOf(value))
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
    //   inline
    >
  
      <DateFilterStyle>
        <div style={{border:'solid red',position:'absolute',width:'100%'}}>
        <span>APPLY FILTER</span>
        <span>CLEAR FILTER</span>
        </div>
     
      </DateFilterStyle>
        
    </DatePicker>
  );
}

export default OneDateRange