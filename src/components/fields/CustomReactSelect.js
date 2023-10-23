import React from 'react'
import Select from 'react-select'

const CustomReactSelect = ({ ...props }) => {
    const customStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: '1px solid #EEEEEE',
            borderRadius: '5px',
        }),
        valueContainer: (provided, state) => ({
            ...provided,
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: 'none',
        }),
    }
    return <Select styles={customStyles} {...props} />
}

export default CustomReactSelect
